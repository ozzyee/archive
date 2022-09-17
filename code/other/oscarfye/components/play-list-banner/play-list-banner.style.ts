import styled from "styled-components";
import { Component } from "./play-list-banner.component";

export const PlayListBanner = styled(Component)`
  height: 320px;
  display: fixed;

  .play-list-image-container {
    width: 80%;
    padding: 56px;
    display: flex;
  }

  .play-text {
    width: 70%;
    float: right;
    text-align: left;
    height: 121px;
    margin-top: 109px;
    h1 {
      font-family: "Montserrat", sans-serif;
      color: white;
      padding: 0.08em 0px;
      font-size: 40px;
      line-height: 72px;
      font-weight: bold;
      visibility: visible;
    }
    h2{
      font-size: 13px;
      font-family: "Montserrat", sans-serif;
      color: white;
      margin-top: 8px;
    }
  }

  .dots-end{
    height:56px;
    overflow: hidden;
    letter-spacing: normal;
    text-transform: none;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .container {
    width: 30%;
  }

  .playlist-image {
    width: 100%;
    max-width: 232px;
    border-radius: 5px;
    height: auto;
  }
`;
