import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

const SplashScreen = () => {
    return (
        <View style={ styles.root} >
            <Icon type="feather" name="circle" size= {100}/>
            <Text style={ styles.text}>Loading ...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        justifyContent: 'space-around',
        ...StyleSheet.absoluteFillObject,
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 40,
    },
});

export default SplashScreen;