import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Text, Icon } from 'react-native-elements';
import AuthStore from '../stores/auth_store'
import DatabaseStore from '../stores/database_store'
import NotificationStore from '../stores/notification_store'
import { observer } from 'mobx-react'

const ErrorMessage = (props) => {
  return ( 
    <View>
    { AuthStore.errorMessage != '' && 
        <View style={ styles.view } >
            <Icon iconStyle={styles.icon} name='error' type='material' />
            <Text style={ styles.text}>{AuthStore.errorMessage}</Text>
        </View>
    }

    { !DatabaseStore.isOpen  && 
        <View style={ styles.view } >
            <Icon iconStyle={styles.icon} name='error' type='material' />
            <Text style={ styles.text}>{DatabaseStore.errorMessage}</Text>
        </View>
    }

    { NotificationStore.errorMessage != ''  && 
        <View style={ styles.view } >
            <Icon iconStyle={styles.icon} name='error' type='material' />
            <Text style={ styles.text}>{NotificationStore.errorMessage}</Text>
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

 
export default observer(ErrorMessage); 