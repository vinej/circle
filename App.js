import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import CompomentScreen from './src/screens/ComponentScreen';
import AboutScreen from './src/screens/AboutScreen';
import AdvertiserScreen from './src/screens/AdvertiserScreen';
import AllOpinionScreen from './src/screens/AllOpinionScreen';
import BestOpinionScreen from './src/screens/BestOpinionScreen';
import ChatScreen from './src/screens/ChatScreen';
import FriendOpinionScreen from './src/screens/FriendOpinionScreen';
import IssueScreen from './src/screens/IssueScreen';
import LoginScreen from './src/screens/LoginScreen';
import LogoutScreen from './src/screens/LogoutScreen';
import MainScreen from './src/screens/MainScreen';
import NewOpinionScreen from './src/screens/NewOpinionScreen';
import PaypalScreen from './src/screens/PaypalScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RappelScreen from './src/screens/RappelScreen';
import SettingScreen from './src/screens/SettingScreen';
import SignupScreen from './src/screens/SignupScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import TopicScreen from './src/screens/topicScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: CompomentScreen,
    About : AboutScreen,
    Advertiser : AdvertiserScreen,
    AllOpinion : AllOpinionScreen,
    BestOpinion : BestOpinionScreen,
    Chat : ChatScreen,
    FriendOpinion : FriendOpinionScreen,
    Issue : IssueScreen,
    Login : LoginScreen,
    Logout : LogoutScreen,
    Main : MainScreen,
    NewOpinion : NewOpinionScreen,
    Paypal : PaypalScreen,
    Profile : ProfileScreen,
    Rappel : RappelScreen,
    Setting : SettingScreen,
    Signup : SignupScreen,
    Welcome : WelcomeScreen,
    Topic : TopicScreen
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);


// const reducer = (state, action) => { }
// const [state, dispatch] = useReducer(reducer, { a default  object });

