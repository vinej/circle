import signalr from 'react-native-signalr';
import { dispatch } from '../resolvers/dispatcher'
import { notificationType  as t } from '../actions/notification_action_type'
import { WSS_URL }  from './config_service'

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

  connect(nect, err) {
    this.connection = signalr.hubConnection(WSS_URL);
    this.connection.logging = true;
 
    this.proxy = this.connection.createHubProxy('notification');

    //receives broadcast messages from a hub function, called "helloApp"
    this.proxy.on('say', (something)  => { 
      console.log('message-from-server', something);
      dispatch( {
        type: t.sayReceive,
        payload: something
      });
    });
 
    // atempt connection, and handle errors
    this.connection.start().done(() => {
      console.log('Now connected, connection ID=' + this.connection.id);
      next();
      return;
    }).fail((error) => {
      console.log('Failed');
      err(error);
      return;
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
      dispatch( {
        type: t.error,
        payload: errorMessage,
      });
    });
  }
}

export default new NotificationService();