import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Text, Icon } from 'react-native-elements';

const ErrorMessage = (props) => {
  return ( 
    <View style={ styles.view } >
        <Icon iconStyle={styles.icon} name='error' type='material' />
        <Text style={ styles.text}>{props.message}</Text>
    </View>
    )
 };

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'red',
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        margin:5,
    },
    text: {
        fontSize:20,
        color: 'white',
        margin:5
    },
    icon: {
        marginTop:5
    }
});

 
export default ErrorMessage; 