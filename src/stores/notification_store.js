import { action, decorate, observable } from 'mobx'

class NotificationStore {
  messages = [];
  count = 0;
  isConnected = false;
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
    this.isConnected = true;
  }

  error(error) {
    this.errorMessage = error;
    this.isConnected = false;
  }
}

decorate( NotificationStore, {
  messages : observable,
  isConnected: observable,
  error: observable,
  send: action,
  receive: action
})

export default new NotificationStore();
