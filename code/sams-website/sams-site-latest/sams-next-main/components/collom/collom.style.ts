import styled from "styled-components";

export const CollomDiv = styled("div")`
  float: left;
  width: 100%;
  padding: 10px;
  height: 300px;
  /* align-items: center;
  justify-content: center;
  display: flex; */

  margin-top: 1px;
  position: static;


  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: 35%;
  }
`;

export const CollomBigDiv = styled("div")`
  float: left;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  .center {
  }

  .first__paragraph {
    width: 50%;
    float: left;
    position: relative;
    height: 100%;
    display: flex;
  }

  .show-more-wrapper {
    height: 0;
    overflow: hidden;
    transition: height 300ms;
  }

  .second__paragraph {
    position: relative;
  }

  @media (min-width: 768px) {
  }
`;

// @media (min-width: 576px) { ... }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }
