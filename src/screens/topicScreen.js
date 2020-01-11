import React, { useEffect } from 'react';
import { observer } from 'mobx-react'
import {  StyleSheet, View} from 'react-native';
import { Text, Button, CheckBox, Input } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import TopicStore from '../stores/topic_store';
import { TopicActions as on } from '../actions/topic_actions'

const TopicScreen = () => {

  // call get the current topic
  useEffect(() => {
    on.topicGetCurrent();
  }, []);

  var saveButton;
  if (TopicStore.id == -1) {
    saveButton = <Button 
      title="Add" 
      type="outline"
      onPress={ () => on.add() }
    />
  } else {
    saveButton = <Button 
      title="Update" 
      type="outline"
      onPress={ () => on.add() }
    />
  } 

  return (
    <View>
      <Text style={styles.text}>Topic Screen</Text>

      <Input  label="Description"
        defaultValue= { TopicStore.description }
        style={styles.input} 
        autoCapitalize="none" 
        autoCorrect={false}
        onChangeText= {newValue => TopicStore.description = newValue}
        placeHolder={"Topic comment"}
      />

      <CheckBox
        title="Activated"
        checked={ TopicStore.isActivated }
        onPress={ () => TopicStore.isActivated = !TopicStore.isActivated }
      />

      { saveButton }

      <Button title="Show current" type="outline"
        onPress={ () => navigation.navigate("Topic")}
      /> 

      <Button title="select from list" type="outline"
        onPress={ () => navigation.navigate("Topic")}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default observer(TopicScreen);