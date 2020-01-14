import signalr from 'react-native-signalr';
import { dispatch } from '../resolvers/dispatcher'
import { notificationTypes  as t } from '../actions/notification_action_type'

class NotificationService {

  proxy = null;
  connection = null;

  say(something, next, err) {
    this.proxy.invoke('say', something)
    .done(() => next(something))
    .fail(() => {
      console.warn('Something went wrong when calling server, it might not be up and running?')
      err("error");
    }); 
  }

  connect() {
    this.connection = signalr.hubConnection('http://5a293d2c.ngrok.io/signalr');
    this.connection.logging = true;
 
    this.proxy = this.connection.createHubProxy('notification');
    //receives broadcast messages from a hub function, called "helloApp"
    this.proxy.on('say', (something)  => { 
      console.log('message-from-server', something);
      dispatch( {
        type: t.notificationSayReceive,
        payload: something
      });
    });
 
    // atempt connection, and handle errors
    this.connection.start().done(() => {
      console.log('Now connected, connection ID=' + this.connection.id);
 
      this.proxy.invoke('say', 'Bonjour from React Native')
        .done(() => {
          console.log('dsend-to-server');
        }).fail(() => {
          console.warn('Something went wrong when calling server, it might not be up and running?')
        }); 
    }).fail(() => {
      console.log('Failed');
    });

    //connection-handling
    this.connection.connectionSlow(() => {
      console.log('We are currently experiencing difficulties with the connection.')
    });
 
    this.connection.error((error) => {
      const errorMessage = error.message;
      let detailedError = '';
      if (error.source && error.source._response) {
        detailedError = error.source._response;
      }
      if (detailedError === 'An SSL error has occurred and a secure connection to the server cannot be made.') {
        console.log('When using react-native-signalr on ios with http remember to enable http in App Transport Security https://github.com/olofd/react-native-signalr/issues/14')
      }
      console.debug('SignalR error: ' + errorMessage, detailedError)
    });
  }
}

export default new NotificationService();