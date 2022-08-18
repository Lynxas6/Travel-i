import WelcomeScreen from "./app/screens/WelcomeScreen";
import { LoginScreen } from "./app/screens/LoginScreen";
import { RegisterScreen } from "./app/screens/RegisterScreen";
import { DestinationSearchScreen } from "./app/screens/DestinationSearchScreen";
import {ListItem} from "./app/components/ListItem";
import { SearchResMap } from "./app/screens/SearchResMap";

import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (

    <PaperProvider theme={paperTheme} >

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown:false}} >          
          <Stack.Screen name="DestinationSearch" component ={DestinationSearchScreen}/>        
          <Stack.Screen name="Welcome" component ={WelcomeScreen}/>
          <Stack.Screen name="Login" component ={LoginScreen}/>        
          <Stack.Screen name="Register" component ={RegisterScreen}/>        
          <Stack.Screen name="ResultsMap" component ={SearchResMap}/>        
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}


const paperTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    //primary:'tomato'
    background:'transparent'
  }
}




