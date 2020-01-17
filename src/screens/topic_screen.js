import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react'
import {  StyleSheet, Keyboard, View} from 'react-native';
import { Text, Button, CheckBox, Input, Icon } from 'react-native-elements';
import DateTimePicker from "react-native-modal-datetime-picker";
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

  const [isStartDateVisible, setStartDateVisible] = useState(false);
  const [isEndDateVisible, setEndDateVisible] = useState(false);
  var previousStartDate = TopicStore.StartDate;
  var previousEndDate = TopicStore.EndDate;

  return (
    <View>
      <Text style={styles.text}>Topic Screen</Text>

      <Input  label="Description"
        defaultValue= { TopicStore.Description }
        autoCapitalize="none" 
        autoCorrect={false}
        multiline={true}
        returnKeyType='next'
        maxLength= {100 }
        inputStyle= { { height:92, backgroundColor: 'beige' } } 
        onChangeText= {newValue => TopicStore.Description = newValue}
        placeHolder={"Topic Description"}
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

      <View style={ styles.daterow } >
        <Text style={styles.date}>Start Date: </Text>
        <Text style={styles.date}>{ TopicStore.StartDate.toDateString() }</Text>
        <Icon 
          name='calendar'
          type='antdesign'
          onPress= { () => {
            previousStartDate = TopicStore.StartDate;
            setStartDateVisible(!isStartDateVisible)
          } }
        />

        <DateTimePicker 
          isVisible={ isStartDateVisible}
          title="Start"
          display="calendar"
          locale={ I18n.locale}
          value={ TopicStore.StartDate}
          onConfirm={ (date) => { 
            TopicStore.StartDate = new Date(date);
            setStartDateVisible(!isStartDateVisible)
          }}
          onCancel={ () => {
            TopicStore.StartDate = previousStartDate;
            setStartDateVisible(!isStartDateVisible)
          }}
          mode="date"
        />
      </View>

      <View style={ styles.daterow } >
        <Text style={styles.date}>End Date: </Text>
        <Text style={styles.date}>{ TopicStore.EndDate.toDateString() }</Text>
        <Icon 
          name='calendar'
          type='antdesign'
          onPress= { () => {
            previousEndDate = TopicStore.EndDate; 
            setEndDateVisible(!isEndDateVisible) }        
          }
        />
      </View>

      <DateTimePicker 
        isVisible={ isEndDateVisible }
        title="Start"
        display="calendar"
        locale={ I18n.locale}
        value={ TopicStore.EndDate}
        onConfirm={ (date) => 
          {
            TopicStore.EndDate = new Date(date);
            setEndDateVisible(!isEndDateVisible)
        } }
        onCancel={ () => {
          TopicStore.EndDate = previousEndDate;
          setEndDateVisible(!isEndDateVisible)
        }}
        mode="date"
      />

      <CheckBox
        title="Activated"
        checked={ TopicStore.IsActivated }
        onPress={ () => TopicStore.IsActivated = !TopicStore.IsActivated }
      />

      { saveButton }

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  date: {
    fontSize: 20,
  },
  daterow: {
    flexDirection : 'row',
    justifyContent: 'space-around',
    paddingTop:20
  }
});

export default observer(TopicScreen);