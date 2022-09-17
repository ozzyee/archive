import styled from "styled-components";

export const MobileNavDiv = styled("div")`
  position: sticky;
  top: 0;
  background-color: black;

  z-index: 1000;
  @media (min-width: 1000px) {
    display: none;
  }

  #show {
    background-color: black;
    button {
      background-color: transparent;
      color: #238ed0;
      border: 0px;
    }
  }

  #hide {
    background-color: black;
    button {
      background-color: transparent;
      color: #238ed0;
      border: 0px;
    }
  }

  #nav__list {
    background-color: black;
    height: 100%;
  }

  #opacity {
    text-align: center;
    background-color: black;
    width: 100vw;
    /* padding-bottom: 20px; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    top: 0;
    transition: opacity 700ms;
    li {
      font-family: "Oxygen", sans-serif;
      text-align: center;

      color: #238ed0;
      display: block;
      font-size: 22px;
      padding: 10px;
    }

    .padding__this {
      padding-bottom: 100px;
      border: 2px solid transparent;
    }
    .padding__this__bottom {
      padding-bottom: 200px;
      border: 2px solid transparent;
    }
  }
`;
