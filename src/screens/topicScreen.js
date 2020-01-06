import React from 'react';
import {  StyleSheet } from 'react-native';
import { Text, Button, Checkbox } from 'react-native-elements';
import topicStore from '../actions/topic_store';

const TopicScreen = () => {

  // call get the current topic
  useEffect(() => {
    on.getCurrent();
  }, []);

  var saveButton;
  if (topicStore.id == -1) {
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

      <Input  label="Comment"
        style={styles.input} 
        autoCapitalize="none" 
        autoCorrect={false}
        onChangeText= {newValue => topicStore.comment = newValue}
        placeHolder={"Topic comment"}
      />

      <Checkbox
        title="Activated"
        checked={ value => topicStore.isActivated = value}
      />

      <DateTimePicker value={topicStore.dateStart}
          mode='datetime'
          display="Start Date"
          onChange={ date => topicStore.dateEnd = date} 
      />

      <DateTimePicker value={ topicStore.dateEnd}
          mode='datetime'
          display="End Date"
          onChange={ date => topicStore.dateEnd = date} 
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

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default TopicScreen;