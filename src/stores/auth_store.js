import { action, decorate, observable } from 'mobx'
import localStorage from '../helpers/localStorage'
import { navigate } from  '../navigationRef'

class AuthStore {
  name = '';
  token = '';
  authenticated = false;
  errorMessage = '';
  isAutorizationInit = false;

  getError() {
    return this.errorMessage
  }

  isAuthenticated() {
    return this.authenticated
  }

  async checkToken(isValid) {
    if (isValid) {
      // check if the token still valid
      const name = await localStorage.getItem('remux-circle-name')
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
    await localStorage.setItem('remux-circle-token', token.toString());
    await localStorage.setItem('remux-circle-name', name.toString());
    this.token = token;
    this.authenticated = true;
    this.name = name;
    this.errorMessage = '';
    this.isAutorizationInit = true
    navigate('mainFlow');
  }

  async signOut() {
    await localStorage.removeItem('remux-circle-token');
    await localStorage.removeItem('remux-circle-name');
    this.authenticated = false;
    this.name = '';
    this.toen = '';
    this.errorMessage = '';
    navigate("Welcome");
  }

  async error(error) {
    await localStorage.removeItem('remux-circle-token');
    await localStorage.removeItem('remux-circle-name');
    this.errorMessage = error;
    this.authenticated = false;
    this.name = '' ;
    this.token = '';
    this.isAutorizationInit = false
    console.log(error)
    navigate('Login');
  }
}

decorate(AuthStore,
{
  name : observable,
  authenticated : observable,
  errorMessage : observable,
  isAutorizationInit : observable,
  signOut: action,
  signInOrUp: action,
  checkToken: action,
  setAuthorizations: action
});

export default new AuthStore();
