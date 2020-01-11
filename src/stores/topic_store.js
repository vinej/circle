import { action, decorate, observable } from 'mobx'

class TopicStore {
  // the topic for the period
  // id                : int64
  // Comment           : max 100 car
  // IsActivated       : bool
  // DateStart         : DateTime
  // DateEnd           : DateTime
  Id = -1;
  Description = '';
  IsActivated = false;
  StartDate = new Date();
  EndDate = new Date();

  // call at first by the service to set the current topic
  set(topic) {
    this.Id = topic.Id;
    this.Description = topic.Description;
    this.IsActivated = topic.IsActivated;
    this.StartDate = new Date(topic.StartDate);
    this.EndDate = new Date(topic.EndDate);
  }

  clear() {
    this.Id = -1;
    this.Description = '';
    this.IsActivated = false;
    this.StartDate = new Date();
    this.EndDate = new Date();
  }

  // get the current topic, call mostly by the TopicScreen
  get() {
    return {
      Id : this.Id,  
      Description : this.Description,
      IsActivated : this.IsActivated,
      StartDate : this.StartDate,
      EndDate : this.EndDate
    }
  }

  error(error) {
  }
}

decorate( TopicStore, {
  Id : observable,
  Description : observable,
  DateStart : observable,
  DateEnd : observable,
  IsActivated : observable,
  get: action,
  set: action,
  clear: action
})

export default new TopicStore();
