import * as React from "react";
import { ThemeProvider } from "styled-components";
import { TButtonProps } from "./button.definition";
import { ButtonStyled } from "./button.style";

export function Button({ className, color, children, onClick, type, id, style}: TButtonProps) {
  const theme = {
    color: color, // Using color prop ^^^
  };

  return (
    <ThemeProvider theme={theme}>
      <ButtonStyled  id={id} style={style} type={type} onClick={onClick}  className={className }>{children}</ButtonStyled>
    </ThemeProvider>
  );
}
