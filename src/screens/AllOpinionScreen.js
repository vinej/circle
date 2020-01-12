import React, { useEffect } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation'
import OpinionDetail from '../components/OpinionDetail'
import TopicStore from '../stores/topic_store';
import { TopicActions as on } from '../actions/topic_actions'
import { Text, Button, CheckBox, Input, Icon } from 'react-native-elements';
import { observer } from 'mobx-react'

const AllOpinionScreen = () => {
  // note: the key must be a string for the flat list
  const opinions = [
    { id: 1, memberId : 2, comment : "je suis pour mais il faudrait verifier le contexte, car il y a beaucoup de cas differents", like:0 },
    { id: 2, memberId : 3, comment : "jamais", id: 2, like: 3},
    { id: 3, memberId : 4, comment : "parfois", id: 3, like: 2}
  ];

  useEffect(() => {
    on.topicGetCurrent();
  }, []);
  
  // horizontal : horizontal list.
  // ShowsHorizontalScrollIndicator={false}
  return (
    <SafeAreaView forceInset={ { top: 'always'} }>
    <View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.filter}>
            <Text style={styles.text}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.filter}>
            <Text style={styles.text}>Best</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.filter}>
            <Text style={styles.text}>Friends</Text>
        </TouchableOpacity>
      </View>
      <Input  label="Description"
        defaultValue= { TopicStore.Description }
        autoCapitalize="none" 
        autoCorrect={false}
        multiline={true}
        editable={false}
        returnKeyType='next'
        maxLength= {100 }
        inputStyle= { { height:92, backgroundColor: 'beige' } } 
        onChangeText= {newValue => TopicStore.Description = newValue}
        placeHolder={"Topic Description"}

      /> 
      
      <FlatList
        data = { opinions }
        keyExtractor = { (opinion) => opinion.id.toString()}
        renderItem = { ( { item } )  => {
          return (
            <OpinionDetail opinion = {item}/>
          )
        }}
        />
      </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent: 'space-around'
  },
  text: {
    fontSize:24,
    margin: 3,
    width: 100
  },
  filter: {
    top:15,
    margin: 3,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom:20
  }
});

export default observer(AllOpinionScreen);