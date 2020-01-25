import React from 'react'
import { ThemeProvider } from 'react-native-elements';
import { setNavigator } from './src/navigation_ref';
import { Icon } from 'react-native-elements'

import {  createStackNavigator, 
          createSwitchNavigator, 
          createBottomTabNavigator,
          createAppContainer,
         } from 'react-navigation';
import AboutScreen from './src/screens/about_screen';
import ChatScreen from './src/screens/chat_screen';
import IssueScreen from './src/screens/issue_screen';
import LoginScreen from './src/screens/login_screen';
import LogoutScreen from './src/screens/logout_screen';
import SignupScreen from './src/screens/signup_screen';
import WelcomeScreen from './src/screens/welcome_screen'
import SettingScreen from './src/screens/setting_screen'
import TodoScreen from './src/screens/todo_screen';
import SplashScreen from './src/screens/splash_screen';
import { NotificationAction}  from './src/actions/notification_actions';
import { DatabaseAction } from './src/actions/database_actions'
import { AuthAction  } from './src/actions/auth_actions'

const settingNavigator = createStackNavigator( {
  Setting: SettingScreen,
  Logout : LogoutScreen,
  About : AboutScreen
});

const switchNavigator = createSwitchNavigator( {
  mainFlow : createBottomTabNavigator( {
    Welcome: WelcomeScreen,
    TaskList: TodoScreen,
    Chat: ChatScreen,
    Settings : settingNavigator
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: { height:20 }
    },
  }),
  Splash : SplashScreen,
  Signup : SignupScreen,
  Login : LoginScreen,
});

const App = createAppContainer(switchNavigator );


console.log("Starting database...")
DatabaseAction.open();

//console.log("Starting notification...")
//NotificationAction.connect();

//console.log("Checking token for Authentification...")
//AuthAction.checkToken();

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