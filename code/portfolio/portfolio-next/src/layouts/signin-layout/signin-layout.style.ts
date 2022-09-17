import styled from "styled-components";

export const SignInLayoutDiv = styled("div")`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: black;
`;

export const BackgroundImg = styled("img")`
   width: 100vw;
   height: 100%;
   position: fixed;
   filter: blur(4px);
`;

export const Overlay = styled("div")`
   top: 0px;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.3);
   z-index: 2;
   position: absolute;
`;
