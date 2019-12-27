import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const WelcomeScreen = () => {
    const name = 'Zachary';

    return (
        <View  style={styles.viewStyle}>
            <Text style={styles.testStyle}>This is the circle</Text>
            <Text style={styles.welcomeStyle}>Bienvenu {name}</Text>
            <Button title="S'enregister"></Button>
            <Button title="Acceder a l'application"></Button>
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
