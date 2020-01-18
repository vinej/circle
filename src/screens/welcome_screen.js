import React from 'react';
import { Icon, Text, Button } from 'react-native-elements';
import { StyleSheet,  View } from 'react-native';
import AuthStore from '../stores/auth_store'
import { observer } from 'mobx-react'

const WelcomeScreen = ( { navigation}) => {
    return (
        <View style={styles.mainViewStyle}>
            <Icon type="feather" name="circle" size= {100}/>
            <Text h1 style={styles.circleStyle}>This is the circle</Text>
            <Text h2 style={styles.welcomeStyle}>Bienvenu </Text>
            <View>
            <Button 
                type="outline"
                onPress={ () => navigation.navigate("Signup")}
                icon= {
                    <Icon type="antdesign" name='login'/>
                }
                iconRight
                title="S'enregister   "
            />
            <Button   
                type="outline"
                onPress={ () => navigation.navigate("Login")}
                icon= {
                    <Icon type="octicon" name='sign-in'/>
                }
                iconRight
                title="Se connecter  "
            />
            </View>
            <Text>{ AuthStore.errorMessage.toString() }</Text>
        </View>

    );
};

const styles = StyleSheet.create( {
    circleStyle : {
        textAlign: 'center'
    },
    welcomeStyle : {
        textAlign: 'center'
    },
    mainViewStyle : {
        backgroundColor: 'beige',
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'space-evenly'   },
});

export default observer(WelcomeScreen);
