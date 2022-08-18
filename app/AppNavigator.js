import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import WelcomeScreen from './screens/WelcomeScreen';
import { LoginScreen } from "./screens/LoginScreen";

const {Navigator, Screen} = createNativeStackNavigator();


const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="Welcome">
            <Screen  name="Welcome" component={WelcomeScreen}></Screen>
            <Screen name="Login" component={LoginScreen}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;