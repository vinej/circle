import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Text, Icon , Divider} from 'react-native-elements';

const OpinionDetail = (props) => {
  return ( 
    <View style={ { marginTop:10 }} >
      <View style={styles.row}>
        <Image style={styles.image} source= { require('../../assets/IMG_1417.png')}></Image>
        <Text style={styles.comment}>{props.opinion.comment}</Text>
      </View>
      <View style={styles.rowicons}>
          <View style={styles.row}>
            <Icon name='like2' type='antdesign' />
            <Text style={styles.like}>{props.opinion.like}</Text>
          </View>
          <Icon name='dislike2' type='antdesign' />
          <Icon name='md-person' type='ionicon' />
      </View>
      <Divider style={ { marginBottom:10 } }/>
    </View>
    )
 };

  const styles = StyleSheet.create({
   comment: {
     fontSize: 14
   },
   like: {
     textAlign: 'center',
     fontSize: 12
   }, 
   image: {
     width:50,
     height: 50
   },
   row: {
     flexDirection: 'row',
   },
   rowicons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom:10
  }
});

 
export default OpinionDetail; 