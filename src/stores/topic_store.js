import { action, decorate, observable } from 'mobx'
import { CheckStandardError } from './StandardError'

class TopicStore {
  // the topic for the period
  // Id                : int64
  // Comment           : max 100 car
  // IsActivated       : bool
  // DateStart         : DateTime
  // DateEnd           : DateTime
  // ? WinnerPrice       : The price that will be given to the winner
  // ? currentWinnerId   : The current member in first place until now to win                
  // ? currentWinnerLike : The number of like for this member
  // a adviser list is associated to one topic
  topic = {};

  // call at first by the service to set the current topic
  set(topic) {
    this.topic = topic;
  }

  // get the current topic, call mostly by the TopicScreen
  get() {
    return this.topic;
  }

  activate(topic) {
    this.topic = topic;
  }

  deactivate(topic) {
    this.topic = topic;
    // activate a topic
  }

  error(error) {
    CheckStandardError(error);
  }
}

decorate( TopicStore, {
  topic : observable,
  get: action,
  set: action,
  activate : action,
  desactivate: action
})

export default new TopicStore();

