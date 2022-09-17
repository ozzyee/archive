import React from "react";
import { TTitleContainerProps } from "./title-container.definition";
import * as S from "./title-container.style";
import { Text } from "../../atoms/text/text.component";

export function TitleContainer({ Title, SubTitle }: TTitleContainerProps) {
   return (
      <S.TitleContainerView>
         <Text type="title">{Title}</Text>
         <Text type="subtitle">{SubTitle}</Text>
      </S.TitleContainerView>
   );
}
