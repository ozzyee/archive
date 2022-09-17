import styled from "styled-components";
import { Component } from "./playlist-sidebat.component";

export const PlaylistSidebar = styled(Component)`
  position: relative;
  align-items: center;
  height: 55%;

  div.ex1 {
    height: 100%;
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    p{
      margin-left: 30px;
    }
  }

  .center {
    display: flex;
    justify-content: center;
  }

  .list {
    font-size: 14px;
    letter-spacing: normal;
    text-transform: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .scroll {
    text-overflow: ellipsis;
  }
`;
