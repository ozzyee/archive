import styled from "styled-components";
import colors from "../../configs/colors.json";
import { TStyleOverlay } from "./skills-holder.definition";

export const SkillsHolderDiv = styled.div`
   border: 1px solid #c4c4c4;
   border-radius: 11px;
   float: left;
   margin: 0.46rem;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   position: relative;

   background-color: white;

   margin-left: auto;
   margin-right: auto;
   width: 100%;
   height: 16rem;

   @media (min-width: 750px) {
      width: 18.6rem;
      height: 16em;
      margin: 8px;
   }

   @media (min-width: 850px) {
      margin-left: 0;
      margin-right: auto;
      width: 16rem;
      height: 15em;
      margin: 8px;
   }

   @media (min-width: 1000px) {
      width: 18.6rem;
   }

   #add-img-icon {
      color: ${colors.primary};
      width: 50px;
      height: 50px;

      :active {
         transform: scale(0.92);
      }
   }
`;

export const ImgHolder = styled.div`
   padding: 2em;
   display: flex;
   align-items: center;
   justify-content: center;

   position: relative;

   :hover {
      #image-overlay {
         transition: all 200ms;
         opacity: 1;
      }
   }
`;

export const UploadImgOverlay = styled.div<TStyleOverlay>`
   top: 0px;
   width: 14.4rem;

   background-color: rgba(0, 0, 0, 0.35);
   z-index: 2;
   position: absolute;
   border-radius: 11px;

   transition: background-color 120ms;
   justify-content: center;
   align-items: center;
   display: flex;
   opacity: 0;

   opacity: ${({ opacity }) => opacity};

   svg {
      width: 50px;
      height: 50px;
      color: white;
      transition: all 150ms;
      cursor: pointer;

      :hover {
         color: ${colors.primary};
      }

      :active {
         transform: scale(0.92);
      }
   }
`;

export const Img = styled.img`
   height: 5rem;
`;

export const TextHolder = styled.div`
   /* margin: 0 1rem; */

   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px;
   width: 100%;
   height: 24%;

   .add-textarea {
      margin-bottom: 12px;
   }

   p {
      text-align: center;
   }

   textarea {
      text-align: center;
      /* margin-bottom: 10px; */
   }
`;

export const ImageUploadInput = styled.input`
   display: none;
`;

export const ImageUploadBtn = styled.button`
   background-color: transparent;
   border-color: transparent;
`;

export const UploadImageWrapper = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
`;

export const TextInput = styled.textarea`
   width: 80%;
   height: 100%;
   display: inline-block;
   text-align: center;
   font-family: oxygen;
   font-size: 0.95rem;
   resize: none;
   border-color: transparent;
   overflow: hidden;
   background-color: transparent;
`;
