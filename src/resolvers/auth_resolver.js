import authStore  from '../stores/auth_store'
import { authType as t, authPrefix  } from '../actions/auth_action_type'

export function authResolver(action, next) {
  if (authPrefix !== action.prefixType) {
    return next(null, action);
  }

  switch(action.type) {
    case t.loadToken:
      authStore.loadToken();
      break;
    case t.checkToken:
      authStore.checkToken(action.payload)
      break;
    case t.signIn:
    case t.signUp:
      authStore.signInOrUp(action.payload.token, action.payload.name)
      break;
    case t.signOut:
      authStore.signOut()
      break;
    case t.error:
      authStore.error(action.payload)
      break;
  }
  return next(null, action);
}
