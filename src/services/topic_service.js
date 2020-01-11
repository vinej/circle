import api from './circle_api'
import { HEADERS } from './circle_api'
import CrudService from './crud_service' 

export default class TopicService  extends CrudService {
  constructor() {
    super("topic");
    this.instanceService = null
  }

  static getInstance() {
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
}
