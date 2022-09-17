import React, { useEffect, useState } from "react";
import { TTextProps } from "./text.definition";
import * as S from "./text.style";
import { Dimensions } from "react-native";
import { colors } from "../../../styles/colors";

const { width, height } = Dimensions.get("window");

export function Text({ children, type, spacing }: TTextProps) {
   const [_textSize, setTextSize] = useState<string | undefined>("");
   const [_colors, setColors] = useState("black");

   function fontTypes(screenWidth: number) {
      if (
         type == "title" ||
         type == "auth-text" ||
         type == "footer-bold-primary"
      )
         setColors(colors.primary);
      if (type == "subtitle") setColors(colors.secondary);

      if (screenWidth > 400) {
         if (type == "title") {
            return "44px";
         } else if (type == "subtitle") {
            return "18px";
         } else if (type == "auth-text") {
            return "19px";
         }
      } else if (screenWidth > 250) {
         if (type == "title") {
            return "38px";
         } else if (type == "subtitle") {
            return "18px";
         }
      } else {
         if (type == "title") {
            return "22px";
         }
      }

      if ((type = "footer")) return "15px";
      return "16px";
   }

   useEffect(() => {
      const size = fontTypes(width);
      setTextSize(size);
   }, []);

   if (!_textSize) return null;
   return (
      <S.Text
         fontSize={_textSize}
         colors={_colors}
         fontWeight={type == "footer-bold-primary" ? "bold" : "normal"}
         spacing={spacing ? spacing : "0px"}
      >
         {children}
      </S.Text>
   );
}
