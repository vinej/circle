import React from 'react';
import { Text, StyleSheet } from 'react-native';

const LogoutScreen = () => {
  return (
    <Text style={styles.text}>Logout Screen</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default LogoutScreen;