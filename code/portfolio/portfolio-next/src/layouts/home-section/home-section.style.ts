import styled from "styled-components";
import colors from "../../configs/colors.json";

export const HomeSectionDiv = styled.div`
   height: 100vh;
   width: 100%;
   margin-top: 0px;
   @media (min-width: 1000px) {
      width: 85vw;
      height: 100vh;
      float: right;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

export const BackgroundImgHolder = styled("div")`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   
   .bg-img {
      object-fit: cover;
   }
`;

export const BackgroundImage = styled("img")`
   object-fit: cover;
   height: 100%;
   width: 100%;
`;

export const ImageOverlay = styled("div")`
   top: 0px;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.35);
   z-index: 2;
   position: absolute;
`;

export const UsersNameAndImageWrapper = styled("div")`
   position: absolute;
   top: 0;
   z-index: 3;
   display: flex;
   align-items: center;
   justify-content: center;
   .title {
      font-size: 2.2rem;
   }
   .typing-txt {
      font-size: 1.2rem;
   }
   #type-weighter-text {
      float: left;
      font-size: 1.2rem;
   }
   @media (min-width: 850px) {
      .title {
         font-size: 2.6rem;
      }
      .typing-txt {
         font-size: 1.6rem;
      }
      #type-weighter-text {
         float: left;
         font-size: 1.6rem;
      }
   }
`;

export const UserNameAndImage = styled("div")`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   height: 100vh;
   width: 100vw;
   position: relative;
   @media (min-width: 1000px) {
      width: 100%;
   }
`;

export const UserImageWrapper = styled("div")`
   width: 8rem;
   height: 8rem;
   display: flex;
   align-items: center;
   justify-content: center;
   @media (min-width: 850px) {
      width: 10rem;
      height: 10rem;
   }
`;

export const UserImage = styled("img")`
   object-fit: scale-down;
   height: 100%;
   border-radius: 50%;
`;

export const TextWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0;
   padding: 0;
   .Typewriter__wrapper,
   .Typewriter__cursor {
      font-size: 22px !important;
      font-weight: normal;
      font-family: Open-Sans, Helvetica, Sans-Serif;
      margin: 10px 0 0 0;
      padding: 0;
      color: white;
      margin-top: auto;
      margin-bottom: auto;
      width: 0%;
      overflow: hidden;
      white-space: nowrap;
   }
`;
