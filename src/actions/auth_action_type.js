export let authPrefixType = "auth_"

export let authTypes = {
  authSetAuthorizations   : authPrefixType + 'SetAuthorizations',
  authSignIn              : authPrefixType + 'SignIn',
  authSignUp              : authPrefixType + 'SignUp',
  authSignOut             : authPrefixType + 'SignOut',
  authCheckToken          : authPrefixType + 'CheckToken',
  authError               : authPrefixType + 'Error'
}
