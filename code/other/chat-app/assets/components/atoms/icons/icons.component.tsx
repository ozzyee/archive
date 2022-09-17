import React from "react";
import { TIconsProps } from "./icons.definition";
import * as S from "./icons.style";

export function Icons({ type }: TIconsProps) {
   if (type == "google") {
      return (
         <S.ImageIcon
            source={require("../../../images/google-logo-9808.png")}
         />
      );
   }

   if (type == "facebook") {
      return <S.ImageIcon source={require("../../../images/facebook.png")} />;
   }

   return null;
}
