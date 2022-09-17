import styled from "styled-components";

export const DateTimePickerDiv = styled("div")`
   width: 100%;
   margin-top: -40px;
   transition: opacity 300ms ease-in-out;
   opacity: ${(props) => props.theme.opacity};
`;

export const DateTimeHolder = styled("div")`
   height: 230px;
`;

export const DateHolder = styled("div")`
   &.display-none {
      display: none;
   }

   transform: scale(1);
   display: ${(props) => props.theme.hide};
   transition: transform 300ms;
   transform: ${(props) => props.theme.scale};

   @keyframes zoom-up {
      from {
         transform: scale(0.8);
      }
      to {
         transform: scale(1);
      }
   }

   @keyframes zoom-down {
      from {
         transform: scale(1);
      }
      to {
         transform: scale(0.8);
      }
   }

   &.scale-cal-down {
      animation-duration: 250ms;
      animation-name: zoom-down;
   }
   &.scale-cal-up {
      animation-duration: 300ms;
      animation-name: zoom-up;
   }
`;

export const TimeHolder = styled("div")`
   height: 100%;

   display: flex;
   align-items: center;
   justify-content: center;
`;

export const TimeButtonHolder = styled("div")`
   height: 50px;
   margin-top: -27px;
   display: flex;
   align-items: center;
   justify-content: center;

   cursor: pointer;

   position: relative;
   z-index: 1;

   .icon {
      transform: scale(0.9);
      height: 20px;
   }
`;
