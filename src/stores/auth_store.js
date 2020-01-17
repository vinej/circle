import { action, decorate, observable } from 'mobx'
import localStorage from '../helpers/local_storage'
import { navigate } from  '../navigation_ref'

class AuthStore {
  name = '';
  token = '';
  authenticated = false;
  errorMessage = '';
  isAutorizationInit = false;

  getError() {
    return this.errorMessage
  }

  async loadToken() {
    this.token = await localStorage.getItem('circle-token')
  }

  async checkToken(isValid) {
    if (isValid) {
      // check if the token still valid
      const token = await localStorage.getItem('circle-token')
      const name = await localStorage.getItem('circle-name')
      this.token = token;
      this.authenticated = true
      this.name = name
      this.errorMessage = ''
      this.isAutorizationInit = true
      navigate('mainFlow');
    } else {
      this.authenticated = false
      this.name = ''
      this.errorMessage = ''
      this.isAutorizationInit = false
      navigate('Welcome');
    }
  }

  async signInOrUp(token, name) {
    await localStorage.setItem('circle-token', token.toString());
    await localStorage.setItem('circle-name', name.toString());
    this.token = token;
    this.authenticated = true;
    this.name = name;
    this.errorMessage = '';
    this.isAutorizationInit = true
    navigate('mainFlow');
  }

  async signOut() {
    await localStorage.removeItem('circle-token');
    await localStorage.removeItem('circle-name');
    this.authenticated = false;
    this.name = '';
    this.token = '';
    this.errorMessage = '';
    navigate("Welcome");
  }

  async error(error) {
    await localStorage.removeItem('circle-token');
    await localStorage.removeItem('circle-name');
    this.errorMessage = error;
    this.authenticated = false;
    this.name = '' ;
    this.token = '';
    this.isAutorizationInit = false
    navigate('Login');
  }
}

decorate(AuthStore,
{
  name : observable,
  authenticated : observable,
  errorMessage : observable,
  error : action,
  signOut: action,
  signInOrUp: action,
  checkToken: action
});

export default new AuthStore();
