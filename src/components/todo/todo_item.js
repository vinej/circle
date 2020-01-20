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
import {SafeAreaView} from 'react-navigation'

function getTime(atime) {
  var dt = new Date();
  dt.setTime(parseInt(atime));
  return dt.toString();
}

const TodoItem = ( { todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  rowId = -1;
  oldContent = todo.Content;
  newContent = todo.Content;
  isSelected = false;
  console.log("enter in edit");
  self = this;

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
        backgroundColor= 'white'
        right={this.swipeBtns}
        rowID={todo.Id}
        sectionId= {1}
        sensitivity={100}
        autoClose = {true}      
        onOpen = {(secId, rowId, direction) => { 
          this.rowId = rowId;

        } }
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
              style={{paddingRight:40}}
              onPress= { () => {  todo.IsDone == 0 ? todo.IsDone=1: todo.IsDone=0; on.update(todo) }}
              iconStyle= { todo.IsDone == 0 ? {color :'gray'} : {color :'green'}}
            />
            { !isEdit && 
                 <TouchableOpacity onPress={ () => setIsEdit(true)}>
                  <Text style={{flex:8}}>
                    { todo.Content }
                  </Text> 
                  <Text style={{flex:8, fontSize:12}}>
                    { getTime(todo.CreatedDate)}
                  </Text> 
                </TouchableOpacity>
            }
            { isEdit  && 
              <Modal>
                <SafeAreaView forceInset={ { top: 'always'} }>
                <View style={styles.edit}>
                  <TodoEdit todo={todo} temp={ (data) => this.newContent = data}/> 
                  <View style={ styles.row}>
                    <Icon
                      name='done'
                      type='materialicon'
                      size= {40}
                      onPress= { () => {                      
                        setIsEdit(false);
                        todo.Content = this.newContent;
                        this.oldContent = todo.Content;
                        on.update(todo) ;
                      }}
                      iconStyle= { {color :'green'} }
                    />
                    <Icon
                      name='remove'
                      type='materialicon'
                      size= {40}
                      onPress= { () => {
                        todo.Content = this.oldContent;
                        setIsEdit(false);
                      }}
                      iconStyle= { {color :'green'} }
                    />
                  </View>
                </View>
                </SafeAreaView>
              </Modal>
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