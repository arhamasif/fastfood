import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";
import HomeStackAdmin from './HomeStackAdmin';
import NotificationStackAdmin from './NotificationStackAdmin';

const RootDrawerNavigator = createDrawerNavigator({
    Home:
    {
        screen: HomeStackAdmin
    },
    Notification:{
        screen: NotificationStackAdmin
    }
});

export default createAppContainer(RootDrawerNavigator);