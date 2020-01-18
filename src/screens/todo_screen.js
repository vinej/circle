import React, {useEffect} from 'react';
import { observer, Observer } from 'mobx-react'
import { Text, StyleSheet, FlatList, View, Button, TouchableOpacity} from 'react-native';
import { TodoAction as on } from '../actions/todo_actions'
import TodoStore from '../stores/todo_store'
import { EvilIcons } from '@expo/vector-icons';

const TodoScreen = (props) => {
  const todos = TodoStore.todos.slice();

  // call get all once
  useEffect(() => {
    on.getAll();
  }, [])

  return (
      <View>
        <Button title="add"
            onPress={ () => on.add({ Id:4,  Content: 'test348fffff', IsDone: 1})}
        />   
        <Button title="delete"
            onPress={ () => on.delete(1)}
        />   
        <Button title="update"
            onPress={ () => on.update(1)}
        />   

        <FlatList
        data = { todos }
        keyExtractor = { (todo) => todo.Id.toString()}
        renderItem = { ( { item } )  => (
           <Observer>{ () => (
              <View style={styles.filter}>
                <Text>{item.Id}</Text>
                <Text>{item.Content}</Text>
                <Text>{item.IsDone.toString()}</Text>
              </View>
          )}</Observer>
        )}
        />
        <Text>{ TodoStore.errorMessage }</Text>
      </View>
    )
};

TodoScreen.navigationOptions = () => {
  return {
    headerRight: (
      <TouchableOpacity >
        <EvilIcons name='pencil' size={30} />
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent: 'space-around'
  },
  text: {
    fontSize:24,
    margin: 3,
    width: 100
  },
  filter: {
    top:15,
    margin: 3,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default observer(TodoScreen);
