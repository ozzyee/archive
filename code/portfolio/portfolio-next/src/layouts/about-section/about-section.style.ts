import styled from "styled-components";
import colors from "../../configs/colors.json";

export const AboutSectionDiv = styled("section")`
   background-color: ${colors.primaryBackground};
   width: 100%;
   display: inline-block;
`;

export const LayoutWrapper = styled("div")`
   padding: 40px 70px 70px;
`;

export const FlexLayout = styled("div")`
   display: flex;
   flex-direction: column;

   @media (min-width: 840px) {
      flex-direction: row;
   }
`;

export const ImageWrapper = styled("div")`
   position: relative;
   height: 240px;
   width: 200px;

   display: flex;
   align-items: center;

   @media (min-width: 850px) {
      height: 100%;
      width: 320px;
   }

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

export const Image = styled("img")`
   width: 100%;
   height: 100%;
   border-radius: 0.8em;
   object-fit: contain;
`;

export const Overlay = styled.div`
   width: 100%;
   height: 100%;

   background-color: rgba(0, 0, 0, 0.5);

   position: absolute;
   border-radius: 11px;
   opacity: 1;

   display: flex;
   align-items: center;
   justify-content: center;
`;

export const AboutMeTextWrapper = styled("div")`
   width: 100%;
   display: inline-block;
   padding: 20px 0;

   .main-text-title {
      font-size: 1.3rem;
      margin-top: 5px;
   }

   .main-text-subtitle {
      font-size: 1.4rem;
   }

   @media (min-width: 340px) {
      .main-text-title {
         font-size: 1.4rem;
         margin-top: 5px;
      }

      .main-text-subtitle {
         font-size: 1.5rem;
      }
   }

   @media (min-width: 740px) {
      padding: 20px;
   }

   @media (min-width: 850px) {
      text-align: left;

      padding: 0 0 0 35px;

      .main-text-subtitle {
         font-size: 1.5rem;
         text-align: left;
      }

      .main-text {
         font-size: 1rem;
         margin-top: 5px;
         text-align: left;
      }

      .main-text-title {
         margin-top: 0;
         text-align: left;
      }

      .main-text:first-child {
         text-align: left;
      }
   }
`;

export const TextHolder = styled("div")`
   float: left;
   width: 100%;
   display: flex;
   padding: 0;
   align-items: center;

   p {
      padding: 8px 0;
      margin: 0;
   }
   @media (min-width: 750px) {
      width: 47%;
      justify-content: left;
      margin-left: 14px;
   }

   @media (min-width: 850px) {
      margin-left: 0;
   }
`;

export const MainTextArea = styled("main")`
   height: auto;
   padding-bottom: 20px;

   .text-area {
      margin-left: -4px;
   }
`;

export const CvUrlInput = styled.div`
   position: absolute;
   margin-top: 15px;
   background-color: #fff;
   padding: 0.5em 1em;
   font-size: 1.25em;
   border-radius: 1rem;
   box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
      0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

   ::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      bottom: 100%;
      left: 1.5em;
      border: 0.75rem solid transparent;
      border-top: none;

      border-bottom-color: #fff;
      filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
   }
`;

export const CvInput = styled.input``;

export const ReadMores = styled.button`
   float: right;
   margin-right: 54px;
   background-color: transparent;
   border-color: transparent;
   color: gray;
`;

export const ButtonsWrapper = styled.div`
   display: inline-block;
   width: 100%;
   margin-top: 2px;
   margin-top: 10px;

   button {
      margin-right: 10px;
      margin-top: 10px;
   }

   @media (min-width: 750px) {
      margin-left: 20px;

      button {
         margin-right: 10px;
         margin-top: 0;
      }
   }

   @media (min-width: 850px) {
      margin-left: 0;
   }
`;

export const LineBreak = styled.div`
   border-top: 1px solid lightgrey;
`;
