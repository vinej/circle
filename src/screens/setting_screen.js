import React from 'react';
import { StyleSheet, View,} from 'react-native';
import { Button,} from 'react-native-elements';
//import { Ionicons } from '@expo/vector-icons';

const SettingScreen = ({navigation}) => {
  return (
    <View>
        <Button title="Welcome" type="outline"
          onPress={ () => navigation.navigate("Welcome")}
        />   
        <Button title="Logout" type="outline"
          onPress={ () => navigation.navigate("Logout")}
        />   
        <Button title="Topic" type="outline"
          onPress={ () => navigation.navigate("Topic")}
        />   
        <Button title="Todo" type="outline"
          onPress={ () => navigation.navigate("Todo")}
        />   
        <Button title="Paypal" type="outline"
          onPress={ () => navigation.navigate("Paypal")}
        />   
        <Button title="Rule" type="outline"
          onPress={ () => navigation.navigate("Rule")}
        />   
        <Button title="Issue" type="outline"
          onPress={ () => navigation.navigate("Issue")}
        />   
        <Button title="About" type="outline"
          onPress={ () => navigation.navigate("About")}
        />   
        <Button title="Annonceur" type="outline"
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