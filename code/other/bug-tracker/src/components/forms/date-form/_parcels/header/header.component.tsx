import React, { useEffect, useState } from "react";
import { THeaderProps } from "./header.definition";
import * as S from "./header.style";

// ICONS
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";

export function Header({
   className,
   currentMonthNameF,
   currentYearF,
   previousMonthF,
   nextMonthF,
   value,
}: THeaderProps) {
   const [disableBtn, setDisableBtn] = useState(true);

   useEffect(() => {
      if (value.isSame(new Date(), "month")) {
         setDisableBtn(true);
      } else {
         setDisableBtn(false);
      }
   }, [value]);

   function nextMoth() {
      if (
         value.isSame(new Date(), "month") ||
         value.isAfter(new Date(), "month")
      ) {
         setDisableBtn(false);
      }
      nextMonthF();
   }

   return (
      <S.HeaderDiv className={className}>
         <S.ArrowHolder>
            <S.IconHolder>
               <ArrowIosBackOutline
                  onClick={previousMonthF}
                  id="icon"
                  className={`${disableBtn && `display-none`}`}
               />
            </S.IconHolder>
         </S.ArrowHolder>

         <S.DateHolder>
            {currentMonthNameF()} {currentYearF()}
         </S.DateHolder>

         <S.ArrowHolder>
            <S.IconHolder>
               <ArrowIosForwardOutline onClick={nextMoth} id="icon" />
            </S.IconHolder>
         </S.ArrowHolder>
      </S.HeaderDiv>
   );
}
