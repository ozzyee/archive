import React from "react";
import { TButtonProps } from "./button.definition";
import * as S from "./button.style";

export function Button({ children, onClick }: TButtonProps) {
   return (
      <S.Button onPress={onClick}>
         <S.ButtonText>{children}</S.ButtonText>
      </S.Button>
   );
}
