import React, { useState } from 'react';
import { observer, Observer } from 'mobx-react'
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { Text, Icon , Divider, Button, Input} from 'react-native-elements';;
//import { Constants } from 'expo';
//import { SearchBar } from 'react-native-elements';
//import { Card } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';
import { TodoAction as on } from '../../actions/todo_actions'
import TodoEdit from './todo_edit'

const TodoItem = ( { todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  rowId = -1;
  oldContent = todo.Content;
  newContent = todo.Content;
  console.log("enter in edit");

  swipeBtns = [
    {
        text: 'Delete',
        type: 'delete',
        backgroundColor: 'red',
        onPress: () => { 
            console.log("Deleting Row with Id ", this.rowId);
            on.delete(this.rowId);
        }
    },
    {
        text: 'Edit',
        type: 'secondary',
        backgroundColor: 'orange',
        onPress: () => { 
            setIsEdit(true);
        }
    }
  ];

  return ( 
    <Swipeout
        backgroundColor='beige'
        right={this.swipeBtns}
        //close={(this.state.activeRow !== index)}
        rowID={todo.Id}
        sectionId= {1}
        autoClose = {true}
        onOpen = {(secId, rowId, direction) => this.rowId = rowId }
      >
        <View
            style={styles.row}
            activeOpacity={0.4}
            //onPress={this.viewNote(item)}
        >
            <Icon
              name={ todo.IsDone == 1 ? 'done' : 'remove' }
              type='materialicon'
              size= {30}
              onPress= { () => {  todo.IsDone == 0? todo.IsDone=1: todo.IsDone=0; on.update(todo)  }}
              iconStyle= { {color :'green'}}
            />
            { !isEdit && <Text style={styles.text}>{todo.Content} </Text> }
            { isEdit  && 
              <View style={styles.edit}>
                <TodoEdit todo={todo} temp={ (data) => this.newContent = data}/> 
                <Divider style={ { marginBottom:10 } }/>
                <Button 
                  title="Save" 
                  type="outline"
                  onPress={ () => {
                    setIsEdit(false);
                    todo.Content = this.newContent;
                    this.oldContent = todo.Content;
                    on.update(todo) ;
                  } }
                /> 
                <Button 
                  title="Cancel" 
                  type="outline"
                  onPress={ () => {
                    todo.Content = this.oldContent;
                    setIsEdit(false);
                  } }
                /> 
              </View>
            }
        </View>
        <Divider/>
    </Swipeout>
  )
};

const styles = StyleSheet.create({
   row: {
     flexDirection: 'row',
     minHeight: 40,
     flex:10,
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