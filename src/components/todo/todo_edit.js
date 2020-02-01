import React, {useState} from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, Keyboard, Modal} from 'react-native';
import { Icon, Input, Text} from 'react-native-elements';
import { TodoAction as on} from '../../actions/todo_actions'
import { SafeAreaView } from 'react-navigation';
import {getDateFromMillisecondString, getDate, getDateInMilliSecond} from '../../helpers/utilitiy'
import DateTimePicker from "react-native-modal-datetime-picker";
import I18n from 'ex-react-native-i18n'

const TodoEdit = ( { todo, setPropIsEdit, isNew } ) => {
  oldContent = todo.Content;
  newContent = todo.Content;
  const [isTodoDateVisible, setTodoDateVisible] = useState(false);
  var previousTodoDate = todo.TodoDate;
  if (newContent == null) { newContent = ''}

  return ( 
    <Modal>
      <SafeAreaView forceInset={ { top: 'always'} }>
      <View style={styles.edit}>

      <Input  label="Task"
        defaultValue= { todo.Content }
        autoCapitalize="none" 
        autoCorrect={true}
        multiline={true}
        inputStyle= { { height:200, backgroundColor: 'beige' } } 
        onChangeText= {newValue => newContent = newValue}
        placeHolder={"Enter your todo"}
        rightIcon={
            <Icon
            name='navigate-next'
            type='materrialicons'
            size={24}
            color='black'
            onPress= { () => Keyboard.dismiss() }
            />
        }
        />

        <View style={ styles.row } >
        <Text style={styles.date}>Task Date: </Text>
        <Text style={styles.date}>{ getDate(todo.TodoDate)}</Text>
        <Icon 
          name='calendar'
          type='antdesign'
          onPress= { () => {
            previousTodoDate = todo.TodoDate;
            setTodoDateVisible(!isTodoDateVisible)
          } }
        />

        <DateTimePicker 
          isVisible={ isTodoDateVisible}
          title="Date"
          display="calendar"
          locale={ I18n.locale}
          value={ getDateFromMillisecondString(todo.TodoDate) }
          onConfirm={ (date) => { 
            todo.TodoDate = getDateInMilliSecond(date);
            setTodoDateVisible(!isTodoDateVisible)
          }}
          onCancel={ () => {
            todo.TodoDate = previousTodoDate;
            setTodoDateVisible(!isTodoDateVisible)
          }}
          mode="date"
        />
      </View>

        <View style={ styles.row}>
          <Icon
            name='done'
            type='materialicon'
            size= {50}
            onPress= { () => { 
              todo.Content = newContent;
              if (isNew) {
                on.add(todo);
              } else {
                on.update(todo);
              }
              setPropIsEdit(false);
            }}
            iconStyle= { {color :'green'} }
          />
          { isNew!=true && <Icon
            name='delete'
            type='materialicon'
            size= {50}
            onPress= { () => {   on.delete(todo.Id)  }}
            iconStyle= { {color :'red'} }
          />
          }
          <Icon
            name='cancel'
            type='materialicon'
            size= {50}
            onPress= { () => {
              todo.Content = oldContent;
              setPropIsEdit(false);
            }}
            iconStyle= { {color :'green'} }
          />
        </View>
      </View>
      </SafeAreaView>
    </Modal>
    )
 };

  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      minHeight: 40,
      justifyContent: 'space-around'
      
    },
    text: {
     fontSize: 30
   },
});

 
export default observer(TodoEdit); 