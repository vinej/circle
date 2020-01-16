import { dispatch } from '../resolvers/dispatcher'
import AuthService from '../services/auth_service';
import { authTypes as t } from '../actions/auth_action_type'
import AuthStore from '../stores/auth_store'

// must use static method to pass them as callback
export class AuthActions {
  static async authCheckToken() {
    if (AuthStore.token != null && AuthStore.token != '') {
      dispatch( {
        type: t.authCheckToken,
        payload: function() {
          const service = AuthService.getInstance()
          service.checkToken(AuthStore.token, AuthActions._authCheckToken , AuthActions.authError)
        }
      })
    } else {
      // no token, == false
      dispatch( {
        type: t.authCheckToken,
        payload: false
      })
    }
  }

  static _authCheckToken(isValid) {
    dispatch( {
      type: t.authCheckToken,
      payload: isValid
    })
  }

  static authSignIn(email, password) {
    dispatch( {
      type: t.authSignIn,
      payload: function() {
        const service = AuthService.getInstance()
        service.signIn({ email, password }, AuthActions._authSignIn, AuthActions.authError)
      }
    })
  }

  // called from service
  static _authSignIn(token, name) {
    dispatch( {
      type: t.authSignIn,
      payload: { token, name }
    })
  }

  static authSignUp(email, password, name) {
    dispatch( {
      type: t.authSignUp,
      payload: function() {
        const service = AuthService.getInstance()
        service.signUp({ email, password, name }, AuthActions._authSignUp, AuthActions.authError)
      }
    })
  }

  // called from service
  static _authSignUp(token, name) {
    dispatch( {
      type: t.authSignUp,
      payload: { token, name }
    })
  }

    // called from service
  static authSignOut() {
    dispatch( {
      type: t.authSignOut
    })
  }

  static authError(error) {
    dispatch( {
      type: t.authError,
      payload : error
    })
  }
}
