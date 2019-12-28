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
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText= {newValue => setAlias(newValue)}
            />
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
            <Text>S'enregistrer</Text>
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
  maintitle: {
    margin : 5,
    fontSize : 30,
    borderWidth: 1
  },
  input: {
    margin : 15,
    borderColor : 'black',
    borderWidth: 1
  }
});

export default SignupScreen;