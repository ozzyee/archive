import styled from "styled-components";
import Colors from "../../../configs/colors.json";
import Fonts from "../../../configs/fonts.json";

export const ProjectGraphModalDiv = styled("div")``;

export const Wrapper = styled("div")`
   width: 100%;
   height: 290px;
`;

export const CenterContent = styled("div")`
   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const ProjectDropDownDiv = styled("div")`
   height: 60px;
   width: 100%;
   display: flex;
   justify-content: center;
`;

export const ProjectGraphDiv = styled("div")`
   width: 100%;
   height: 200px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Text = styled("p")`
   padding-bottom: 30px;
   color: ${Colors.primary};
   font-family: ${Fonts.primary};
`;
