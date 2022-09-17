import styled from "styled-components";
import { Component } from "./artist-songs.component";

export const ArtistSongs = styled(Component)`
  padding: 20px;
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
    width: 70%;
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
    width: 60%;
    color: white;
    font-family: "Montserrat", sans-serif;
  }
  .time {
    color: white;
    width: 20%;
    display: flex;
    text-align: center;
  }
  .album-cover {
    margin-left: 3px;
    padding-top: 4px;
    img {
      height: 40px;
    }
  }
  .popularity {
    width: 20%;
  }

  .time-text {
    width: 100%;
  }

  .hide-content {
    transition: height 1s;
    height: 290px;
    overflow: hidden;
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
`;
