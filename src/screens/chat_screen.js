import React, { useState }from 'react';
import { observer, Observer } from 'mobx-react'
import { FlatList, StyleSheet, View, Keyboard} from 'react-native';
import { Text, Input, Icon, Divider} from 'react-native-elements'
import {SafeAreaView} from 'react-navigation'
import NotificationStore from '../stores/notification_store';
import { NotificationAction as on } from '../actions/notification_actions'

const ChatScreen = () => {

  const messages = NotificationStore.messages.slice();
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView forceInset={ { top: 'always'} }>
      <Text style={styles.text}>Chat Screen</Text>
      <Text style={styles.text}>Messages</Text>
      <FlatList
        style={styles.list}
        data = { messages }
        keyExtractor = { (msg) => msg.Id}
        renderItem = { ( { item } )  => (
           <Observer>{ () => (
              <View style={styles.filter}>
                <Text>{item.From} : {item.Message}</Text>
              </View>
          )}</Observer>
        )}
        />
        <Divider/>
        <Input 
            value={ message }
            secureTextEntry={false}
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={true}
            multiline={true}
            onChangeText= {newValue => setMessage(newValue)}
            placeHolder="write something"
            rightIcon={
              <Icon
                name='navigate-next'
                type='materrialicons'
                size={24}
                color='black'
                onPress= { () => { 
                  on.saySend(message);
                  setMessage('');
                  Keyboard.dismiss();
                 }
                }
              />
            }
          />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  list: {
    height:260
  },
  input: {
    height:50
  }
});

export default observer(ChatScreen);
