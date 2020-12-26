import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";
import HomeStackCust from './HomeStackCust';
import NotificationStackCust from './NotificationStackCust';

const RootDrawerNavigator = createDrawerNavigator({
    Home:
    {
        screen: HomeStackCust
    },
    Notifications:{
        screen: NotificationStackCust
    }
});

export default createAppContainer(RootDrawerNavigator);