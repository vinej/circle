import React from 'react';
import {  StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

const TopicScreen = () => {
  return (
    <Text style={styles.text}>Topic Screen</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default TopicScreen;