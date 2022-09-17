import React, { useEffect, useState } from "react";
import { TGlassBackgroundProps } from "./glass-background.definition";
import * as S from "./glass-background.style";
import { ThemeProvider } from "styled-components";
import Colors from "../../configs/colors.json";

export function GlassBackground({
   className,
   children,
   active,
   glassPercentage,
   dataSet
}: TGlassBackgroundProps) {
   const [border, setBorder] = useState("1px solid white");
   const [glass, setGlass] = useState("rgb(255 255 255 / 0%) 200%");

   const theme = {
      border: border,
      glass: glass,
   };

   useEffect(() => {
      if (active) setBorder(`2px solid ${Colors.primary}`);
   }, [active]);

   useEffect(() => {
      if (glassPercentage) setGlass(`rgb(255 255 255 / 0%) ${glassPercentage}`);
   }, [glassPercentage]);

   return (
      <ThemeProvider theme={theme}>
         <S.GlassBackgroundDiv data-name={dataSet} className={className}>
            {children}
         </S.GlassBackgroundDiv>
      </ThemeProvider>
   );
}
