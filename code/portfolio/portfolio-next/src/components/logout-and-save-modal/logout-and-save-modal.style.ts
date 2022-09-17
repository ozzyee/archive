import styled from "styled-components";

export const SaveModalDiv = styled("div")`
   position: fixed;
   border-color: red;
   width: 100vw;
   height: 100vh;
   z-index: 10;
   background-color: rgba(0, 0, 0, 0.4);

   backdrop-filter: blur(6px);
`;

export const ModalWrapper = styled("div")`
   position: absolute;
   width: 80vw;
   right: 0;

   height: 100vh;
   width: 100%;
   margin-top: 0px;

   @media (min-width: 850px) {
      width: 85vw;
      height: 100vh;
      float: right;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

export const Modal = styled("div")`
   width: 30%;
   height: 200px;
   border-radius: 22px;
   background-color: white;
   position: relative;
   background: linear-gradient(
      to bottom right,
      rgb(255 255 255 / 80%) 100%,
      rgb(255 255 255 / 0%) 400%
   );

   #close-icon {
      width: 25px;
      height: 25px;
      position: absolute;
      top: 10px;
      right: 10px;
      transition: all 80ms;

      :hover {
         color: #e56b6f;
      }

      :active {
         transform: scale(0.9);
      }
   }
`;

export const Title = styled("p")`
   text-align: center;
   font-size: 20px;
   color: #e56b6f;
`;

export const NoteText = styled("p")`
   text-align: center;
   font-size: ${({ fontSize }: { fontSize?: string }) => fontSize};
`;

export const ButtonsWrapper = styled("div")`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 45px;
`;

export const EditBtn = styled("button")`
   width: 100px;
   padding: 5px 15px;
   margin: 0 10px;

   background-color: ${({ color }) => color};
   color: white;
   border-color: transparent;
   border-radius: 22px;

   &:active {
      transform: scale(0.95);
   }
`;
