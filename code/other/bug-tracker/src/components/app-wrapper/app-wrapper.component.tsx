import React from "react";
import { TAppWrapperProps } from "./app-wrapper.definition";
import * as S from "./app-wrapper.style" ;

export function AppWrapper ({ className }: TAppWrapperProps) {
  return (
    <S.AppWrapperDiv className={className}>
    </S.AppWrapperDiv>
  );
}
