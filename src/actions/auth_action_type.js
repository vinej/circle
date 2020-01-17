export let authPrefix = "auth_"

export let authType = {
  checkToken          : authPrefix + 'checkToken',
  loadToken           : authPrefix + 'loadToken',
  signIn              : authPrefix + 'signIn',
  signUp              : authPrefix + 'signUp',
  signOut             : authPrefix + 'signOut',
  error               : authPrefix + 'error'
}
