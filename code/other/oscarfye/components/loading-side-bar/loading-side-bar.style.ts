import styled from "styled-components";
import { Component } from "./loading-side-bar.component";

export const LoadingSidebar = styled(Component)`
  width: 20vw;
  height: 100vh;
  background-color: black;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  color: white;
  .holder{
    width: 90%;
  }
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

  .icon__holder {
    padding: 5px;
  }
  .icon {
    padding-left: 24px;
  }
  .text {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: normal;
    text-transform: none;
    padding-left: 5px;
  }

  .sidebar__logo {
    margin-right: auto;
    object-fit: contain;
    height: 70px;
    margin-top: 1px;
    margin-left: 10px;
  }

  .shinny {
    background: white;
    margin: 10px 0px;
    position: relative;
    overflow: hidden;
  }

  .shinny::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    
    background: black;
    height: 100%;
    /* transform:skew(5deg); */
    animation: shine infinite 1s ease-in-out;
  }


  .scroll {
    margin-top: 25px;
    margin-right: 30px;
    opacity: 5%;
  }

  @keyframes shine {
    from {
      transform: skew(0deg) translateX(0%);
    }

    to {
      transform: skew(0deg) translateX(100%);
    }
  }

  .info__text_one {
    /* width: 200px; */
    height: 9px;
    width: random(30) + px;
    border-radius: 4px;
    margin-left: 21px;
  }
`;
