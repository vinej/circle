import React from 'react';
import { StyleSheet, View, Keyboard} from 'react-native';
import { Icon, Input} from 'react-native-elements';

const TodoEdit = ( { todo, temp } ) => {
  return ( 
    <View>
        <Input  label="Todo"
        defaultValue= { todo.Content }
        autoCapitalize="none" 
        autoCorrect={true}
        multiline={true}
        inputStyle= { { height:92, backgroundColor: 'beige' } } 
        onChangeText= {newValue => temp(newValue) }
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
    </View>
    )
 };

  const styles = StyleSheet.create({
    text: {
     fontSize: 30
   },
});

 
export default TodoEdit; 