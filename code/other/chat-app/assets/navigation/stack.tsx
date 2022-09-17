import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

// Screens
import { HomeScreen } from "../screens/home";
import { SignUpScreen } from "../screens/signup";
import { LoginScreen } from "../screens/login";

export const AppStack = () => {
   return (
      <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
   );
};

export const AuthStack = () => {
   return (
      <Stack.Navigator initialRouteName="login">
         <Stack.Screen name="login" options={{ headerShown: false }}>
            {(props) => <LoginScreen {...props} />}
         </Stack.Screen>

         <Stack.Screen name="Signup" options={{ headerShown: false }}>
            {(props) => <SignUpScreen {...props} />}
         </Stack.Screen>
      </Stack.Navigator>
   );
};
