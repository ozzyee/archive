import React from "react";
import { TAuthFooterProps } from "./auth-footer.definition";
import * as S from "./auth-footer.style";
import { Text } from "../../atoms/text/text.component";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export function AuthFooter({ signup, navigation }: TAuthFooterProps) {
   return (
      <S.AuthFooterView>
         {!signup && <Text type="footer">Dont have an account?</Text>}
         <TouchableOpacity
            onPress={() =>
               signup
                  ? navigation.navigate("login")
                  : navigation.navigate("Signup")
            }
         >
            <Text type="footer-bold-primary" spacing="10px">
               {signup ? "sign in" : " Create Account"}
            </Text>
         </TouchableOpacity>
      </S.AuthFooterView>
   );
}
