import React, { useEffect, useState } from "react";
import { TProgressBarProps } from "./progress-bar.definition";
import * as S from "./progress-bar.style";
import { GlassBackground } from "../glass-background/glass-background.component";
import { ThemeProvider } from "styled-components";

export function ProgressBar({
   className,
   width,
   height,
   percentageDone,
}: TProgressBarProps) {
   const [newHeight, setHeight] = useState("20px");
   const [newWidth, setWidth] = useState("100px");
   const [percentage, setPercentage] = useState(0);

   useEffect(() => {
      if (width) setWidth(width);
      if (height) setHeight(height);
      if (percentageDone) setPercentage(percentageDone);
   }, [width, height, percentageDone]);

   const theme = {
      width: newWidth,
      height: newHeight,
      percentage: percentage + "%",
   };

   return (
      <ThemeProvider theme={theme}>
         <S.ProgressBarDiv className={className}>
            <GlassBackground>
               <S.PercentageLine />
            </GlassBackground>
         </S.ProgressBarDiv>
      </ThemeProvider>
   );
}