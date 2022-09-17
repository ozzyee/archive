import styled from "styled-components";
import { Component } from "./play-list-header.component";

export const ListHeader = styled(Component)`
  #mynav {
    position: fixed;
  }

  #background_collor {
    background-color: #105460;
    height: 72px;
    width: 80%;
    position: fixed;
    opacity: 0;
    z-index: 500;
  }

  .user-on-scroll {
    height: 60px;
    p {
      font-size: 24px;
      margin-top: 20px;
      margin-left: 12%;
      font-family: "Montserrat", sans-serif;
      color: white;
    }
  }

  //imported font
  //font-family: 'Montserrat', sans-serif;

  .navbar {
    position: fixed;
    width: 80%;
    top: 0;
    height: 60px;
    background-color: transparent;
    z-index: 10000;
  }

  header {
    display: flex;
    .nav__Arrow__Container {
      display: flex;
      padding: 10px;

      //arrows for navigation
      .nav__ArrowIcon__Left {
        padding-left: 12px;
        color: white;
        text-align: center;
        margin-top: 12px;
        height: 32px;
      }
      .nav__ArrowIcon__Right {
        padding-left: 15px;
        color: white;
        text-align: center;
        margin-top: 12px;
        height: 32px;
      }

      //nav arrows font size and hover
      .nav__ArrowIcon__Right,
      .nav__ArrowIcon__Left {
        .Font_size_large {
          font-size: 28px;
          border-radius: 400px;
          background-color: black;
          :hover {
            background-color: #282828;
            transition: background-color 0.3s ease;
          }
        }
      }
    }

    .menu__container {
      width: 100%;
      position: relative;
      .user__contaniner {
        width: 140px;
        float: right;
        padding: 20px;
        .user__button {
          background-color: #050505;
          border-radius: 23px;
          height: 32px;
          min-width: 32px;
          border: 0;
          cursor: pointer;
          color: #fff;
          padding: 2px;
          padding-right: 10px;
          border: none;
          outline: none;
          display: flex;

          :hover {
            background-color: #282828;
            transition: background-color 0.2s ease;
          }
          .user__image {
            height: 28px;
            border-radius: 50px;
          }

          .user__name {
            font-size: 14px;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: normal;
            text-transform: none;
            margin-left: 8px;
            font-family: "Montserrat", sans-serif;
          }
        }
        .side__nav {
          background-color: #282828;
          border-radius: 5px;
          margin-top: 10px;
          box-shadow: 2px 2px;
          position: absolute;
          padding: 16px;

          ul {
            padding-inline-start: 0;

            a {
              text-decoration: none;
            }

            li {
              padding: 10px;
              list-style-type: none;
              text-align: left;
              margin-left: 0;
              font-family: "Montserrat", sans-serif;
              color: white;
              :hover {
                background-color: #404040;
                display: flex;
                border-radius: 5px;
                box-shadow: 1px 1px;
                transition: background-color 0.2s ease;
              }
            }
          }

          hr {
            border: 1px solid #404040;
            width: 100%;
            margin: 10px auto;
          }
        }
      }
    }
  }
`;
