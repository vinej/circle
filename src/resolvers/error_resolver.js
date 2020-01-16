import { navigate } from  '../navigationRef'
import { authPrefixType } from '../actions/auth_action_type'

export function errorResolver(action, next) {
  if (action.type.replace(action.prefixType, '') === "Error" && action.prefixType != authPrefixType) {
    if (action.payload !== null) {
      if (action.payload.toString().indexOf("code 401") !== -1 ||
          action.payload.toString().indexOf("code 404") !== -1
      ) {
        navigate('Login');
        return;
      }
    }
  }

  if (action.payload !== null) {
    if (action.payload.toString().indexOf('code 404') !== -1) {
      action.payload = "Server not available try later : code 404";
    } else if (action.payload.toString().indexOf('code 500') !== -1) {
      action.payload = "Server error, call admin : code 500";
    }
  }

  return next(null, action);
}
