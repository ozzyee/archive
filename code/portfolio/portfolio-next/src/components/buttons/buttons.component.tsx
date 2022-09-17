import React from "react";
import { ThemeProvider } from "styled-components";
import { TButtonsProps } from "./buttons.definition";
import colors from "../../configs/colors.json";

import { Icons } from "../icons/icons.component";

import * as S from "./buttons.style";

export function Buttons({
   className,
   children,
   transparent,
   type,
   id,
   iconType,
   onClick,
}: TButtonsProps) {
   const theme = {
      backgroundColor: transparent ? "transparent" : colors.primary,
      textColor: transparent ? colors.primary : "white",
      borderColor: colors.primary,
   };

   if (type == "icons-button") {
      return (
         <S.ButtonWrapper className={className} id={id} onClick={onClick}>
            <Icons type={iconType} />
         </S.ButtonWrapper>
      );
   }

   return (
      <ThemeProvider theme={theme}>
         <S.ButtonsDiv className={className} onClick={onClick}>
            {children}
         </S.ButtonsDiv>
      </ThemeProvider>
   );
}
