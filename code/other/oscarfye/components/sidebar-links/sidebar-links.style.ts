import styled from "styled-components";
import { Component } from "./sidebar-links.component";

export const SidebaLinks = styled(Component)`
  color: white;
  .icon__holder{
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

`;
