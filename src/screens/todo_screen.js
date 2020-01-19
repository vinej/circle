import React, {useEffect} from 'react';
import { observer, Observer } from 'mobx-react'
import { StyleSheet, FlatList, View, Modal} from 'react-native';
import { Icon, Text, Button } from 'react-native-elements'
import { TodoAction as on } from '../actions/todo_actions'
import TodoStore from '../stores/todo_store' 
import TodoItem  from '../components/todo/todo_item'


const TodoScreen = (props) => {
  // the .slice is needed to refresh the list
  firstIndex = 0;
  lastIndex = 10

  const todos = TodoStore.todos.slice();

  // call get all once
  useEffect(() => {
    on.getAll();
  }, [])

  return (
      <View>

        <View style= { { flexDirection: 'row'}}>
          <Text style={ styles.title} >Getion des todos</Text>
          <Text style={ styles.index}> ({ TodoStore.getCount() },</Text>
          <Text style={ styles.index}>{ TodoStore.start() + 1 },</Text>
          <Text style={ styles.index}>{ TodoStore.end() } )</Text>
        </View>

        <View style= { { flexDirection: 'row', justifyContent:'space-between'}}>
        <Icon
            name='navigate-before'
            type='materrialicons'
            size={37}
            color='black'
            onPress= { () => TodoStore.prev() }
        />

        <Button title="Ajouter un nouveau todo" type="outline"
            onPress={ () => on.add({ Id: -1,  Content: 'Je suis content de finor mes devoirs avant minuit, car je dois les remettre demain matin avant la preimere heures', IsDone: 0})}
        />   
        <Icon
            name='navigate-next'
            type='materrialicons'
            size={37}
            color='black'
            onPress= { () => TodoStore.next() }
        />
        </View>

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


const styles = StyleSheet.create({
  title: {
    fontSize:30,
  },
  index: {
    fontSize:20,
  }
});

export default observer(TodoScreen);
