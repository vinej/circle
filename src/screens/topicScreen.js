import React, { useEffect } from 'react';
import { observer } from 'mobx-react'
import {  StyleSheet, ScrollView} from 'react-native';
import { Text, Button, CheckBox, Input } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import TopicStore from '../stores/topic_store';
import { TopicActions as on } from '../actions/topic_actions'
import I18n from 'ex-react-native-i18n'


const TopicScreen = () => {
  //var topic = TopicStore.get();
  // call get the current topic
  useEffect(() => {
    on.topicGetCurrent();
  }, []);

  var saveButton;
  if (TopicStore.Id == -1) {
    saveButton = <Button 
      title="Add" 
      type="outline"
      onPress={ () => on.topicAdd(TopicStore.get()) }
    />
  } else {
    saveButton = <Button 
      title="Update" 
      type="outline"
      onPress={ () => on.topicUpdate(TopicStore.get()) }
    />
  } 

  return (
    <ScrollView>
      <Text style={styles.text}>Topic Screen</Text>

      <Input  label="Description"
        defaultValue= { TopicStore.Description }
        autoCapitalize="none" 
        autoCorrect={false}
        onChangeText= {newValue => TopicStore.Description = newValue}
        placeHolder={"Topic Description"}
      />

      <CheckBox
        title="Activated"
        checked={ TopicStore.IsActivated }
        onPress={ () => TopicStore.IsActivated = !TopicStore.IsActivated }
      />

      <DateTimePicker 
        title="Start"
        display="calendar"
        locale={ I18n.locale}
        value={ TopicStore.StartDate}
        onChange={ (event, date) => TopicStore.StartDate = new Date(date) }
        mode="date"
      />

      <DateTimePicker 
        locale={ I18n.locale}
        value={ TopicStore.EndDate}
        onChange={ (event, date) => TopicStore.EndDate = new Date(date) }
        mode="date"
      />

      { saveButton }

      <Button title="Show current" type="outline"
        onPress={ () => navigation.navigate("Topic")}
      /> 

      <Button title="select from list" type="outline"
        onPress={ () => navigation.navigate("Topic")}
      /> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default observer(TopicScreen);