import api from './circle_api'
import { HEADERS } from './circle_api'

export default class CrudService {
  constructor(service) {
    this.service = service;
  }

  add(entity, next, err) {
    api.post(`/${this.service}`, entity, HEADERS())
    .then(response => {
      next(response.data); 
    })
    .catch(error => {
      err(checkStandardError(error));
    });
  };

  delete(entity, next, err) {
    api.delete(`/${this.service}/${entity.Id}`, HEADERS())
    .then(response => {
      next(entity); 
    })
    .catch(error => {
      err(checkStandardError(error));
    });
  };

  update(entity, next, err) {
    api.put(`/${this.service}`, entity, HEADERS())
    .then(response => {
      next(response.data); 
    })
    .catch(error => {
      err(checkStandardError(error));
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
