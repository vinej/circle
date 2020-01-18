import React, { useState } from 'react';
import { observer } from 'mobx-react'
import { StyleSheet, View, TextInput} from 'react-native';
import { Text, Button, Input} from 'react-native-elements';
import { AuthAction as on } from '../actions/auth_actions';
import AuthStore from '../stores/auth_store';
import {SafeAreaView} from 'react-navigation'
import ErrorMessage from '../components/error_message'

const SignupScreen = ( { navigation }) => {

  const [email, setEmail] = useState('');
  const [alias, setAlias] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView forceInset={ { top: 'always'} }>
      <View>
        <Text style={styles.maintitle}>S'enregistrer a Circle</Text>

        <Text style={styles.title}>Alias</Text>
        <Input 
            secureTextEntry={false}
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText= {newValue => setAlias(newValue)}
            />

        <Text style={styles.title}>Courriel</Text>
        <Input 
            secureTextEntry={false}
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText= {newValue => setEmail(newValue)}
            />        
        <Text style={styles.title}>Mot de passe</Text>
        <Input 
            secureTextEntry={true}
            keyboardType={"visible-password"}
            placeholder={"mot de passe"}
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText= {newValue => setPassword(newValue)}
            />
        
        <View style={styles.viewButton}>
          <Button
            buttonStyle={ styles.button }
            type='outline'
            title="S'enregistrer"
            onPress={ () => on.authSignUp(email, password, alias) }
          />

          <Button
            buttonStyle={ styles.button }
            type="outline"
            onPress={ () => navigation.navigate("Welcome") }
            title="Retour a Welcome"
          />
        </View>  
        <ErrorMessage message={AuthStore.errorMessage.toString()} />
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
    fontSize : 30
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

export default observer(SignupScreen);
