import axios from 'axios'
import localStorage from '../helpers/localStorage'

export default axios.create( {
    baseURL: 'http://localhost:3090',
    headers: { Authorization: localStorage.getItem('remux-circle-token') },
    params: 'project=all&locale=en-US'
});

