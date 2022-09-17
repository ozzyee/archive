import styled from "styled-components";
import Colors from "../../../../../configs/colors.json";
import Font from "../../../../../configs/fonts.json";

export const AddButtonHolder = styled("div")`
  width: 60px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddButton = styled("div")`
  width: 30px;
  height: 30px;
  border-radius: 20px;

  &:active {
    transform: scale(0.9);
  }
`;

export const IconHolder = styled("div")`
  height: 100%;
  width: 100%;

  padding: 4px;
  color: ${Colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavItemsDiv = styled("button")`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: transparent;
`;

export const ButtonWrapper = styled("div")`
  width: ${(props) => props.theme.linkWidth};
  border-radius: 24px;
  text-align: center;
  position: relative;
  z-index: 10000;

  transition: border 100ms;
  transition: transform 90ms;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    border: 2px solid ${Colors.primary};
  }

  &.active-style {
    border: 2px solid ${Colors.primary};
  }
`;

export const Text = styled("p")`
  margin: 0px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 2px;
  margin-bottom: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  color: ${Colors.primary};
  font-family: ${Font.primary};
`;
