import React, { useEffect } from 'react';
import { AuthAction as on} from '../actions/auth_actions'
import AuthStore from '../stores/auth_store' 

const SplashScreen = () => {

    useEffect(() => {
        // is already connected, go directly to main flow
        AuthStore.loadToken();
        on.authCheckToken(); 
    }, []);
    
    return null
};

export default SplashScreen;