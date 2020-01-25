import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, Keyboard, Modal} from 'react-native';
import { Icon, Input} from 'react-native-elements';
import { TodoAction as on} from '../../actions/todo_actions'
import { SafeAreaView } from 'react-navigation';

const TodoEdit = ( { todo, setPropIsEdit, isNew } ) => {
  oldContent = todo.Content;
  newContent = todo.Content;
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