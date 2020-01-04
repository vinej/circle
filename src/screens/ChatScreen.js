import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {SafeAreaView} from 'react-navigation'

const ChatScreen = () => {
  return (
    <SafeAreaView forceInset={ { top: 'always'} }>
      <Text style={styles.text}>Chat Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ChatScreen;