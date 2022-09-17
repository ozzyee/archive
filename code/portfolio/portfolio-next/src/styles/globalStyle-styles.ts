import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    width: 100vw;
    font-size:1em;
  }
`;

export const SectionHolder = styled("div")`
   width: 100vw;
   position: absolute;
   top: 0;

   @media (min-width: 1000px) {
      width: 85vw;
      height: 100vh;
      right: 0;
   }
`;

export const LayoutWrapper = styled("div")`
   padding: 30px 30px;
   @media (min-width: 850px) {
      padding: 40px 70px 70px;
   }
`;

export const TitleWrapper = styled("div")`
   display: flex;
   flex-direction: column;
   margin: 0 0 1.5em 0;

   @media (min-width: 850px) {
      text-align: left;
   }
`;

export const SkillsProjectsHolders = styled("div")`
   grid-area: skillsHolder;
   margin: 0rem 0;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: row;
   flex-wrap: wrap;

   @media (min-width: 850px) {
      justify-content: left;
   }
`;
