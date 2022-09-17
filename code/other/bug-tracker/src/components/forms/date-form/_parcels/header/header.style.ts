import styled from "styled-components";

export const HeaderDiv = styled("div")`
   height: 40px;
   width: 100%;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;

   display: flex;
   align-items: center;
   justify-content: center;
`;

export const ArrowHolder = styled("div")`
   width: 17.5%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const IconHolder = styled("div")`
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 100%;
   width: 40%;
   height: 40%;

   #icon {
      border: 1px solid white;
      border-radius: 100%;
      color: white;
      cursor: pointer;
   }

   .display-none {
      display: none;
   }
`;

export const DateHolder = styled("div")`
   width: 65%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 15px;
   color: white;
`;
