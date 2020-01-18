import React, {useEffect} from 'react';
import { observer, Observer } from 'mobx-react'
import { StyleSheet, FlatList, View} from 'react-native';
import { Icon, Text, Button } from 'react-native-elements'
import { TodoAction as on } from '../actions/todo_actions'
import TodoStore from '../stores/todo_store' 
import TodoItem  from '../components/todo_item'

const TodoScreen = (props) => {
  const todos = TodoStore.todos.slice();

  // call get all once
  useEffect(() => {
    on.getAll();
  }, [])

  return (
      <View>
        <Button title="add" type="outline"
            onPress={ () => on.add({ Id:4,  Content: 'test348fffff', IsDone: 1})}
        />   
        <Button title="delete" type="outline"
            onPress={ () => on.delete(1)}
        />   
        <Button title="update" type="outline"
            onPress={ () => on.update(1)}
        />   

        <FlatList
          data = { todos }
          keyExtractor = { (todo) => todo.Id.toString()}
          renderItem = { ( { item } )  => (
            <TodoItem todo = {item}/>
          )}
        />
        <Text>{ TodoStore.errorMessage }</Text>
      </View>
    )
};

TodoScreen.navigationOptions = () => {
  return {
    headerRight: (
    <>
      <Icon
          name='pencil'
          type='evilicon'
      />
      <Icon
          name='plus'
          type='evilicon'
      />
    </>
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
