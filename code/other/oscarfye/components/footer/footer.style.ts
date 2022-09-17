import styled from "styled-components";
import { Component } from "./footer.component";

export const Footer = styled(Component)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  padding: 20px;
  height: 65px;
  width: 100%;
  background-color: #282828;
  z-index: 2;
  display: flex;
    align-items: center;
    justify-content: center;

  .player {
    width: 80%;
    font-family: "Montserrat", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rswp__active {
    img {
      border: 1px solid green;
      display: none;
    }
  }
`;
