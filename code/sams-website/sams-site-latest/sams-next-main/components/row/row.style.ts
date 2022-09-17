import styled from "styled-components";

export const RowDiv = styled("div")`
  display: table;
  clear: both;
  /* box-sizing: border-box; */

  @media (min-width: 768px) {
    display: flex;
    width: 65%;
  }

  align-items: center;
  justify-content: center;
`;
