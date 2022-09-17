import styled from "styled-components";
import Colors from "../../../../configs/colors.json";
import Fonts from "../../../../configs/fonts.json";

export const ListBackground = styled("div")`
   position: relative;
   border: 1px solid white;
   position: relative;
   border-radius: 20px;
   width: 100%;
   height: 100%;
   background: linear-gradient(
      to bottom right,
      rgb(255 255 255 / 100%) 0%,
      rgb(255 255 255 / 0%) 200%
   );
`;

export const ListWrapper = styled("div")`
   height: ${(props) => props.theme.height};
   transition: height 200ms ease-in-out;
   position: relative;
   z-index: 1000;
`;

export const DropDownList = styled("div")`
   max-height: 152px;
   overflow: scroll;
   margin-top: 10px;
`;

export const ListItems = styled("div")`
   height: 30px;
   overflow: hidden;
   cursor: pointer;
   transition: height 350ms;

   &.hide-checkbox {
      height: 0px;
      overflow: hidden;
   }

   &:hover {
      text-decoration: 2px underline;
   }

   label {
      width: 100%;
      height: 100%;
   }

   input {
      display: none;
   }

   text-align: center;
   color: ${Colors.primary};
   font-family: ${Fonts.primary};
   font-size: 16px;

   display: flex;
   align-items: center;
   justify-content: center;
`;
