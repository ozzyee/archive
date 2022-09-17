import styled from "styled-components";
import colors from "../../configs/colors.json";

export const Header = styled.h1`
   font-size: 2.6rem;
   min-width: 50px;

   color: white;
   margin: ${(props) => props.theme.margin};
   padding: ${(props) => props.theme.padding};
   font-weight: ${(props) => props.theme.fontWeight};
   text-align: ${(props) => props.theme.textAlign};
   width: ${(props) => props.theme.width};

   span {
      color: ${colors.primary};
   }
`;

export const SubHeader = styled.h2`
   font-size: 2.3rem;

   min-width: 50px;
   margin: 5px 0;
   font-weight: bold;
   font-family: Open-Sans, Helvetica, Sans-Serif;
   color: ${(props) => props.theme.color};
   width: ${(props) => props.theme.width};

   @media (min-width: 850px) {
      font-size: 2.1rem;

   }
`;

export const ContentHeader = styled.h3`
   min-width: 50px;

   font-size: 1.2rem;
   margin: ${(props) => props.theme.margin};
   font-weight: normal;
   font-family: Open-Sans, Helvetica, Sans-Serif;
   width: ${(props) => props.theme.width};
`;

export const Custom = styled.p`
   font-size: ${(props) => props.theme.fontSize};
   color: ${(props) => props.theme.color};
   margin: ${(props) => props.theme.margin};
   padding: ${(props) => props.theme.padding};
   font-weight: ${(props) => props.theme.fontWeight};
   text-align: ${(props) => props.theme.textAlign};
   width: ${(props) => props.theme.width};
   height: ${(props) => props.theme.height};

   border-top: 2.2px solid transparent;
   border-bottom: 2.2px solid transparent;
   border-left: 2px solid transparent;
   font-family: Open-Sans, Helvetica, Sans-Serif;
`;
