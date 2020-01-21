import React, {useEffect, useState} from 'react';
import { observer, Observer } from 'mobx-react'
import { StyleSheet, FlatList, View, Modal} from 'react-native';
import { Icon, Text, Button } from 'react-native-elements'
import { TodoAction as on } from '../actions/todo_actions'
import TodoStore from '../stores/todo_store' 
import TodoItem  from '../components/todo/todo_item'
import { SafeAreaView } from 'react-navigation';
import TodoEdit from '../components/todo/todo_edit'

const TodoScreen = (props) => {
  // the .slice is needed to refresh the list
  const [isEdit, setIsEdit] = useState(false);
  firstIndex = 0;
  lastIndex = 10;
  newContent = '';

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
        { isEdit &&
        <Modal>
            <SafeAreaView forceInset={ { top: 'always'} }>
            <View style={styles.edit}>
              <TodoEdit todo={ { Id:-1, Content:'', IsDone:0, CreatdDate: Date.now().toString()} } temp={ (data) => newContent = data}/> 
              <View style={ styles.row}>
                <Icon
                  name='done'
                  type='materialicon'
                  size= {40}
                  onPress= { () => {
                    on.add( { Content: this.newContent, IsDone:0, CreatedDate: Date.now().toString()});
                    setIsEdit(false);
                  }}
                  iconStyle= { {color :'green'} }
                />
                <Icon
                  name='remove'
                  type='materialicon'
                  size= {40}
                  onPress= { () => {
                    setIsEdit(false);
                  }}
                  iconStyle= { {color :'green'} }
                />
              </View>
            </View>
            </SafeAreaView>
        </Modal>
        }
        <Button title="Ajouter un nouveau todo" type="outline"
            onPress={ () => setIsEdit(true) }
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
          data = { TodoStore.todos }
          contentContainerStyle={{ paddingBottom: 60}}
          contentInset={{top: 0, bottom: 20, left: 0, right: 0}}
          contentInsetAdjustmentBehavior='automatic'
          maxToRenderPerBatch={2}
          initialNumToRender={10}
          removeClippedSubviews={true}
          windowSize={10}
          keyExtractor = { (todo) => todo.CreatedDate}
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
