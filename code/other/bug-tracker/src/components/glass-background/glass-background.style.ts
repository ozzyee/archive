import styled from "styled-components";

export const GlassBackgroundDiv = styled("div")`
   border-top-left-radius: 0px;
   border: ${(props) => props.theme.border};
   position: relative;
   border-radius: 20px;
   width: 100%;
   height: 100%;
   background: linear-gradient(
      to bottom right,
      rgb(255 255 255 / 80%) 0%,
      ${(props) => props.theme.glass}
   );
`;
