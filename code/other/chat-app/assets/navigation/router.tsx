import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { useAuth } from "../auth/auth.provider";
import { AppStack, AuthStack } from "./stack";

export const Router = () => {
   const { authData, _loading, signUpFunc: signUp } = useAuth();
   if (_loading) {
      //You can see the component implementation at the repository
      // return <Loading />;
   }

   return (
      <NavigationContainer >
         {authData ? <AppStack  /> : <AuthStack />}
      </NavigationContainer>
   );
};
