import React from 'react'
import { Provider} from 'mobx-react'

import {  createStackNavigator, 
          createSwitchNavigator, 
          createBottomTabNavigator,
          createAppContainer } from 'react-navigation';
import AboutScreen from './src/screens/AboutScreen';
import AdvertiserScreen from './src/screens/AdvertiserScreen';
import AllOpinionScreen from './src/screens/AllOpinionScreen';
import ChatScreen from './src/screens/ChatScreen';
import IssueScreen from './src/screens/IssueScreen';
import LoginScreen from './src/screens/LoginScreen';
import LogoutScreen from './src/screens/LogoutScreen';
import NewOpinionScreen from './src/screens/NewOpinionScreen';
import PaypalScreen from './src/screens/PaypalScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignupScreen from './src/screens/SignupScreen';
import RuleScreen from './src/screens/RuleScreen';
import SettingScreen from './src/screens/SettingScreen';
import authStore from './src/stores/auth_store'
import todoStore from './src/stores/todo_store'
import AuthService from './src/services/auth_service'
import TodoService from './src/services/todo_service'
import { MockAuthService, MockTodoService } from './src/services/mock_services'
import TodoScreen from './src/screens/TodoScreen';

AuthService.setInstance( new MockAuthService() )
TodoService.setInstance( new MockTodoService() )

const switchNavigator = createSwitchNavigator( {
  loginFlow: createStackNavigator( {
    Todo: TodoScreen,
    Signup : SignupScreen,
    Login : LoginScreen
  } ),
  mainFlow : createBottomTabNavigator( {
    AllOpinion : AllOpinionScreen,
    Profile : ProfileScreen,
    Opinion : NewOpinionScreen,
    Chat: ChatScreen,
    settingFlow : createStackNavigator( {
      Setting : SettingScreen,
      Logout : LogoutScreen,
      Paypal : PaypalScreen,
      Rule: RuleScreen,
      Issue : IssueScreen,
      About : AboutScreen,
      Advertiser: AdvertiserScreen
    })
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={ authStore }>
      <App/>
    </Provider>
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