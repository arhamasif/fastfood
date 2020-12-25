import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import AppStartingScreen from '../screens/AppStartingScreen';
import CustLogin from '../screens/Cust/CustLogin';
import AdminLogin from '../screens/Admin/AdminLogin';
import NavigatorCust from './Cust/drawerCust';
import NavigatorAdmin from './Admin/drawerAdmin';
import SignUpCust from '../screens/Cust/SignUpCust';
import SignUpAdmin from '../screens/Admin/SignUpAdmin';

const screens = {
    AppStart: {
        screen: AppStartingScreen
    },
    CustLogin:
    {
        screen: CustLogin
    },
    AdminLogin:
    {
        screen: AdminLogin
    },
    NavigatorAdmin:
    {
        screen: NavigatorAdmin
    },
    NavigatorCust:
    {
        screen: NavigatorCust
    },
    SignUpCust:
    {
        screen: SignUpCust
    },
    SignUpAdmin:
    {
        screen: SignUpAdmin
    }
};

const LoginStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerShown:false
    }
});

export default createAppContainer(LoginStack);