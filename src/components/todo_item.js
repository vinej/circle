import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { Text, Icon , Divider} from 'react-native-elements';;
//import { Constants } from 'expo';
//import { SearchBar } from 'react-native-elements';
//import { Card } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';
import { TodoAction as on } from '../actions/todo_actions'

const TodoItem = ( { todo }) => {

  var rowId = -1;

  swipeBtns = [{
    text: 'Delete',
    type: 'delete',
    backgroundColor: 'red',
    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    onPress: () => { 
        console.log("Deleting Row with Id ", this.rowId);
        on.delete(this.rowId);
    }
  }];

  return ( 
    <Swipeout
        right={this.swipeBtns}
        //close={(this.state.activeRow !== index)}
        rowID={todo.Id}
        sectionId= {1}
        autoClose = {true}
        onOpen = {(secId, rowId, direction) => this.rowId = rowId }
      >
        <TouchableOpacity
            //style={styles.item}
            activeOpacity={0.4}
            //onPress={this.viewNote(item)}
        >
            <Text>{todo.Id}</Text>
            <Text>{todo.Content}</Text>
            <Text>{todo.IsDone ==1 ? true : false}</Text>
        </TouchableOpacity>
        <Divider/>
    </Swipeout>
  )
};

const styles = StyleSheet.create({
   row: {
     flexDirection: 'row'
   },
});
 
export default TodoItem; 