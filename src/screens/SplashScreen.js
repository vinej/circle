import React, { useEffect } from 'react';
import { AuthActions as on} from '../actions/auth_actions'

const SplashScreen = () => {

    useEffect(() => {
        // is already connected, go directly to main flow
        on.authCheckToken(); 
    }, []);
    
    return null
};

export default SplashScreen;