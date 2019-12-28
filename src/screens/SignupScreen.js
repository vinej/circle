import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';

const SignupScreen = () => {

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
          <TouchableOpacity>
            <Text>S'enregistrer</Text>
          </TouchableOpacity>
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

export default SignupScreen;