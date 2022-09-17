import styled from "styled-components";
import Fonts from "../../configs/fonts.json";
import Colors from "../../configs/colors.json";

export const HeadersDiv = styled("div")``;

export const scheduleHeadersHolder = styled("div")`
   position: relative;
   width: 100%;
   height: 35px;

   display: flex;
   align-items: center;
   justify-content: center;
`;

export const DateHolder = styled("div")`
   width: 20%;
   height: 100%;

   display: flex;
   align-items: center;
   justify-content: center;

   font-family: ${Fonts.primary};
   color: ${Colors.primary};
   font-size: 13px;
   cursor: default;
`;

export const FontHolder = styled("div")`
   width: 60%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const ButtonHolder = styled("div")`
   width: 20%;
   display: flex;
   align-items: center;
   justify-content: center;
`;
