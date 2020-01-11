import api from './circle_api'
import { HEADERS } from './circle_api'

export default class TopicService  {
  constructor() {
    this.instanceService = null
  }

  static setInstance(instanceService) {
    this.instanceService = instanceService
  }

  static getInstance() {
    console.log("new service");
    if (this.instanceService == null) {
      this.instanceService = new TopicService()
    }
    return this.instanceService
  }  

  getCurrent(next, err) {
    api.get(`/${this.service}/0/current`, HEADERS())
    .then(response => {
        next(response.data);
    })
    .catch(error => {
      err(error);
    });
  }

  activate(entity, next, err) {
    api.put(`/${this.service}/${enitiy.Id}/activate`, entity, HEADERS())
    .then(response => {
      next(response.data); 
    })
    .catch(error => {
      err(error);
    });
  };

  deactivate(entity, next, err) {
    api.put(`/${this.service}/${enitiy.Id}/deactivate`, entity, HEADERS())
    .then(response => {
      next(response.data); 
    })
    .catch(error => {
      err(error);
    });
  };
}
