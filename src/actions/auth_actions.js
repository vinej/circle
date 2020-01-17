import { dispatch } from '../resolvers/dispatcher'
import AuthService from '../services/auth_service';
import { authType as t } from '../actions/auth_action_type'
import AuthStore from '../stores/auth_store'

// must use static method to pass them as callback
export class AuthAction {

  static async loadToken(next) {
      dispatch( {
        type: t.loadToken
      });
  }

  static checkToken() {
    if (AuthStore.token != null && AuthStore.token != '') {
      dispatch( {
        type: t.checkToken,
        payload: function() {
          const service = AuthService.getInstance()
          service.checkToken(AuthStore.token, AuthAction._checkToken , AuthAction.error)
        }
      })
    } else {
      // no token, == false
      dispatch( {
        type: t.checkToken,
        payload: false
      })
    }
  }

  static _checkToken(isValid) {
    dispatch( {
      type: t.checkToken,
      payload: isValid
    })
  }

  static signIn(email, password) {
    dispatch( {
      type: t.signIn,
      payload: function() {
        const service = AuthService.getInstance()
        service.signIn({ email, password }, AuthAction._signIn, AuthAction.error)
      }
    })
  }

  // called from service
  static _signIn(token, name) {
    dispatch( {
      type: t.signIn,
      payload: { token, name }
    })
  }

  static authSignUp(email, password, name) {
    dispatch( {
      type: t.signUp,
      payload: function() {
        const service = AuthService.getInstance()
        service.signUp({ email, password, name }, AuthAction._signUp, AuthAction.error)
      }
    })
  }

  // called from service
  static _signUp(token, name) {
    dispatch( {
      type: t.signUp,
      payload: { token, name }
    })
  }

    // called from service
  static signOut() {
    dispatch( {
      type: t.signOut
    })
  }

  static error(error) {
    dispatch( {
      type: t.error,
      payload : error
    })
  }
}
