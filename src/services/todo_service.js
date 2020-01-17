import CrudService from './crud_service' 

export default class TodoService  extends CrudService {
  constructor() {
    super("todo");
    this.instanceService = null
  }

  static setInstance(instanceService) {
    this.instanceService = instanceService
  }

  static getInstance() {
    if (!this.instanceService) {
      this.instanceService = new CrudService('todo')
    }
    return this.instanceService
  }  
}
