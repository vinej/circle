import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import DatabaseStore from '../stores/database_store'
import { observer } from 'mobx-react'

const AboutScreen = () => {
  return (
    <View>
      <Text style={styles.text}>About Screen</Text>
      <Text>Database status : {DatabaseStore.isOpen.toString()}</Text>
      <Text>Database version : {DatabaseStore.version}</Text>
    </View>  
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default observer(AboutScreen);


