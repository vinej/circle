import React from 'react';
import { inject, observer } from 'mobx-react'
import { Text, StyleSheet, FlatList, View, Button, TouchableOpacity} from 'react-native';
import todoAction from '../actions/todo_actions'
import todoStore from '../stores/todo_store'

const TodoScreen = (props) => {
  //console.log(props);

  //let todos = [ { id:1, desc: 'test', done: false}, 
  //{ id:2, desc: 'test 2', done: true} ]
  // horizontal : horizontal list.
  // ShowsHorizontalScrollIndicator={false}

  const todos = todoStore.todos;
  return (
    <View>
        <FlatList
        data = { todos }
        keyExtractor = { (todo) => todo.id.toString()}
        renderItem = { ( { item } )  => {
          return (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.desc}</Text>
              <Text>{item.done}</Text>
            </View>
          )
        }}
        />
        <Button title="add"
            onPress={ () => todoAction.todoAdd({ id:1, desc: 'test', done: false})}
          />    
      </View>
    );
};

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
