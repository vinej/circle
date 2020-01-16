import api from './circle_api'
import { HEADERS } from './circle_api'

export default class AuthService {
  constructor() {
    this.instanceService = null
  }

  static setInstance(instanceService) {
    this.instanceService = instanceService
  }

  static getInstance() {
    if (!this.instanceService) {
      this.instanceService = new AuthService()
    }
    return this.instanceService
  }

  checkToken(token, next, err) {
    var parameters = `/token?token=check`;
    api.get(parameters, HEADERS())
    .then(response => {
      next(response.data); 
    })
    .catch(error => {
      err(error);
    });
  }

  signIn({ email, password }, next, err) {
    var parameters = `/token?email=${email}&password=${password}`;
    api.get(parameters)
    .then(response => {
      next(response.data.Token, response.data.Alias); 
    })
    .catch(error => {
      err(error);
    });
  }

  signUp({ email, password, name }, next, err) {
    var parameters = `/token?email=${email}&password=${password}&alias=${name}`;
    api.get(parameters)
    .then(response => {
      next(response.data.Token, response.data.Alias); 
    })
    .catch(error => { 
      err(error);
    });
  }
}
