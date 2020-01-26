import React, { useState } from 'react';
import { observer, Observer } from 'mobx-react'
import { StyleSheet, View, Modal, TouchableOpacity} from 'react-native';
import { Text, Icon , Divider, Button, Input} from 'react-native-elements';;
//import { Constants } from 'expo';
//import { SearchBar } from 'react-native-elements';
//import { Card } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';
import { TodoAction as on } from '../../actions/todo_actions'
import TodoEdit from './todo_edit'
import { getTime } from  '../../helpers/utilitiy'

const TodoItem = ( { todo, setPropIsEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  isSelected = false;
  console.log("==> Enter in TodoItem");

  return ( 
   <>
      <View
          style={styles.row}
          activeOpacity={0.4}
      >
          <Icon
            name={ todo.IsDone == 1 ? 'done' : 'remove' }
            type='materialicon'
            size= {30}
            onPress= { () => {  todo.IsDone == 0 ? todo.IsDone=1: todo.IsDone=0; on.update(todo) }}
            iconStyle= { todo.IsDone == 0 ? {color :'gray', flex:1} : {color :'green', flex:1}}
          />
          { !isEdit && 
                <TouchableOpacity style={{flex:8}} onPress={ () => setIsEdit(true)}>
                  <Text style={{fontSize:16}}>
                    { todo.Content }
                  </Text>
                  <Text style={{fontSize:10}}>
                    { getTime(todo.CreatedDate) }
                  </Text>
              </TouchableOpacity>
          }
          <Icon
            name='clear'
            type='materialicon'
            size= {30}
            onPress= { () => {   on.delete(todo.Id)  }}
            iconStyle= { {color :'red', flex:1} }
          />
          { isEdit  &&  <TodoEdit todo={todo} setPropIsEdit={ (data) => setIsEdit(data)} isNew={false} /> }
      </View>
      <Divider/>
    </>
    ///  <Divider/>
    //</Swipeout>
  )
};

const styles = StyleSheet.create({
   row: {
     flexDirection: 'row',
     minHeight: 40,
   },
   edit: {
    minHeight: 40,
    flex:10,
  },
  text: {
       flex:8
   },
   done: {
       flex:2
   }
});
 
export default observer(TodoItem); 
