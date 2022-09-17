import styled from "styled-components";
import Colors from "../../../configs/colors.json";
import Fonts from "../../../configs/fonts.json";

export const ProjectCreateFormDiv = styled("div")`
   width: 400px;
   height: 240px;
`;

export const FormWrapper = styled("div")`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 100%;
   height: 100%;
`;

export const TitleHolder = styled("div")`
   width: 95%;
   height: 50px;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Title = styled("p")`
   color: ${Colors.primary};
   font-family: ${Fonts.primary};
   font-size: 18px;
   margin: 0;
`;

export const AddButtonHolder = styled("div")`
   position: absolute;
   margin-right: -300px;
   width: 30px;
   padding: 3px;

   color: ${Colors.primary};
   display: flex;
   align-items: center;
   justify-content: center;

   &:active {
      transform: scale(0.9);
   }
`;

export const Line = styled("div")`
   border-top: 2px solid ${Colors.primary};
   width: 80%;
`;

export const TicketWrapper = styled("div")`
   height: 74%;
   width: 95%;
`;

export const TicketHolder = styled("div")`
   width: 100%;
   height: 100%;
   overflow: scroll;
`;

export const CenterAddButton = styled("div")`
   width: 100%;
   height: 100%;

   display: flex;
   align-items: center;
   justify-content: center;
`;
