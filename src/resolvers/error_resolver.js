import { navigate } from  '../navigationRef'

export function errorResolver(action, next) {
  if (action.type.replace(action.prefixType, '') == "Error") {
    console.log("error management", action.type, action);
    if (action.payload == "Error: Request failed with status code 401") {
      navigate('Login');
    }
  } else {
    console.log("no error management");
  }
  return next(null, action);
}
