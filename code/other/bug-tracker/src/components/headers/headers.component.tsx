import React from "react";
import { Buttons } from "../buttons/buttons.component";
import { Font } from "../font/font.component";
import { THeadersProps } from "./headers.definition";
import * as S from "./headers.style";

export function Headers({ className, header, date }: THeadersProps) {
   if (header == "schedule") {
      return (
         <S.scheduleHeadersHolder>
            <S.DateHolder>{date}</S.DateHolder>

            <S.FontHolder>
               <Font font="header">Your Day Schedule</Font>
            </S.FontHolder>

            <S.ButtonHolder>
               <Buttons Btn="add" />
            </S.ButtonHolder>
         </S.scheduleHeadersHolder>
      );
   }

   return <S.HeadersDiv className={className}></S.HeadersDiv>;
}
