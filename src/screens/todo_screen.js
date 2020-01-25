import React, {useEffect, useState} from 'react';
import { observer } from 'mobx-react'
import { StyleSheet, FlatList, View} from 'react-native';
import { Text, Divider , Icon} from 'react-native-elements'
import { TodoAction as on } from '../actions/todo_actions'
import TodoStore from '../stores/todo_store' 
import TodoItem  from '../components/todo/todo_item'
import TodoEdit from '../components/todo/todo_edit'
import { newTodo} from '../models/todo_model'
import {SafeAreaView} from 'react-navigation'

const TodoScreen = (props) => {
  // the .slice is needed to refresh the list
  const [isEdit, setIsEdit] = useState(false);
  firstIndex = 0;
  lastIndex = 10;
  newContent = '';

  // call get all once
  useEffect(() => {
    props.navigation.setParams({ 'setIsEdit' : setIsEdit });
    on.getAll();
  }, [])

  return (
    <SafeAreaView forceInset={ { top: 'always'} }>
        <View style= { { flexDirection: 'row', justifyContent: 'space-between'}}>
        <Icon
          name='new-message'
          type='entypo'
          size= {30}
          iconStyle= { { color : 'black'} }
          onPress= { () => setIsEdit(true) } 
        />
          <Text style={ styles.title} >Task List</Text>
          <Text style={ styles.index}>({ TodoStore.getCount() })</Text>
          <Icon
            name='undo'
            type='materialicon'
            size= {30}
            iconStyle= { { color : 'orange'} }
            onPress= { () => on.undo(TodoStore.lastTodo) }
          />
        </View>

        <View style= { { flexDirection: 'row', justifyContent:'space-between'}}>        
          { isEdit  &&  <TodoEdit todo={newTodo()} setPropIsEdit={ (data) => setIsEdit(data)} isNew={true} /> } 
        </View>
        <Divider style={ { marginTop:3, marginBottom:3}} />
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
    </SafeAreaView>
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
    fontSize:30,
  }
});

export default observer(TodoScreen);
