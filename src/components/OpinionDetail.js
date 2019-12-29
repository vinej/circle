import React from 'react';
 import { Text, StyleSheet, View, Button, Image} from 'react-native';

  const OpinionDetail = (props) => {
   return (
     <View>
         <Text style={styles.comment}>{props.opinion.comment}</Text>
         <Text style={styles.like}>{props.opinion.like}</Text>
         <Image style={styles.image} source= { require('../../assets/IMG_1417.png')}></Image>
         <Button title="like"></Button>
         <Button title="Unlike"></Button>
         <Button title="Friend"></Button>
       </View>
     )
 };

  const styles = StyleSheet.create({
   comment: {
     fontSize: 30,
     textAlign: 'center',
     margin: 20
   },
   like: {
     textAlign: 'center',
     fontSize: 12
   }, 
   image: {
     marginLeft: 50,
     width:50,
     height: 50
   }
 });

 
  export default OpinionDetail; 