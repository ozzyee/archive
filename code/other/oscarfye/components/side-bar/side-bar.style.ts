import styled from "styled-components";
import { Component } from "./side-bar.component";

export const SideBar = styled(Component)`
  width: 20vw;
  height: 100vh;
  background-color: black;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  p {
    margin-top: 10px;
    margin-left: 20px;
    font-size: 16px;
    color: lightgray;
    font-family: "Montserrat", sans-serif;
  }
  hr {
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
  }
`;
