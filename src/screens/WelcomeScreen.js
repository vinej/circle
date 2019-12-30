import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';
import { AuthActions as on } from '../actions/auth_actions'

const WelcomeScreen = ( { navigation}) => {

    // is already connected, go directly to main flow
    on.authCheckToken();

    return (
        <View  style={styles.viewStyle}>
            <Text style={styles.testStyle}>This is the circle</Text>
            <Text style={styles.welcomeStyle}>Bienvenu </Text>
            <Button 
                title="S'enregister"
                onPress={ () => navigation.navigate("Signup")}
            />
            <Button 
                title="Se connecter"
                onPress={ () => navigation.navigate("Login")}
            />
        </View>
    );
};

const styles = StyleSheet.create( {
    testStyle : {
        textAlign: 'center',
        fontSize : 30,
        marginTop: 200,
        marginBottom: 200
    },
    welcomeStyle : {
        textAlign: 'center',
    },
    viewStyle : {
        backgroundColor: 'yellow',
    }
});

export default WelcomeScreen;
