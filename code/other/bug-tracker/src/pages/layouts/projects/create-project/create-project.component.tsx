import React from "react";
import { TCreateProjectProps } from "./create-project.definition";
import * as S from "./create-project.style" ;

export function CreateProject ({ className }: TCreateProjectProps) {
  return (
    <S.CreateProjectDiv className={className}>
    </S.CreateProjectDiv>
  );
}
