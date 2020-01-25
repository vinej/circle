import React from 'react';
import { StyleSheet, View,Text} from 'react-native';
import { Button} from 'react-native-elements';

const SettingScreen = ({navigation}) => {
  return (
    <View>
        <Text style={styles.text}>Settings</Text>
        <Button title="About" type="outline"
          onPress={ () => navigation.navigate("About")}
        />   
        <Button title="Logout" type="outline"
          onPress={ () => navigation.navigate("Logout")}
        /> 
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SettingScreen;