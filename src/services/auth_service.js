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
    api.post('/auth/signin', { email, password })
    .then(response => {
      console.log(response.data.token)
      next(response.data.token, response.data.name); 
    })
    .catch(response => {
      err(response.data)
    });
  }

  signUp({ email, password, name }, next, err) {
    api.post('/auth/signup', { email, password, name })
    .then(response => {
      console.log(response.data.token)
      next(response.data.token, name); 
    })
    .catch(response => err(response.data));
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
