import api from './circle_api'

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
    var parameters = `/api/token?email=${email}&password=${password}`;
    api.get(parameters)
    .then(response => {
      next(response.data.Token, response.data.Alias); 
    })
    .catch(error => {
      let errorObject=JSON.parse(JSON.stringify(error));
      console.log(errorObject);
      err(errorObject.message);
    });
  }

  signUp({ email, password, name }, next, err) {
    var parameters = `/api/token?email=${email}&password=${password}&alias=${name}`;
    api.get(parameters)
    .then(response => {
      console.log(response)
      next(response.data.Token, response.data.Alias); 
    })
    .catch(error => { 
      let errorObject=JSON.parse(JSON.stringify(error));
      console.log(errorObject);
      err(errorObject.message);
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
