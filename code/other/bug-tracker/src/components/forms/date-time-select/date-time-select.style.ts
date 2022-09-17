import styled from "styled-components";
import colors from "../../../configs/colors.json";

export const FormInputHolder = styled("div")`
   width: 250px;
   height: 50px;

   display: flex;
   align-items: center;
   justify-content: center;
`;

export const FormInput = styled("input")`
   width: 100%;
   height: 35px;
   border-radius: 20px;
   border: 2px solid white;

   color: ${colors.primary};
   cursor: pointer;

   text-align: center;
   caret-color: rgba(0, 0, 0, 0);
   background: linear-gradient(
      to bottom right,
      rgb(255 255 255 / 80%) 0%,
      rgb(255 255 255 / 0%) 200%
   );

   &::placeholder {
      color: ${colors.primary};
   }

   &:focus {
      outline: none;
   }
`;

export const HeaderHolder = styled("div")`
   height: 40px;
   width: 100%;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;

   background-color: ${colors.primary};
   display: flex;
   align-items: center;
   justify-content: center;
   border: 2px solid ${colors.primary};
`;

export const CalendarButtonHolder = styled("div")`
   opacity: ${(props) => props.theme.showCalender};
   z-index: ${(props) => props.theme.zIndex};
   cursor: pointer;

   transition: opacity 660ms ease-in-out;

   width: 100%;
   height: 100%;

   display: flex;
   align-items: center;
   justify-content: center;

   &:active {
      transform: scale(0.9);
   }

   .cal-icon {
      height: 20px;
      color: white;
   }
`;

export const FormWrapper = styled("div")`
   transition: height 300ms;
   position: absolute;
   overflow: hidden;
   width: 250px;

   margin-top: 48px;
   height: ${(props) => props.theme.showForm};
`;

export const DateTimeSelectDiv = styled("div")`
   height: ${(props) => props.theme.showForm};
   transition: height 200ms ease in out;
   width: 250px;
   height: 290px;
   overflow: hidden;
`;

export const GlassBackground = styled("div")`
   border-top-left-radius: 0px;
   border: 1px solid white;
   position: relative;
   border-radius: 20px;
   width: 100%;
   height: 100%;
   background: linear-gradient(
      to bottom right,
      rgb(255 255 255 / 80%) 100%,
      rgb(255 255 255 / 0%) 400%
   );
`;
