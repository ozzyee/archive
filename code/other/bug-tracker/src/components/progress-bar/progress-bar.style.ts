import styled from "styled-components";
import Colors from "../../configs/colors.json";

export const ProgressBarDiv = styled("div")`
   width: ${(props) => props.theme.width};
   height: ${(props) => props.theme.height};
   border-radius: 20px; ;
`;

export const PercentageLine = styled("div")`
   height: 100%;
   border-radius: ${(props) => props.theme.height};
   position: absolute;
   width: ${(props) => props.theme.percentage};
   background-color: ${Colors.doneColor};
`;
