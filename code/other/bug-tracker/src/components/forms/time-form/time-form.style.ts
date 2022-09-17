import styled from "styled-components";

export const TimeDiv = styled("div")`
   width: 100%;
   height: 220px;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: margin-top 400ms;
   margin-top: ${(props) => props.theme.marginHeight};
`;

export const wrapperDiv = styled("div")`
   position: absolute;
   z-index: ${(props) => props.theme.zIndex};
`;

export const TimeWrapper = styled("div")`
   display: flex;
`;

export const DisplayFlex = styled("div")`
   display: flex;
   align-items: center;
   justify-content: center;
`;
