import { createDrawerNavigator } from '@react-navigation/drawer';
import Continents from '../Continents';
import Home from '../Home';
import Logout from '../Logout';
import Staff from '../Staff';
import { DashboardDrawerParamList } from '../types/types';

interface HeaderBarProps {
    title?: string
}

const Drawer = createDrawerNavigator<DashboardDrawerParamList>();

export default function HeaderBar(props: HeaderBarProps) {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} options={{ headerTitle: "ZAMARA APP"}}/>
            <Drawer.Screen name="Staff" component={Staff} />
            <Drawer.Screen name="Continents" component={Continents} />
            <Drawer.Screen name="Logout" component={Logout} options={{ headerShown: false}}/>
        </Drawer.Navigator>
    );
}