import styled from "styled-components";
import { Component } from "./play-list-name.component";

export const PlayListName = styled(Component)`
  display: flex;
  height: 70px;
  display: flex;
  width: 50%;
  justify-content: center;

  .play-icon {
    color: white;
    text-align: center;
    vertical-align: middle;
    font-size: 40px;
    color: #a5e65a;
    margin-top: 16px;
    padding-right: 10px;
  }
  .play-name {
    text-align: center;
    margin-top: 20px;
  }
  h2 {
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    color: white;
    padding-top: 1px ;
    vertical-align: middle;
  }

  .name {
    display: flex;
    margin: left 10px;
    margin-left: 10%;
  }
`;
