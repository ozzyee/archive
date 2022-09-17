import styled from "styled-components";
import Fonts from "../../configs/fonts.json";
import Colors from "../../configs/colors.json";

export const InfoTicketHolder = styled("div")`
   font-size: ${(props) => props.theme.fontSize};
   width: ${(props) => props.theme.width};
   height: ${(props) => props.theme.height};
   position: relative;

   margin-top: 10px;
   margin-bottom: 10px;

   .show-glass {
      position: absolute;
      display: none;
   }

   .position-glass {
      position: absolute;
   }
`;

export const InfoTitle = styled("div")`
   width: ${(props) => props.theme.titleCell};
   height: ${(props) => props.theme.height};

   padding-left: ${(props) => props.theme.padding};
   margin-left: ${(props) => props.theme.newMarginLeft};

   position: relative;

   display: flex;
   align-items: center;
   cursor: default;

   .info-text {
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }

   &.show-more-title {
      width: 100%;
      position: absolute;
      margin-left: 0;
      border-radius: 20px;
      background-color: ${Colors.offsetWhite};
      z-index: 100;

      .info-text {
         padding-left: 10px;
      }
   }
`;

export const ProjectTitle = styled("div")`
   width: ${(props) => props.theme.projectCellSize};

   padding-right: 10px;

   .title-text {
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`;

export const MessageWrapper = styled("div")`
   width: ${(props) => props.theme.width};
   color: ${Colors.primary};
`;

export const MessageTitleWrapper = styled("div")`
   width: 100%;
   height: 30px;
   margin-top: 8px;
   padding-left: 8px;
   padding-top: 5px;
   padding-right: 10px;
   display: flex;
`;

export const LineBreakWrapper = styled("div")`
   display: flex;
   align-items: center;
   justify-content: center;

   .line {
      border-top: 1px solid;
      width: 80%;
   }
`;

export const MessageTextWrapper = styled("div")`
   min-height: 60px;
   max-height: 115px;
   padding-left: 13px;
   padding-right: 10px;
   padding-top: 5px;
   font-size: 14px;
   margin-bottom: 10px;
   overflow: scroll;
`;

export const Text = styled("p")`
   margin: 0;
   padding-left: 4px;
   padding-right: 4px;
   font-size: 14px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

export const MessageText = styled("div")`
   border: 2px solid green;
   height: 300px;
   font-size: 14px;
   padding-right: 10px;
   overflow: scroll;
`;

export const CenterContent = styled("div")`
   justify-content: center;
   position: relative;
   align-items: center;
   display: flex;
   height: 100%;
   width: 100%;

   z-index: 12;

   font-family: ${Fonts.primary};
   color: ${Colors.primary};
`;

export const InfoGroupe = styled("div")`
   width: ${(props) => props.theme.groupeCell};
   text-align: left;
   cursor: default;
`;

export const InfoDeadLine = styled("div")`
   width: ${(props) => props.theme.deadlineCell};
   padding-left: ${(props) => props.theme.padding};
   text-align: left;
   cursor: default;
`;

export const InfoStatus = styled("div")`
   width: ${(props) => props.theme.statusCell};
   text-align: center;
   cursor: default;
`;

export const InfoProgress = styled("div")`
   width: ${(props) => props.theme.progressCell};
   text-align: left;
   cursor: default;
`;

export const TimeInfo = styled("div")`
   width: ${(props) => props.theme.timeCell};
   text-align: left;
   cursor: default;
`;
