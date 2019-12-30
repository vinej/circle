import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import authAction from '../actions/auth_actions'

const LogoutScreen = () => {
  return (<>
            <Text style={styles.text}>Desole de vous voir partir</Text>
            <TouchableOpacity
                onPress={ () => authAction.authSignOut() }
              >
              <Text>Quitter circle</Text>
            </TouchableOpacity>
            </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default LogoutScreen;