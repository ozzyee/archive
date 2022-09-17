import styled from "styled-components";
import Colors from "../../../configs/colors.json";

export const ScheduleLayoutDiv = styled("div")`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const FlexBox = styled("div")`
   height: 100%;

   display: flex;
   align-items: center;
   justify-content: center;
`;

export const CalenderHolder = styled("div")`
   width: 38%;
   height: 100%;
`;

export const TicketHeaderHolder = styled("div")`
   width: 62%;
   height: 100%;
   float: right;
`;

export const LineBreak = styled("div")`
   display: flex;
   align-items: center;
   justify-content: center;

   .line {
      border-top: 1px solid ${Colors.primary};
      width: 70%;
   }
`;
