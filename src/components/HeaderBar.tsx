import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Button, Text } from "react-native";
import { Icon } from "react-native-elements";
import Continents from './Continents';
import Logout from './Logout';
import Staff from './Staff';

interface HeaderBarProps {
    title: string
}

const Drawer = createDrawerNavigator();

export default function HeaderBar(props: HeaderBarProps) {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Staff" component={Staff} />
                <Drawer.Screen name="Continents" component={Continents} />
                <Drawer.Screen name="Logout" component={Logout} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}