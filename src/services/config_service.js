export const ROOT_URL = 'http://0fe75944.ngrok.io'
export const WSS_URL = `${ROOT_URL}/signalr`
export const API_URL = `${ROOT_URL}/api`
export const HEADERS = function() {
  return { headers: { 'Authorization' : 'Bearer '+localStorage.getItem('remux-circle-token') } } 
}
export const PARAMETERS = function() {
  return 'project=all&locale=en-US' 
}
