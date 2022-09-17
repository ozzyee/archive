import styled from "styled-components";
import Colors from "../../../configs/colors.json";
import Fonts from "../../../configs/fonts.json";

export const ProjectInfoFormDiv = styled("div")`
   width: 400px;
   height: 240px;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

export const CenterFormInputs = styled("div")`
   height: 220px;
   width: 100%;
   margin: 0;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

export const TitleInputHolder = styled("div")`
   width: 90%;
   margin-top: 8px;
   margin-left: auto;
   margin-right: auto;
`;

export const DescriptionHolder = styled("div")`
   width: 90%;
   margin-left: auto;
   margin-right: auto;
   margin-top: 10px;

   height: 75%;
`;

export const FormInput = styled("input")`
   width: 100%;
   height: 30px;
   border-radius: 20px;
   border: 2px solid white;
   font-size: 14px;
   background: transparent;

   &::placeholder {
      text-align: center;
   }

   :focus {
      outline: none;
      border: 2px solid ${Colors.primary};
      text-align: center;
      color: ${Colors.primary};
      font-family: ${Fonts.primary};
      font-size: 14px;
   }
`;

export const TextArea = styled("textarea")`
   width: 100%;
   height: 100%;
   border-radius: 20px;
   resize: none;
   padding: 10px;

   border: 2px solid white;
   background: transparent;

   font-family: ${Fonts.primary};
   font-size: 14px;

   &::placeholder {
      text-align: center;
   }

   :focus {
      outline: none;
      border: 2px solid ${Colors.primary};
      text-align: center;
      color: ${Colors.primary};
      font-family: ${Fonts.primary};
      font-size: 14px;
   }
`;
