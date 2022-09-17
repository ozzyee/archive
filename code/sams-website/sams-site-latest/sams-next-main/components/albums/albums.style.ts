import styled from "styled-components";
import { ImageHolder } from "../image/image.style";

export const Container = styled("div")``;

export const Wrapper = styled("div")`
  text-align: center;
  max-width: 120px;

  .color__blue {
    color: #238ed0;

  }

  a {
    :hover {
      /* border: 2px solid red; */
      .color__blue {
        opacity: 1;
      }
    }
  }

  @media (min-width: 320px) {
    text-align: left;
    margin: 0;
    max-width: 180px;
  }

  @media (min-width: 374px) {
    max-width: 360px;
  }

  @media (min-width: 642px) {
    max-width: 544px;
  }

  @media (min-width: 992px) {
    max-width: 800px;
  }

  ${ImageHolder} {
    display: inline-block;
  }
`;

export const Holder = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 26px;

  margin-top: -3px;

  @media (min-width: 642px) {
    padding-bottom: 6px;
  }
`;

export const Div = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Div
