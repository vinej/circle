import api from './circle_api'
import { checkStandardError } from './circle_api'

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

  signIn({ email, password }, next, err) {
    var parameters = `/token?email=${email}&password=${password}`;
    api.get(parameters)
    .then(response => {
      next(response.data.Token, response.data.Alias); 
    })
    .catch(error => {
      err(checkStandardError(error));
    });
  }

  signUp({ email, password, name }, next, err) {
    var parameters = `/token?email=${email}&password=${password}&alias=${name}`;
    api.get(parameters)
    .then(response => {
      next(response.data.Token, response.data.Alias); 
    })
    .catch(error => { 
      err(checkStandardError(error));
    });
  }

  setAuthorizations(next, err) {
    api.get('/api/actions')
    .then(response => {
      next(response.data)
    })
    .catch(response => {
      err(response.data)
    })
  }
}
