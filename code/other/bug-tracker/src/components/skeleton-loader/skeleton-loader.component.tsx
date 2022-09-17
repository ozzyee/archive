import React from "react";
import { ThemeProvider } from "styled-components";
import { TSkeletonLoaderProps } from "./skeleton-loader.definition";
import * as S from "./skeleton-loader.style";

export function SkeletonLoader({
  className,
  width,
  height,
  borderRadius
}: TSkeletonLoaderProps) {
  const theme = {
    width,
    height,
    borderRadius
  };

  return (
    <ThemeProvider theme={theme}>
      <S.SkeletonLoaderDiv className={className}>
        <div className="header">
          <div className="details">
            <span className="about"></span>
          </div>
        </div>
      </S.SkeletonLoaderDiv>
    </ThemeProvider>
  );
}
