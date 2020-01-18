import { navigate } from  '../navigation_ref'
import { authPrefixType as authPrefix } from '../actions/auth_action_type'

export function errorResolver(action, next) {
  if (action.type.replace(action.prefixType, '') === "error") {
    if (action.payload != null) {
      var error = action.payload.toString();
      if (error.indexOf("code 401") != -1)
      {
        navigate('Login');
        return next(null, action); 
      }

      if (error.indexOf("code 404") != -1)
      {
        navigate('Welcome');
        return next(null, action); 
      }

      if (error.indexOf("code 409") != -1)
      {
        navigate('Welcome');
        return next(null, action); 
      }

      if (error.indexOf("code 500") != -1)
      {
        navigate('Welcome');
        return next(null, action); 
      }
    }
  }

  return next(null, action);
}
