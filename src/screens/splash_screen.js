import React, { useEffect } from 'react';
import { AuthAction as on } from '../actions/auth_actions'

const SplashScreen = () => {
    useEffect(() => {
        // is already connected, go directly to main flow
        on.loadToken();
        on.checkToken();
    }, []);
    
    return null
};

export default SplashScreen;