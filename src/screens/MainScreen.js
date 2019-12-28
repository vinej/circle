import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const MainScreen = (props) => {
  return (
      <TouchableOpacity tittle = "opinion"
        onPress={ () => props.navigation.navigate('AllOpinion')}
      >
        <Text style={styles.text}>goto opinion</Text>
      </TouchableOpacity>
  );
  <Text style={styles.text}>Main Screen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 30
  }
});

export default MainScreen;