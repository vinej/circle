import { action, decorate, observable } from 'mobx'
import localStorage from '../helpers/local_storage'
import { navigate } from  '../navigation_ref'

class AuthStore {
  name = '';
  token = '';
  isAuthenticated = false;
  errorMessage = '';
  internalError = null;
  isAutorizationInit = false;

  getError() {
    return this.errorMessage
  }

  async loadToken() {
    this.token =  await localStorage.getItem('circle-token');
  }

  async checkToken(isValid) {
    if (isValid.toString() == 'true') {
      // check if the token still valid
      const token = await localStorage.getItem('circle-token')
      const name = await localStorage.getItem('circle-name')
      this.token = token;
      this.isAuthenticated = true
      this.name = name
      this.errorMessage = ''
      this.internalError = null;
      this.isAutorizationInit = true
      navigate('Todo');
    }
  }

  async signInOrUp(token, name) {
    await localStorage.setItem('circle-token', token.toString());
    await localStorage.setItem('circle-name', name.toString());
    this.token = token;
    this.isAuthenticated = true;
    this.name = name;
    this.errorMessage = '';
    this.internalError = null;
    this.isAutorizationInit = true
    navigate('Todo');
  }

  async signOut() {
    await localStorage.removeItem('circle-token');
    await localStorage.removeItem('circle-name');
    this.isAuthenticated = false;
    this.name = '';
    this.token = '';
    this.errorMessage = '';
    this.internalError = null;
    navigate("Welcome");
  }

  async error(error) {
    await localStorage.removeItem('circle-token');
    await localStorage.removeItem('circle-name');
    this.internalError = error;
    if (error.toString().indexOf('code 401') != -1) {
      this.errorMessage = "Authentification error";
    } else {
      this.errorMessage = 'Authentification server not available';
    }
    this.isAuthenticated = false;
    this.name = '' ;
    this.token = '';
    this.isAutorizationInit = false;
  }
}

decorate(AuthStore,
{
  name : observable,
  isAuthenticated : observable,
  errorMessage : observable,
  internalError: observable,
  error : action,
  signOut: action,
  signInOrUp: action,
  checkToken: action
});

export default new AuthStore();
