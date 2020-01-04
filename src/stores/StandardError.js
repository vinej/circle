import { navigate } from '../navigationRef'

export const CheckStandardError = function(error) {
    if (error == 'Request failed with status code 402' || error == 'Request failed with status code 401') {
        navigate("Login");
    }
}