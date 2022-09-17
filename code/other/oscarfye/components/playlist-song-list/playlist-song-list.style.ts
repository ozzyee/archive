import styled from "styled-components";
import { Component } from "./playlist-song-list.component";

export const PlayListSongList = styled(Component)`
  padding: 20px;
  padding-bottom: 150px;
  
  .big-play-icon{
    font-size: 60px;
    vertical-align: middle;
    color: #a5e65a;
  }

  .big-more-icon{
    font-size: 30px;
    vertical-align: middle;
    color: #A1A2A3;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.04em;
    text-transform: none;
    font-family: "Montserrat", sans-serif;
    color: white;
    padding: 20px;
  }

  .name-text {
    margin: 10px;
    font-size: 14px;
    color: white;
    font-family: "Montserrat", sans-serif;
    width: 40%;
    margin-left: 1px;
    padding-left: 10px;
    padding-top: 3px;
    height: 20px;
    margin-bottom: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-transform: none;
  }

  .center {
    text-align: center;
  }

  .song-list {
    display: flex;
    padding: 5px;
    padding-left: 12px;
    border-radius: 5px;
  }
  .song-list:hover {
    background-color: #2a2a2a;
    border-radius: 5px;
    transition: background-color 200ms;
    cursor: pointer;
  }

  .name {
    width: 30%;
    color: white;
    padding-left: 10px;
    font-family: "Montserrat", sans-serif;
  }
  .time {
    color: white;
    width: 20%;
  }
  .album-cover {
    margin-left: 3px;
    padding-top: 4px;
    img {
      height: 40px;
    }
  }
  .popularity {
    width: 15%;
  }

  .time-text {
    width: 100%;
  }

  .hide-content {
    transition: height 1s;
  }
  .button {
    margin-left: 17px;
    background-color: transparent;
    color: #b8b8b8;
    font-family: "Montserrat", sans-serif;
    border: none;
    outline: 0 !important;
  }

  .button:hover {
    color: white;
    transition: color 200ms;
    border: none;
    outline: 0 !important;
    cursor: pointer;
  }

  .play-button {
    display: none;
    padding-top: 2px;
    color: white;
    margin-left: -8px;
    transition: 0.4s ease-in-out;
  }
  .song-list {
    opacity: 0.8;
  }
  .song-list:hover {
    opacity: 1;
    transition: all 0.3s ease-in-out;
    .number-count {
      display: none;
    }
    .play-button {
      display: block;
      padding-top: 2px;

      transition: display 0.4s;
    }
    .album-cover {
      margin-left: 2px;
    }
  }

  .number {
    margin: 10px;
    width: 15px;
    font-size: 14px;
    color: white;
    font-family: "Montserrat", sans-serif;
  }

  .explicit-icon {
    font-size: 16px;
    margin-top: -13px;
    margin-bottom: 0;
    margin-left: 9px;
  }
  .text-holder {
    display: flex;
    padding-left: 12px;
    color: #CFCFCF;
  }
  .song-title {
    width: 30%;
    margin-left: 19px;
    font-size: 14px;
    color: white;
    font-family: "Montserrat", sans-serif;
  }
  .album-title {
    width: 20%;
    font-size: 14px;
    color: white;
    font-family: "Montserrat", sans-serif;
  }
  .song-number {
    text-align: center;
    margin: 9px;
    font-size: 14px;
    margin-top: 4px;
    color: white;
    font-family: "Montserrat", sans-serif;
  }
  .date-added {
    width: 20%;
  }
  .date-added-date {
    width: 20%;
    font-size: 14px;
    color: white;
    text-align: center;
    font-family: "Montserrat", sans-serif;
  }

  .artist-explicit {
    display: flex;
  }
  .explicit {
    height: 16px;
    margin-left: -6px;
}
  }
  .artist-name {
    margin-top: 0;
  }
  .name-text-artist {
  }

  .album {
    width: 20%;
  }
  .album-name {
    font-size: 14px;
    color: white;
    font-family: "Montserrat", sans-serif;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-transform: none;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
  .date-added {
    font-size: 14px;
    color: white;
    font-family: "Montserrat", sans-serif;
  }
  .time-text {
    font-size: 14px;
    color: white;
    font-family: "Montserrat", sans-serif;
  }
  .image-holder {
    padding-top: 4px;
    width: 40px;
  }
  .time-holder {
    width: 20%;
    font-size: 14px;
    color: white;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    margin-left: -3px;
    margin-top: 3px;
  }
  hr{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1px;
    background-color: #2B2D2E;
  }
`;

// font-size: 14px;
// color: white;
// font-family: "Montserrat", sans-serif;
