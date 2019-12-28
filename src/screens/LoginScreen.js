import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
        <Text style={styles.maintitle}>Sign in</Text>
        <Text styles={styles.title}>Email</Text>
        <TextInput 
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText= {newValue => setEmail(newValue)}
            />
        <Text styles={styles.title}>Mot de passe</Text>
        <TextInput 
            secureTextEntry={true}
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText= {newValue => setPassword(newValue)}
            />
          <TouchableOpacity>
            <Text>Se connecter</Text>
          </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    margin : 5,
    fontSize : 15,
    borderWidth: 1
  },
  input: {
    margin : 15,
    borderColor : 'black',
    borderWidth: 1
  }
});

export default LoginScreen;