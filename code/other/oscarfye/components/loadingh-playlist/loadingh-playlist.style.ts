import styled from "styled-components";
import { Component } from "./loadingh-playlist.component";

export const LoadingPlaylist = styled(Component)`
  width: 100%;
  height: 400px;
  .play{
    border: 1px solid blue ;
    /* display: flex; */
  }
  .following__box-loading{
    width: 186px;
    padding: 18px;
    border-radius: 2%;
    background-color: #181818;  
  }

  .image-load{
    width: 186px;
    height: 186px;
    border-radius: 5px;
    background-color: white;
    opacity: 0.09;
  }
`;
