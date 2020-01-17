import axios from 'axios'
import authStore from '../stores/auth_store'
import { API_URL } from './config_service'
import { isFlowCancellationError } from 'mobx'

export const HEADERS = function() {
    return { headers: { 'Authorization' : `Bearer ${authStore.token}` } } 
}

export const checkStandardError = function(error) {
    let errorObject=JSON.parse(JSON.stringify(error));
    return errorObject.message;
}

export default axios.create( {
    baseURL: API_URL
});

export const isOnline = false;

