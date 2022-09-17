import styled from "styled-components";
import colors from "../../../configs/colors.json";

export const SubNavigationDiv = styled("div")`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GlassBackground = styled("div")`
  border-top-left-radius: 0px;
  border: 1px solid white;
  position: relative;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    rgb(255 255 255 / 80%) 0%,
    rgb(255 255 255 / 0%) 200%
  );

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Search = styled("div")`
  margin-left: 20px;
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled("input")`
  width: 80%;
  height: 25px;
  border-radius: 100px;
  background-color: transparent;
  text-align: center;
  border: 2px solid white;
  color: ${colors.primary};
  font-size: 16px;

  ::placeholder {
    color: ${colors.primary};
    font-size: 16px;
  }

  :focus {
    border: 2px solid ${colors.primary};
    outline: none;
    background-color: white;
  }
`;

export const SearchBtn = styled("button")`
  margin-left: 10px;
  width: 80px;
  height: 25px;
  border-radius: 100px;
  background-color: ${colors.primary};
  border-color: transparent;
  color: white;

  :active {
    transform: scale(0.95);
  }
`;
