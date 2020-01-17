import { navigate } from '../navigation_ref'

export const CheckStandardError = function(error) {
    if (error == 'Request failed with status code 402' || error == 'Request failed with status code 401') {
        navigate("Login");
    }
}