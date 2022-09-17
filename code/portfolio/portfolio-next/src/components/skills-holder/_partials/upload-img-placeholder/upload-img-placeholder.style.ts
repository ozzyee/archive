import styled from "styled-components";
import colors from "../../../../configs/colors.json";
import { TUploadImgStyle } from "./upload-img-placeholder.definition";

export const UploadImgPlaceholderDiv = styled.div<TUploadImgStyle>`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;

   position: ${({ position }) => position};

   .upload-btn {
      padding: 0;
      background-color: transparent;
      border-color: transparent;
   }

   svg {
      transition: all 100ms;
      color: ${colors.primary};
      width: 50px;
      height: 50px;
      z-index: 2;

      :active {
         transform: scale(0.92);
      }
   }

   #upload-edit-btn {
      transition: all 120ms;
      opacity: 0;

      svg {
         :hover {
            transition: all 100ms;
            color: white;
         }
      }
   }

   #overlay {
      transition: all 120ms;
      opacity: 0;
   }

   :hover {
      #overlay,
      #upload-edit-btn {
         opacity: 1;
      }
   }
`;

export const Overlay = styled.div`
   width: 220px;
   height: 80%;

   background-color: rgba(0, 0, 0, 0.5);

   position: absolute;
   border-radius: 11px;
   opacity: 0;
`;
