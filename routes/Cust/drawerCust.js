import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";
import HomeStack from './HomeStackCust';
import NotificationStack from './NotificationStackCust';

const RootDrawerNavigator = createDrawerNavigator({
    Home:
    {
        screen: HomeStack
    },
    Notification:{
        screen: NotificationStack
    }
});

export default createAppContainer(RootDrawerNavigator);