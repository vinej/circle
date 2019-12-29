import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <Text style={styles.text}>Profile Screen</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ProfileScreen;