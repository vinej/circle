import React, { useState } from 'react';
import { observer } from 'mobx-react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button} from 'react-native';
import { AuthActions as on } from '../actions/auth_actions';
import authStore from '../stores/auth_store';

const SignupScreen = ( { navigation }) => {

  const [email, setEmail] = useState('');
  const [alias, setAlias] = useState('');
  const [password, setPassword] = useState('');

  return (
      <View>
        <Text style={styles.maintitle}>Signup</Text>

        <Text styles={styles.title}>Alias</Text>
        <TextInput 
            secureTextEntry={false}
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText= {newValue => setAlias(newValue)}
            />

        <Text styles={styles.title}>Courriel</Text>
        <TextInput 
            secureTextEntry={false}
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText= {newValue => setEmail(newValue)}
            />        
        <Text styles={styles.title}>Mot de passe</Text>
        <TextInput 
            secureTextEntry={true}
            keyboardType={"visible-password"}
            placeholder={"mot de passe"}
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText= {newValue => setPassword(newValue)}
            />
          <TouchableOpacity
              onPress={ () => on.authSignUp(email, password, alias) }
          >
            <Text>S'enregistrer</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={ () => navigation.navigate("Login") }
          >
            <Text>Se connecter</Text>
          </TouchableOpacity>

          <Text> { authStore.errorMessage }</Text>
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
    fontSize : 30
  },
  input: {
    fontSize:14,
    margin : 15,
    borderColor : 'black',
    borderWidth: 1,
    height:25
  }
});

export default observer(SignupScreen);
