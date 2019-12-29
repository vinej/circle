import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ChatScreen = () => {
  return (
    <Text style={styles.text}>Chat Screen</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ChatScreen;