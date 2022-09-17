import styled from "styled-components";
import {
   TInputStyledProps,
   TLableStyledProps,
} from "./signin-model.definition";

export const SignInModelDiv = styled("div")`
   position: relative;
   z-index: 10;

   width: 260px;
   border-radius: 22px;
`;

export const Title = styled("h1")`
   width: 100%;
   text-align: center;
   color: white;
   font-weight: normal;
`;

export const inputHolder = styled("div")`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

export const Input = styled.input<TInputStyledProps>`
   width: 80%;
   height: 24px;
   background-color: transparent;

   padding-left: 12px;
   border: 0;
   border-bottom: 1px solid white;
   margin-top: 30px;
   color: white;

   :focus {
      outline: none;

      + label {
         top: 10px;
         font-size: 12px;
      }
   }
`;

export const Label = styled.label<TLableStyledProps>`
   position: absolute;
   top: ${({ height }) => height};
   color: white;
   transition: all 100ms;
   left: 30px;
   font-size: ${({ textSize }) => textSize};
`;

export const InputWrapper = styled("div")`
   position: relative;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const SubmitBtn = styled("button")`
   margin-top: 30px;
   width: 85%;
   height: 30px;
   border-radius: 8px;
   border-color: transparent;
   font-size: 15px;
   transition: all 50ms;
   cursor: pointer;

   :hover {
      background-color: #0c2138;
      color: white;
   }

   :active {
      transform: scale(0.9);
   }
`;
