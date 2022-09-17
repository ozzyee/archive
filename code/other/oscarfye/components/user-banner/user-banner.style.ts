import styled from "styled-components";
import { Component } from "./user-banner.component";

export const UserBanner = styled(Component)`
  height: 300px;
  display: fixed;
  display:flex;
  width: 100%;
  .container {
    margin-top: 65px;
    padding-left:1px;    
  }

  .user__banner__container {
    display: flex;

    .user__banner__image__container {
      width: 240px;
      padding-left: 2%;
      margin-left: 10px;
      .user__banner__large__image {
        border-radius: 100%;
        width: 100%;
      }
    }

    .use__banner__text {
      padding-left: 1%;
      display: inline-block;
      h2 {
        font-size: 12px;
        margin-top: 4px;
        margin-top: 70px;
        font-family: "Montserrat", sans-serif;
        color: white;
      }
      h1 {
        padding: 0.08em 0px;
        font-size: 96px;
        line-height: 96px;
        visibility: visible;
        margin-top: 10px;
        font-family: "Montserrat", sans-serif;
        color: white;
      }
    }
  }
`;
