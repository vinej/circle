import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import {SafeAreaView} from 'react-navigation'

const SplashScreen = () => {
    return (
        <SafeAreaView forceInset={ { top: 'always'} }>
            <Text style={ styles.text}>Loading ...</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safearea: {
    },
    text: {
        marginLeft: 15,
        fontSize: 40
    },
});

export default SplashScreen;