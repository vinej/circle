import api from './circle_api'
import { HEADERS } from './circle_api'

export default class CrudService {

  static setInstance(instanceService) {
    this.instanceService = instanceService
  }

  constructor(service) {
    this.service = service;
  }

  add(entity, next, err) {
    api.post(`/${this.service}`, entity, HEADERS())
    .then(response => {
      next(response.data); 
    })
    .catch(error => {
      err(error);
    });
  };

  delete(entity, next, err) {
    api.delete(`/${this.service}/${entity.Id}`, HEADERS())
    .then(response => {
      next(entity); 
    })
    .catch(error => {
      err(error);
    });
  };

  update(entity, next, err) {
    api.put(`/${this.service}`, entity, HEADERS())
    .then(response => {
      next(response.data); 
    })
    .catch(error => {
      err(error);
    });
  };

  getAll(next, err) {
    api.get(`/${this.service}`, HEADERS())
    .then(response => {
        next(response.data);
    })
    .catch(error => {
      err(error);
    });
  };
}
