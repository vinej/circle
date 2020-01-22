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

      <Input  label="Todo"
        defaultValue= { todo.Content }
        autoCapitalize="none" 
        autoCorrect={true}
        multiline={true}
        inputStyle= { { height:150, backgroundColor: 'beige' } } 
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
            size= {40}
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
            name='remove'
            type='materialicon'
            size= {40}
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
    text: {
     fontSize: 30
   },
});

 
export default observer(TodoEdit); 