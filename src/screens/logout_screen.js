import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Button} from 'react-native-elements';
import { AuthAction as on } from '../actions/auth_actions'

const LogoutScreen = () => {
  return (<>
            <Text style={styles.text}>Désole de vous voir partir</Text>
            <Button
              title='Quitter the circle' 
              type='outline'
              onPress={ () => on.signOut() }
            />
            </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default LogoutScreen;