import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import DatabaseStore from '../stores/database_store';
import Database from '../dal/database'
import { observer } from 'mobx-react'
import { Button } from 'react-native-elements';
import { newTodo} from '../models/todo_model'

const AboutScreen = () => {
  return (
    <View>
      <Text style={styles.text}>About Screen</Text>
      <Text>Database status : {DatabaseStore.isOpen.toString()}</Text>
      <Text>Database version : {DatabaseStore.version}</Text>
      <Button title="Update Database" type="outline"
          onPress={ () => {
            Database._drop(['todo']);
            Database._table([ { name:'todo', modele: newTodo()}]);
          }}
      />  
    </View>  
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default observer(AboutScreen);


