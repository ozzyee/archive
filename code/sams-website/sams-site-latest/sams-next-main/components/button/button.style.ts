import styled from "styled-components";

// If this gets massive
// Make a button.config.ts file
const config = {
  black: "#1f1f23",
  white: "#eef0f5",
};

// Pass theme from button.component via ThemeProvider
// Everything in the theme provider have access to {theme}

// Turnery below
// if theme.color equals white then use config.black for color:
export const ButtonStyled = styled("button")`
  color: ${({ theme }) =>
    theme.color === "white" ? config.black : config.white};
  background-color: ${({ theme }) =>
    theme.color === "white" ? config.white : config.black};
  border-radius: 100px;
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  outline: 0;
  transition: opacity 200ms;
  cursor: pointer;
  border: 0;

  /* 
    TODO: Change background-color and color on hover instead 
    This looks weird
  */
  opacity: 1;

  &:hover {
    background-color: #238ed0;
    color: white;

    transition: background-color ease-in 200ms;
  }

  .text {
    margin-top: 0;
    margin-bottom: 0;
  }


`;
