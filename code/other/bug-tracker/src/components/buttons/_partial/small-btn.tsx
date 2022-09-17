import React from "react";
import { TButtonsProps } from "../buttons.definition";
import * as S from "../buttons.style";
import { GlassBackground } from "../../glass-background/glass-background.component";

export function SmallBtn({ className, children, onClick }: TButtonsProps) {
  return (
    <>
      <S.SmallBtnHolderGlass onClick={onClick} className={className}>
        <GlassBackground>
          <S.IconHolder>{children}</S.IconHolder>
        </GlassBackground>
      </S.SmallBtnHolderGlass>
    </>
  );
}
