import styled from "styled-components";

export const ButtonsDiv = styled.button`
   padding: 0.3rem 1rem;
   border-radius: 22px;

   background-color: ${(props) => props.theme.backgroundColor};
   color: ${(props) => props.theme.textColor};
   border: 2px solid ${(props) => props.theme.borderColor};
   min-width: 150px;
   padding: 5px;
   font-size: 1em;
`;

export const ButtonWrapper = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
`;
