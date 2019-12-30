import React, { useState } from 'react';
import { observer } from 'mobx-react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import { AuthActions as on } from '../actions/auth_actions'
import authStore from '../stores/auth_store'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
        <Text style={styles.maintitle}>Sign in</Text>

        <Text styles={styles.title}>Courriel</Text>
        <TextInput 
            secureTextEntry={false}
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText= {newValue => setEmail(newValue)}
            placeHolder="courriel"
            />

        <Text styles={styles.title}>Mot de passe</Text>
        <TextInput 
            keyboardType={"visible-password"}
            secureTextEntry={true}
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText= {newValue => setPassword(newValue)}
            placeHolder={"mot de passe"}
            />
          <TouchableOpacity 
            onPress={ () => on.authSignIn(email, password) }          
          >
            <Text>Se connecter</Text>
          </TouchableOpacity>
          <Text>{ authStore.errorMessage }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    margin : 5,
    fontSize : 30,
    borderWidth: 1
  },
  maintitle: {
    margin : 5,
    fontSize : 30,

  },
  input: {
    fontSize:14,
    margin : 15,
    borderColor : 'black',
    borderWidth: 1,
    height:25
  }
});

export default observer(LoginScreen);