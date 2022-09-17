import React, { useEffect, useState } from "react";
import { TNavItemsProps } from "./nav-items.definition";
import * as S from "./nav-items.style";

// Components
import { GlassBackground } from "../../../../glass-background/glass-background.component";
import { useRouter } from "next/router";
import { Icons } from "../../../../icons/icons.component";
import { ThemeProvider } from "styled-components";

export function NavItems({
  className,
  active,
  children,
  onClick,
  dataSet,
  linkType,
}: TNavItemsProps) {
  const router = useRouter();
  const key = Object.keys(router.query)[0];
  const newClass = key === dataSet && "active-style";
  const [width, setWidth] = useState("126px");

  const theme = {
    linkWidth: width,
  };

  useEffect(() => {
    if (linkType == "friends") setWidth("200px");
  }, [linkType]);

  if (dataSet == "add") {
    return (
      <S.AddButtonHolder>
        <S.AddButton onClick={onClick}>
          <GlassBackground
            dataSet={dataSet}
            glassPercentage="150%"
            active={active}
          >
            <S.IconHolder data-name={dataSet}>
              <Icons dataSet={dataSet} Icon="add" />
            </S.IconHolder>
          </GlassBackground>
        </S.AddButton>
      </S.AddButtonHolder>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <S.NavItemsDiv className={className}>
        <S.ButtonWrapper
          data-name={dataSet}
          onClick={onClick}
          className={`${newClass}`}
        >
          <GlassBackground
            dataSet={dataSet}
            glassPercentage="150%"
            active={active}
          >
            <S.Text data-name={dataSet}>{children}</S.Text>
          </GlassBackground>
        </S.ButtonWrapper>
      </S.NavItemsDiv>
    </ThemeProvider>
  );
}
