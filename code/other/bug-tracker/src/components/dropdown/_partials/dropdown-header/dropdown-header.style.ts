import styled from "styled-components";
import Colors from "../../../../configs/colors.json";
import Fonts from "../../../../configs/fonts.json";

export const DropDownTitle = styled("div")`
   border-radius: 20px;
   display: flex;
   align-items: center;
   cursor: pointer;
   padding-top: 5px;
   padding-bottom: 5px;

   /* height: 38px; */

   color: ${Colors.primary};
   font-family: ${Fonts.primary};

   transition: height 2s;
`;

export const CheckBoxTitle = styled("div")`
   position: relative;
   z-index: 100;
   margin-left: auto;
   margin-right: auto;
   /* display: flex;
   align-items: center;
   justify-content: center; */
`;

export const MapWrapper = styled("div")`
   width: 92%;
   height: 35px;
   display: flex;
   flex-wrap: wrap;
   overflow: scroll;
`;

export const Wrapper = styled("div")`
   /* width: fit-content; */
`;

export const TextHolder = styled("div")`
   margin-right: 0;
   &.display-non {
      display: none;
      opacity: 0;
   }

   &.display-block {
      opacity: 1;
      display: block;
   }
`;

export const ItemWrapper = styled("div")`
   padding-left: 4px;
   padding-right: 4px;
`;

export const ItemHolder = styled("div")`
   border: 2px solid ${Colors.primary};
   border-radius: 10px;
   padding: 2px;
   padding-left: 6px;
   padding-right: 6px;
   margin-right: 4px;
   margin-top: 4px;
   margin-bottom: 4px;
   overflow: hidden;
   position: relative;
   z-index: 200;

   height: 26px;
   display: flex;
   align-items: center;
   justify-content: center;

   &.open-animation {
      animation: expandDiv 500ms;
   }

   &.close-animation {
      animation: closeDiv 500ms;
   }

   @keyframes expandDiv {
      from {
         width: 10%;
      }
      to {
         width: 100%;
      }
   }

   @keyframes closeDiv {
      from {
         width: 100%;
      }
      to {
         width: 10%;
         opacity: 0;
      }
   }
`;

export const ItemTextHolder = styled("p")`
   margin-bottom: 0px;
   margin-top: 0px;
   margin-right: 0px;
   overflow: hidden;
   width: 100%;
`;

export const RemoveItemDiv = styled("div")`
   width: 16px;
   height: 100%;
   margin-left: 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: color 100ms;
   transform: scale(1);

   :hover {
      color: ${Colors.close};
   }
   :active {
      transform: scale(0.8);
   }
`;

export const RemoveOverlay = styled("div")`
   position: absolute;
   width: 100%;
   height: 100%;
`;

export const IconHolder = styled("div")`
   width: 16px;
   height: 16px;
   position: absolute;
   right: 10px;
   z-index: 1;
   margin-top: auto;
   margin-bottom: auto;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Overlay = styled("div")`
   text-align: center;
   width: 100%;
   height: 100%;
   position: absolute;
   border-radius: 20px;
   z-index: 10;
`;
