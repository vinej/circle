export const ROOT_URL = 'http://localhost:3090'
export const WSS_URL = 'ws://localhost:5000'
export const API_URL = 'http://localhost:3090/api'
export const HEADERS = function() {
  return { headers: { 'Authorization' : 'Bearer '+localStorage.getItem('remux-circle-token') } } 
}
export const PARAMETERS = function() {
  return 'project=all&locale=en-US' 
}
