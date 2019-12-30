import { action, decorate, observable } from 'mobx'
import AuthActions from '../actions/auth_actions'
import localStorage from '../helpers/localStorage'

class AuthStore {

  constructor() {
    this.on = AuthActions; 
  };

  name = '';
  authenticated = false;
  errorMessage = '';
  isAutorizationInit = false;

  isActionAvailable(actiontype) {
    return true
    // if (actiontype.endsWith("_")) {
    //   actiontype = actiontype.substr(0, actiontype.length - 1);
    // }
    // return this.actions.indexOf(actiontype) > -1
  }

  getError() {
    return this.errorMessage
  }

  setAuthorizations(authorizations) {
    this.isAutorizationInit = true
    //this.authorizations = authorizations
  }

  isAuthenticated() {
    return this.state.authenticated
  }

  checkToken() {
    const token = localStorage.getItem('remux-circle-token')
    if (token != null && token != '') {
      const name = localStorage.getItem('remux-circle-name')
      this.authenticated = true
      this.name = name
      this.errorMessage = ''
      AuthActions.authSetAuthorizations()
    } else {
      this.authenticated = false
      this.name = ''
      this.errorMessage = ''
    }
  }

  signInOrUp(token, name) {
    localStorage.setItem('remux-circle-token', token);
    localStorage.setItem('remux-circle-name', name);
    this.authenticated = true;
    this.name = name;
    this.errorMessage = '';
    AuthActions.authSetAuthorizations()
  }

  signOut() {
    localStorage.removeItem('remux-circle-token');
    localStorage.removeItem('remux-circle-name');
    this.authenticated = false;
    this.name = '';
    this.errorMessage = '';
  }

  authError(error) {
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

export default new  AuthStore();
