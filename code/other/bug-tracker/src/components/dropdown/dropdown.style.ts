import styled from "styled-components";

export const DropdownDiv = styled("div")`
   width: ${(props) => props.theme.width};
   margin-bottom: 20px;
   transition: height 250ms;
   overflow: hidden;
   position: absolute;
`;

export const DropDownText = styled("div")`
   text-align: center;
`;

export const Space = styled("div")`
   height: 5px;
`;
