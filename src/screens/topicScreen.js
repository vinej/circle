import React from 'react';
import {  StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

const TopicScreen = () => {
  return (
    <Text style={styles.text}>Topic Screen</Text>

    <Button title="Add a new topic" type="outline"
        onPress={ () => navigation.navigate("Topic")}
    /> 
    <Button title="Add a new topic" type="outline"
      onPress={ () => navigation.navigate("Topic")}
    /> 
);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default TopicScreen;