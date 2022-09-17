import React, { useState } from "react";
import { TInputsProps } from "./inputs.definition";
import * as S from "./inputs.style";
import Icon from "react-native-vector-icons/Feather";
import { colors } from "../../../styles/colors";
import { View } from "react-native";

export function Inputs({
   placeholder,
   onChangeText,
   password,
   showPassword,
   showState,
   incorrect,
}: TInputsProps) {
   return (
      <View
         style={{
            width: "100%",
         }}
      >
         <S.InputsView
            placeholder={placeholder}
            onChangeText={onChangeText}
            secureTextEntry={!showState}
            borderColor={incorrect ? "red" : colors.primary}
         />
         {password && (
            <View
               style={{
                  position: "absolute",
                  bottom: 6,
                  right: 6,
               }}
            >
               {showState ? (
                  <Icon
                     name="eye-off"
                     size={23}
                     color={incorrect ? "red" : colors.primary}
                     onPress={showPassword}
                  />
               ) : (
                  <Icon
                     name="eye"
                     size={23}
                     color={incorrect ? "red" : colors.primary}
                     onPress={showPassword}
                  />
               )}
            </View>
         )}
      </View>
   );
}
