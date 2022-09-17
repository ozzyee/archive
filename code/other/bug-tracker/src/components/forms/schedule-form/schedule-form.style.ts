import styled from "styled-components";
import colors from "../../../configs/colors.json";
import font from "../../../configs/fonts.json";

export const ScheduleFormDiv = styled("div")`
   width: 300px;
   height: 300px;

   position: relative;
`;

export const HeaderHolder = styled("div")`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 20px;
`;

export const FormHolder = styled("div")`
   display: flex;
   justify-content: center;

   height: 60px;
`;

export const FormInput = styled("input")`
   margin-top: 5px;
   margin-bottom: 5px;

   width: 250px;
   height: 30px;
   border-radius: 20px;
   border: 2px solid white;
   background: linear-gradient(
      to bottom right,
      rgb(255 255 255 / 80%) 0%,
      rgb(255 255 255 / 0%) 200%
   );

   margin-top: auto;
   margin-bottom: auto;

   text-align: center;
   font-size: 15px;
   font-family: ${font.primary};
   color: ${colors.primary};

   :focus {
      outline: none;
      background: transparent;

      ::placeholder {
         color: transparent;
      }
   }

   ::placeholder {
      color: ${colors.primary};
   }
`;
