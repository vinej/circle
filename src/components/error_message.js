import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Text, Icon } from 'react-native-elements';
import AuthStore from '../stores/auth_store'
import DatabaseStore from '../stores/database_store'
import NotificationStore from '../stores/notification_store'

const ErrorMessage = (props) => {
  return ( 
    <View>
    { !AuthStore.isAuthenticated  && 
        <View style={ styles.view } >
            <Icon iconStyle={styles.icon} name='error' type='material' />
            <Text style={ styles.text}>Authentification Error : {AuthStore.errorMessage.toString()}</Text>
        </View>
    }

    { !DatabaseStore.isOpen  && 
        <View style={ styles.view } >
            <Icon iconStyle={styles.icon} name='error' type='material' />
            <Text style={ styles.text}>Database error : {DatabaseStore.errorMessage.toString()}</Text>
        </View>
    }

    { !NotificationStore.isConnected  && 
        <View style={ styles.view } >
            <Icon iconStyle={styles.icon} name='error' type='material' />
            <Text style={ styles.text}>Notification service error : {NotificationStore.errorMessage.toString()}</Text>
        </View>
    }
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