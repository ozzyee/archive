import styled from "styled-components";
import { Component } from "./artist-container.component";

export const ArtistContainer = styled(Component)`
  width: 80%;
  overflow: hidden;
  height: 100%;

  .banner-image {
    display: block;
    object-fit: fill;
    width: 80%;
    image-rendering: auto;
    height: auto;
    position: absolute;
    top: -300px;
    position: fixed;
    z-index: -1;
  }

  .box {
    width: 100%;
    height: 100%;
    z-index: 950;
    /* position:absolute; */
    position: relative;
    z-index: 1;
  }
  .artist-name {
    height: 300px;
    color: white;
    border: 1px solid transparent;
    z-index: 0.5;
  background-color: rgba(0,0,0,0.2);
    h1 {
      font-size: 96px;
      font-weight: 900;
      line-height: 96px;
      letter-spacing: -0.04em;
      text-transform: none;
      font-family: "Montserrat", sans-serif;
      margin-top: 160px;
      margin-left: 20px;
    }
  }

  .text {
    height: 100%;
  }

  .artist-data {
    height: 100%;
    background: rgb(18, 18, 18);
  }
`;
