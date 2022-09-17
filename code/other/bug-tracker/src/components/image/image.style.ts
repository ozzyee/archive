import styled from "styled-components";

export const ImageDiv = styled("div")`
   width: ${(props) => props.theme.width};
   height: ${(props) => props.theme.height};
   border-radius: ${(props) => props.theme.borderRadius};
   position: relative;

   img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: ${(props) => props.theme.borderRadius};
   }
`;

export const Overlay = styled("div")`
   position: absolute;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   width: ${(props) => props.theme.width};
   height: ${(props) => props.theme.height};
   border-radius: ${(props) => props.theme.borderRadius};
   background: rgba(0, 0, 0, 0.75);

   opacity: ${(props) => props.theme.showOverlay};
   transition: opacity 200ms;

   display: flex;
   align-items: center;
   justify-content: center;
`;
