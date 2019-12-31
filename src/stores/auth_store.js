import { action, decorate, observable } from 'mobx'
import localStorage from '../helpers/localStorage'
import { navigate } from  '../navigationRef'

class AuthStore {
  name = '';
  authenticated = false;
  errorMessage = '';
  isAutorizationInit = false;

  getError() {
    return this.errorMessage
  }

  isAuthenticated() {
    return this.authenticated
  }

  async checkToken() {
    const token = await localStorage.getItem('remux-circle-token')
    if (token != null && token != '') {
      const name = await localStorage.getItem('remux-circle-name')
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
    }
  }

  async signInOrUp(token, name) {
    await localStorage.setItem('remux-circle-token', token);
    await localStorage.setItem('remux-circle-name', name);
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
    this.errorMessage = '';
    navigate("Welcome");
  }

  authError(error) {
    console.log("***error*** : " + error)
    this.errorMessage = error;
    this.authenticated = false;
    this.name = '' ;
    this.isAutorizationInit = false
    console.log(error)
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
