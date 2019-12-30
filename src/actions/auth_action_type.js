export let authPrefixType = "auth_"

export let authTypes = {
  authCheckToken          : authPrefixType + 'CheckToken',
  authSetAuthorizations   : authPrefixType + 'SetAuthorizations',
  authSignIn              : authPrefixType + 'SignIn',
  authSignUp              : authPrefixType + 'SignUp',
  authSignOut             : authPrefixType + 'SignOut',
  authCheckToken          : authPrefixType + 'CheckToken',
  authError               : authPrefixType + 'Error'
}
