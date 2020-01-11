import { action, decorate, observable } from 'mobx'
import { CheckStandardError } from './StandardError'

class TopicStore {
  // the topic for the period
  // id                : int64
  // Comment           : max 100 car
  // IsActivated       : bool
  // DateStart         : DateTime
  // DateEnd           : DateTime
  id = -1;
  description = '';
  isActivated = false;
  dateStart = new Date();
  dateEnd = new Date();

  // call at first by the service to set the current topic
  set(topic) {
    this.id = topic.Id;
    this.description = topic.Description;
    this.isActivated = topic.IsActivated;
    this.dateStart = topic.DateStart;
    this.dateEnd = topic.DateEnd;
  }

  clear() {
    this.id = -1;
    this.description = '';
    this.isActivated = false;
    this.dateStart = '';
    this.dateEnd = '';
  }

  // get the current topic, call mostly by the TopicScreen
  get() {
    return {
      Id : this.id,  
      Description : this.description,
      IsActivated : this.isActivated,
      DateStart : this.dateStart,
      DateEnd : this.dateEnd
    }
  }

  error(error) {
    CheckStandardError(error);
  }
}

decorate( TopicStore, {
  id : observable,
  description : observable,
  dateStart : observable,
  dateEnd : observable,
  isActivated : observable,
  get: action,
  set: action,
  clear: action
})

export default new TopicStore();
