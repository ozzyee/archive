import styled from "styled-components";
import colors from "../../../../../configs/colors.json";

export const DateCalendarDiv = styled("div")`
   height: 200px;
   width: 100%;

   .before {
      color: gray;
      cursor: not-allowed;
   }

   .selected {
      border: 2px solid ${colors.primary};
      height: 100%;
      width: 26px;
      border-radius: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
   }

   .today {
      background-color: lightgray;
      height: 100%;
      width: 26px;
      border-radius: 100%;
      background-color: ${colors.primary};
      color: white;

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
   }
`;

export const WeekGrid = styled("div")`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 5px;

   /* border: 2px solid green; */
`;

export const DayHolder = styled("div")`
   width: 14%;
   font-size: 12px;
   height: 25px;
   color: ${colors.primary};

   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`;
