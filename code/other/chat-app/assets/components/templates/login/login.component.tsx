import React from "react";
import { TLoginProps } from "./login.definition";
import * as S from "./login.style";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import { AuthFooter } from "../../molecules/auth-footer/auth-footer.component";
import { OauthFrom } from "../../molecules/oauth-form/oauth-form.component";
import { TitleContainer } from "../../molecules/title-container/title-container.component";
import { SigninSignupForm } from "../../molecules/signin-signup-form/signin-form.component";

export function Login(props: any) {
   return (
      <>
         <View style={style.scrollView}>
            <View style={style.wrapper}>
               <TitleContainer Title="Welcome" SubTitle="Signin to continue" />
               <SigninSignupForm />
            </View>

            <HideWithKeyboard>
               <View style={style.oauthWrapper}>
                  <OauthFrom />
                  <AuthFooter {...props} />
               </View>
            </HideWithKeyboard>
         </View>
      </>
   );
}

const style = StyleSheet.create({
   scrollView: {
      backgroundColor: "white",
      display: "flex",
      flexGrow: 1,
      padding: 30,
      paddingBottom: 10,
      alignItems: "center",
   },

   wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
   },

   oauthWrapper: {
      width: "100%",
      position: "absolute",
      bottom: 0,
      alignSelf: "center",
   },

   space: {
      height: 20,
      backgroundColor: "grey",
   },
});
