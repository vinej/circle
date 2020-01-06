import CrudService from './crud_service' 

export default class TopicService extends CrudService {
  constructor() {
    this.instanceService = null
  }

  static setInstance(instanceService) {
    this.instanceService = instanceService
  }

  static getInstance() {
    if (!this.instanceService) {
      this.instanceService = new TopicService()
    }
    return this.instanceService
  }  

  getCurrent(next, err) {
    api.get(`/${this.service}/getcurrent`, HEADERS())
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
