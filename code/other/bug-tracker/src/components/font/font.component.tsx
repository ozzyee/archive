import React from 'react';
import { TFontProps } from './font.definition';
import * as S from './font.style';

export function Font({ className, font, children }: TFontProps) {
  if (font == 'header') {
    return <S.HeaderFont>{children}</S.HeaderFont>;
  }

  return <S.FontDiv className={className}>{children}</S.FontDiv>;
}
