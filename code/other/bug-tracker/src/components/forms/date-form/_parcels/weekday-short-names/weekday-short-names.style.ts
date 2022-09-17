import styled from "styled-components";
import colors from "../../../../../configs/colors.json";

export const WeekdayShortNamesDiv = styled("div")`
   margin-top: 6px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: default;

   width: 246px;

   border: 2px solid transparent;
`;

export const DayName = styled("th")`
   font-size: 14px;
   font-weight: normal;
   width: 14%;
   color: ${colors.primary};

`;
