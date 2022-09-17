import styled from "styled-components";

export const TextHolder = styled("div")`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
  text-align: center;
  border: 2px solid transparent;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 992px) {
    padding: 20px;
    text-align: left;
    padding-bottom: 0;
    padding-top: 0;
    padding-right: 0;
    padding-left: 13px;

    &:after {
      content: "";
      clear: both;
      display: table;
    }
  }

  h1 {
    font-size: 35px;
    font-family: "Oxygen", sans-serif;
    color: #238ed0;
    font-weight: normal;
    margin-top: -18px;
  }

  p {
    font-family: "Ubuntu", sans-serif;
  }
`;

export const TextWhiteHolder = styled("div")`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

  text-align: center;
  border: 2px solid transparent;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 992px) {
    padding: 20px;
    text-align: left;
    padding-bottom: 40px;
    padding-top: 0;
    padding-left: 0;
    padding-right: 50px;
    padding-bottom: 20px;
  }
  h1 {
    font-size: 35px;
    font-family: "Oxygen", sans-serif;
    color: #238ed0;
    font-weight: normal;
    margin-top: -18px;
  }

  p {
    font-family: "Ubuntu", sans-serif;
    color: #eef0f5;
  }
`;
