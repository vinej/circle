import React, { useState } from 'react';
import { observer } from 'mobx-react'
import { StyleSheet, View, TextInput, Text} from 'react-native';
import { Button, Input, Divider} from 'react-native-elements';
import { AuthAction as on } from '../actions/auth_actions'
import authStore from '../stores/auth_store'
import {SafeAreaView} from 'react-navigation'

const LoginScreen = ( { navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView forceInset={ { top: 'always'} }>
    <View>
        <Text style={styles.maintitle}>Se connecter a Circle</Text>
        <Text style={styles.title}>Courriel</Text>
        <Input 
            secureTextEntry={false}
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText= {newValue => setEmail(newValue)}
            placeHolder="courriel"
            />

        <Text style={styles.title}>Mot de passe</Text>
        <Input 
            keyboardType={"visible-password"}
            secureTextEntry={true}
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText= {newValue => setPassword(newValue)}
            placeHolder={"mot de passe"}
            />
          <View style={ styles.viewButton}>
          <Button
            buttonStyle={styles.button}
            title="Se connecter"
            type='outline'
            onPress={ () => on.signIn(email, password) }          
          />
          <Button
            buttonStyle={styles.button}
            type='outline'
            title="Retour a Welcome" 
            onPress={ () => navigation.navigate('Welcome') }          
          />
          </View>
          <Text>{ authStore.errorMessage.toString() }</Text>
    </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontSize: 20
  },
  maintitle: {
    margin : 5,
    marginBottom:20,
    fontSize : 30,

  },
  input: {
    fontSize:14,
    margin : 15,
    borderColor : 'black',
    borderWidth: 1,
    height:25
  },
  viewButton: {
    alignItems: "center",
    marginTop: 20
  },
  button: {
    marginBottom: 5
  }
});

export default observer(LoginScreen);