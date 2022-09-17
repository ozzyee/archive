import styled from "styled-components";
import colors from "../../configs/colors.json";

export const SkillsSectionDiv = styled("section")`
   background-color: ${colors.secondaryBackground};
   width: 100%;
`;

export const SkillsTextWrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin: 0 0 1.5em 0;

   textarea {
      margin-top: 10px;
      width: 98%;
   }

   p {
      margin-top: 20px;
   }
`;

export const MainTextArea = styled.main`
   margin: 15px 0px 0px -21px;
   height: auto;
   width: 100%;
   border: 2px solid red;
`;
