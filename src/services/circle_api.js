import axios from 'axios'
import localStorage from '../helpers/localStorage'

export default axios.create( {
    baseURL: 'http://af1f511d.ngrok.io',
    headers: { Authorization: localStorage.getItem('remux-circle-token') },
    params: 'project=all&locale=en-US'
});

