import React from 'react';
import { observer, Observer } from 'mobx-react'
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { Text, Icon , Divider} from 'react-native-elements';;
//import { Constants } from 'expo';
//import { SearchBar } from 'react-native-elements';
//import { Card } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';
import { TodoAction as on } from '../actions/todo_actions'

const TodoItem = ( { todo }) => {

  var rowId = -1;

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
        text: 'Done',
        type: 'secondary',
        backgroundColor: 'orange',
        onPress: () => { 
            console.log("Done", this.rowId);
            todo.IsDone = 1;
            on.update(todo);
        }
    },
    {
        text: 'UnDone',
        type: 'secondary',
        backgroundColor: 'orange',
        onPress: () => { 
            console.log("Done", this.rowId);
            todo.IsDone = 0;
            on.update(todo);
        }
    },
    {
        text: 'Edit',
        type: 'secondary',
        backgroundColor: 'orange',
        onPress: () => { 
            console.log("Edit", this.rowId);
            //todo.IsDone = 1;
            on.update(todo);
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
            { todo.IsDone == 1 && 
                <Icon
                  name='done'
                  type='materialicon'
                  size= {30}
                  iconStyle= { {color :'green'}}
                />
            }
            
            { todo.IsDone == 0 && 
                <Icon
                  name='remove'
                  size= {30}
                  type='materialicon'
                  iconStyle= { {color:'gray'} }
                />
            }
            <Text style={styles.text}>{todo.Content} </Text>
        </View>
        <Divider/>
    </Swipeout>
  )
};

const styles = StyleSheet.create({
   row: {
     flexDirection: 'row',
     minHeight: 40
   },
   text: {
       flex:8
   },
   done: {
       flex:2
   }
});
 
export default observer(TodoItem); 