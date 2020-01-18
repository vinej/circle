import { action, decorate, observable } from 'mobx'

class NotificationStore {
  messages = [];
  count = 0;
  isConnected = false;
  internalError = null;
  errorMessage = '';

  // call at first by the service to set the current topic
  send(something) {
    this.messages.push( { Id: this.count.toString(), From: '>>', Message: something});
    this.count = this.count + 1;
  }

  // get the current topic, call mostly by the TopicScreen
  receive(something) {
    this.messages.push( { Id: this.count.toString(), From: '<<', Message: something});
    this.count = this.count + 1;
  }

  connect() {
    this.errorMessage = '';
    this.internalError = null;
    this.isConnected = true;
  }

  error(error) {
    this.internalError = error;
    this.errorMessage = 'Notification server not available';
    this.isConnected = false;
  }
}

decorate( NotificationStore, {
  messages : observable,
  isConnected: observable,
  errorMessage: observable,
  internalError : observable,
  error: action,
  send: action,
  receive: action
})

export default new NotificationStore();
