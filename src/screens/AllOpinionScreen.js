import React from 'react';
import { Text, StyleSheet, FlatList} from 'react-native';
import OpinionDetail from '../components/OpinionDetail'

const AllOpinionScreen = () => {
  // note: the key must be a string for the flat list
  const opinions = [
    { id: 1, memberId : 2, comment : "je suis pour", like:0 },
    { id: 2, memberId : 3, comment : "jamais", id: 2, like: 3},
    { id: 3, memberId : 4, comment : "parfois", id: 3, like: 2}
  ];

  // horizontal : horizontal list.
  // ShowsHorizontalScrollIndicator={false}
  return (
    <FlatList
      data = { opinions }
      keyExtractor = { (opinion) => opinion.id.toString()}
      renderItem = { ( { item } )  => {
        return (
          <OpinionDetail opinion = {item}/>
        )
      }}
      />
    );
};

const styles = StyleSheet.create({
  view: {
    fontSize: 30
  }
});

export default AllOpinionScreen;