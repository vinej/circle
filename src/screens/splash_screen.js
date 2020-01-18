import React, { useEffect } from 'react';
import { AuthAction as on } from '../actions/auth_actions'
import { Text } from 'react-native';
import {SafeAreaView} from 'react-navigation'

const SplashScreen = () => {
    useEffect(() => {
        // is already connected, go directly to main flow
        on.checkToken();
    }, []);
    
    return (
        <SafeAreaView forceInset={ { top: 'always'} }>
            <Text>Loading ...</Text>
        </SafeAreaView>
    );
};

export default SplashScreen;