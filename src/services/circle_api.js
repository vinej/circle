import axios from 'axios'
import authStore from '../stores/auth_store'


export const HEADERS = function() {
    return { headers: { 'Authorization' : `Bearer ${authStore.token}` } } 
}

export const checkStandardError = function(error) {
    let errorObject=JSON.parse(JSON.stringify(error));
    return errorObject.message;
}

export default axios.create( {
    baseURL: 'http://099fd60a.ngrok.io/api'
});

