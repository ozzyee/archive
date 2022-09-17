import React from "react";
import { ThemeProvider } from "styled-components";
import { TTicketHolderProps } from "./ticket-holder.definition";
import * as S from "./ticket-holder.style";

export function TicketHolder({
   className,
   children,
   width,
   height,
}: TTicketHolderProps) {
   const theme = {
      width: width,
      height: height,
   };

   return (
      <ThemeProvider theme={theme}>
         <S.TicketHolderDiv className={className}>{children}</S.TicketHolderDiv>
      </ThemeProvider>
   );
}
