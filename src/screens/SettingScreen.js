import React from 'react';
import { StyleSheet, View, Button} from 'react-native';
//import { Ionicons } from '@expo/vector-icons';

const SettingScreen = ({navigation}) => {
  return (
    <View>
        <Button title="Logout"
          onPress={ () => navigation.navigate("Logout")}
        />   
        <Button title="Paypal"
          onPress={ () => navigation.navigate("Paypal")}
        />   
        <Button title="Rule"
          onPress={ () => navigation.navigate("Rule")}
        />   
        <Button title="Issue"
          onPress={ () => navigation.navigate("Issue")}
        />   
        <Button title="About"
          onPress={ () => navigation.navigate("About")}
        />   
        <Button title="Annonceur"
          onPress={ () => navigation.navigate("Advertiser")}
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