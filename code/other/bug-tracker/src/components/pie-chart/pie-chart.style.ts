import styled from "styled-components";
import Colors from "../../configs/colors.json";
import Fonts from "../../configs/fonts.json";

export const PieChartDiv = styled("div")`
   width: 180px;
   height: 180px;
   position: relative;

   display: flex;
   align-items: center;
   justify-content: center;

   .pie text {
      display: none;
   }

   title {
      display: none;
   }
`;

export const PieChartWrapper = styled("div")`
   position: relative;
   z-index: 10;
`

export const SegmentContent = styled("div")`
   position: absolute;
   top: 0;
   left: 0;
   width: 180px;
   height: 180px;
   display: flex;
   align-items: center;
   justify-content: center;

`;

export const TextHolder = styled("div")``;

export const Text = styled("div")`
   font-family: ${Fonts.primary};
   color: ${Colors.primary};
   font-size: 16px;
   height: 24px;
   text-align: center;
`;
