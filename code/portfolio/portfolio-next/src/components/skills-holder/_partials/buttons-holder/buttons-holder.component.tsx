import React from "react";
import { TButtonsHolderProps } from "./buttons-holder.definition";
import * as S from "./buttons-holder.style";

import { Buttons } from "../../../buttons/buttons.component";

export function ButtonsHolder({
   className,
   addFunction,
   deleteFunction,
   createButtons,
}: TButtonsHolderProps) {
   return (
      <S.ButtonsHolderDiv className={className}>
         {createButtons && (
            <Buttons
               id="add-btn"
               iconType="add"
               type="icons-button"
               onClick={addFunction}
            />
         )}

         <Buttons
            id="delete-btn"
            iconType="delete"
            type="icons-button"
            onClick={deleteFunction}
         />
      </S.ButtonsHolderDiv>
   );
}
