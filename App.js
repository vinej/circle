import React from 'react'
import { ThemeProvider } from 'react-native-elements';
import { setNavigator } from './src/navigationRef'

import {  createStackNavigator, 
          createSwitchNavigator, 
          createBottomTabNavigator,
          createAppContainer,
         } from 'react-navigation';
import AboutScreen from './src/screens/AboutScreen';
import AdvertiserScreen from './src/screens/AdvertiserScreen';
import AllOpinionScreen from './src/screens/AllOpinionScreen';
import ChatScreen from './src/screens/ChatScreen';
import IssueScreen from './src/screens/IssueScreen';
import LoginScreen from './src/screens/LoginScreen';
import LogoutScreen from './src/screens/LogoutScreen';
import OpinionScreen from './src/screens/OpinionScreen';
import PaypalScreen from './src/screens/PaypalScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignupScreen from './src/screens/SignupScreen';
import RuleScreen from './src/screens/RuleScreen';
import WelcomeScreen from './src/screens/WelcomeScreen'
import SettingScreen from './src/screens/SettingScreen'
import TodoScreen from './src/screens/TodoScreen';
import SplashScreen from './src/screens/SplashScreen';
import TopicScreen from './src/screens/TopicScreen';
import Notification from './src/services/notification_service';

const settingNavigator = createStackNavigator( {
  Setting: SettingScreen,
  Logout : LogoutScreen,
  Topic: TopicScreen,
  Todo: TodoScreen,
  Paypal : PaypalScreen,
  Rule: RuleScreen,
  Issue : IssueScreen,
  About : AboutScreen,
  Advertiser: AdvertiserScreen
});

const switchNavigator = createSwitchNavigator( {
  Splash : SplashScreen,
  Welcome: WelcomeScreen,
  Signup : SignupScreen,
  Login : LoginScreen,
  mainFlow : createBottomTabNavigator( {
    AllOpinion : AllOpinionScreen,
    Profile : ProfileScreen,
    Opinion : OpinionScreen,
    Chat: ChatScreen,
    Settings : settingNavigator
  })
});

const App = createAppContainer(switchNavigator );

console.log("Starting notification...")
Notification.connect();
console.log("Notification started")

export default () => {
  return (
     <ThemeProvider>
        <App ref= { (navigator) => { setNavigator(navigator) } } />
      </ThemeProvider>  
  )
};

// const reducer = (state, action) => { }
// const [state, dispatch] = useReducer(reducer, { a default  object });
// Box Model == positionning of a single element
// Flex Box Model == position multiple elements with a common parent
// Position Model == overide Box + Flex Model
// parent: alignItems, flexDirection, justifyContent on the parent view
// child : flex, alignSelf
// postion : relative or absolute
// ...StyleSheet.absoluteFillObject