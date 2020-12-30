import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";
import HomeStackCust from './HomeStackCust';
import NotificationStackCust from './NotificationStackCust';
import Colors from '../../components/colors';
import CustSettingsStack from './CustSettingsStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home:
    {
        screen: HomeStackCust
    },
    Notifications:{
        screen: NotificationStackCust
    },
    Settings:
    {
        screen: CustSettingsStack
    }
});

export default createAppContainer(RootDrawerNavigator);