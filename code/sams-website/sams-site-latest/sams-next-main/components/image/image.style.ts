import styled from "styled-components";

export const ImageHolder = styled("div")`
  border-radius: 10px;
  height: 120px;
  width: 120px;
  padding: 5px;


  display: flex;
  align-items: center;
  overflow: hidden;

  justify-content: center;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 320px) {
    height: 180px;
    width: 180px;
    padding: 8px;
    padding-bottom: 7px;

  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    height: 180px;
    width: 180px;

  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    height: 200px;
    width: 200px;

  }
`;

export const ImageStyled = styled("img")`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
