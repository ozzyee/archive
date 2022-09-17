import styled from "styled-components";
import Colors from "../../../configs/colors.json";
import Text from "../../../configs/fonts.json";

export const UserModalLayoutDiv = styled("div")`
  width: 260px;
  height: 290px;
`;

export const ImageHolder = styled("div")`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonHolder = styled("div")`
  height: 25%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled("div")`
  width: 50%;
  float: right;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameHolder = styled("div")`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameText = styled("p")`
  padding: 0;
  margin: 0;
  color: ${Colors.primary};
  font-family: ${Text.primary};
  font-size: 18px;
`;
