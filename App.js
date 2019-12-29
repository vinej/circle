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

const switchNavigator = createSwitchNavigator( {
  loginFlow: createStackNavigator( {
    Signup : SignupScreen,
    Login : LoginScreen
  } ),
  mainFlow : createBottomTabNavigator( {
    AllOpinion : AllOpinionScreen,
    Profile : ProfileScreen,
    Opinion : NewOpinionScreen,
    Chat: ChatScreen,
    settingFlow : createStackNavigator( {
      Logout : LogoutScreen,
      Paypal : PaypalScreen,
      Rule: RuleScreen,
      Issue, IssueScreen,
      About, AboutScreen,
      Advertiser: AdvertiserScreen
    })
  })
});


export default createAppContainer(switchNavigator);


// const reducer = (state, action) => { }
// const [state, dispatch] = useReducer(reducer, { a default  object });
// Box Model == positionning of a single element
// Flex Box Model == position multiple elements with a common parent
// Position Model == overide Box + Flex Model
// parent: alignItems, flexDirection, justifyContent on the parent view
// child : flex, alignSelf
// postion : relative or absolute
// ...StyleSheet.absoluteFillObject