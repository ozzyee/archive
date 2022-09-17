import styled from "styled-components";
import Colors from "../../../configs/colors.json";

export const PriorityJobsLayoutDiv = styled("div")`
   height: 290px;
   width: 100%;
`;

export const TitleWrapper = styled("div")`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
`;

export const LineBreak = styled("div")`
   padding-top: 10px;
   border-bottom: 1px solid ${Colors.primary};
   width: 90%;
`;

export const CenterContent = styled("div")`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const TicketInfoWrapper = styled("div")`
   width: 350px;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 20px;
   margin-top: 10px;
`;

export const TicketHolderWrapper = styled("div")`
   margin-top: 10px;
   height: 160px;
   width: 350px;
`;
