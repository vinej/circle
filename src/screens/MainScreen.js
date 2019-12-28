import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const MainScreen = (props) => {
  return (
     <View>
        <TouchableOpacity tittle = "opinion"
          onPress={ () => props.navigation.navigate('AllOpinion')}
        >
          <Text style={styles.text}>goto opinion</Text>
        </TouchableOpacity>
        <TouchableOpacity tittle = "login"
          onPress={ () => props.navigation.navigate('Login')}
        >
          <Text style={styles.text}>goto login</Text>
      </TouchableOpacity>
      <TouchableOpacity tittle = "signup"
          onPress={ () => props.navigation.navigate('Signup')}
        >
          <Text style={styles.text}>goto signup</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 30
  }
});

export default MainScreen;