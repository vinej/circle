import React, {useEffect, useState} from 'react';
import { observer } from 'mobx-react'
import { StyleSheet, FlatList, View, Modal} from 'react-native';
import { Text, Button } from 'react-native-elements'
import { TodoAction as on } from '../actions/todo_actions'
import TodoStore from '../stores/todo_store' 
import TodoItem  from '../components/todo/todo_item'
import TodoEdit from '../components/todo/todo_edit'

function getNewTodo() {
  return {
    Id: -1,
    IsDone: 0,
    Content: '',
    CreatedDate: Date.now().toString(),
  }
}

const TodoScreen = (props) => {
  // the .slice is needed to refresh the list
  const [isEdit, setIsEdit] = useState(false);
  firstIndex = 0;
  lastIndex = 10;
  newContent = '';

  // call get all once
  useEffect(() => {
    on.getAll();
  }, [])

  return (
      <View>
        <View style= { { flexDirection: 'row'}}>
          <Text style={ styles.title} >Gestion des todos</Text>
          <Text style={ styles.index}> ( T:{ TodoStore.getCount() },</Text>
          <Text style={ styles.index}>{ TodoStore.start() + 1 } de </Text>
          <Text style={ styles.index}>{ TodoStore.end() } )</Text>
        </View>

        <View style= { { flexDirection: 'row', justifyContent:'space-between'}}>        
          { isEdit  &&  <TodoEdit todo={getNewTodo()} setPropIsEdit={ (data) => setIsEdit(data)} isNew={true} /> }
          <Button title="Ajouter un nouveau todo" type="outline"
              onPress={ () => setIsEdit(true) }
          />   
        </View>

        <FlatList
          data = { TodoStore.todos.slice() }
          contentContainerStyle={{ paddingBottom: 60}}
          contentInset={{top: 0, bottom: 20, left: 0, right: 0}}
          contentInsetAdjustmentBehavior='automatic'
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          removeClippedSubviews={true}
          windowSize={10}
          keyExtractor = { (todo) => todo.Id.toString()}
          renderItem = { ( { item } )  => (
            <TodoItem todo={item}/>
          )} 
        />
      </View>
    )
};


const styles = StyleSheet.create({
  main: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize:30,
  },
  index: {
    fontSize:20,
  }
});

export default observer(TodoScreen);
