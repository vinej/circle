import React, {useEffect} from 'react';
import { observer } from 'mobx-react'
import { StyleSheet, FlatList, View} from 'react-native';
import { Icon, Text, Button } from 'react-native-elements'
import { TodoAction as on } from '../actions/todo_actions'
import TodoStore from '../stores/todo_store' 
import TodoItem  from '../components/todo_item'

const TodoScreen = (props) => {
  // the .slice is needed to refresh the list
  const todos = TodoStore.todos.slice();

  // call get all once
  useEffect(() => {
    on.getAll();
  }, [])

  return (
      <View>
        <Text style={ styles.title} >Getion des todos</Text>
        <Button title="Ajouter un nouveau todo" type="outline"
            onPress={ () => on.add({ Id: -1,  Content: 'Je suis content de finor mes devoirs avant minuit, car je dois les remettre demain matin avant la preimere heures', IsDone: 0})}
        />   

        <FlatList
          data = { todos }
          keyExtractor = { (todo) => todo.Id.toString()}
          renderItem = { ( { item } )  => (
            <TodoItem todo={item}/>
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
  title: {
    fontSize:30,
  }
});

export default observer(TodoScreen);
