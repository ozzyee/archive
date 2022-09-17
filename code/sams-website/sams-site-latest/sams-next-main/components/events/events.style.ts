import styled from "styled-components";

export const DivHolder = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  .map__holder {
    text-align: center;
    height: 347px;
    overflow: scroll;
    padding: 10px;
    padding-top: 0;
  }

  @media (max-width: 375px) {
  }
`;

export const DateContainer = styled("div")`
  height: 60px;
  background-color: #333533;
  border-radius: 10px;
  display: flex;
  width: 100%;
  :hover {
    box-shadow: 0 0 2pt 1pt #333533;
    transition: box-shadow ease-in 200ms;
  }

  @media (max-width: 320px) {
  }
`;

export const DateHolder = styled("div")`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: #242423;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: 320px) {
    width: 60px;
    height: 60px;
  }
`;

export const Location = styled("div")`
  width: 55%;
  display: flex;
  align-items: color;
  justify-content: center;
  height: 100%;
  p {
    color: #d8dde9;
    font-family: "Oxygen", sans-serif;
    font-size: 20px;

    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }

  @media (max-width: 320px) {
    width: 50%;
    display: flex;
    align-items: color;
    justify-content: center;
    height: 100%;
    p {
      color: #d8dde9;
      font-family: "Oxygen", sans-serif;
      font-size: 15px;

      width: 80%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
    }
  }
`;

export const Date = styled("div")`
  width: 100%;
  display: relative;
  text-align: center;

  h2 {
    text-align: center;
    color: #d8dde9;
    font-family: "Oxygen", sans-serif;
    margin-top: -6px;
    font-size: 20px;
    font-weight: normal;
  }

  p {
    text-align: center;
    color: #d8dde9;
    font-family: "Oxygen", sans-serif;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 0;
  }

  @media (max-width: 320px) {
    p {
      text-align: center;
      color: #d8dde9;
      font-family: "Oxygen", sans-serif;
      font-size: 12px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

export const ButtonSmall = styled("div")`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BuyMe = styled("button")`
  border-radius: 100px;
  font-family: "Oxygen", sans-serif;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  outline: 0;
  border: 0;
  background-color: #242423;
  color: #d8dde9;
  cursor: pointer;

  :hover {
    color: white;
    background-color: #238ed0;

    transition: background-color 200ms;
  }
`;

export const Div = styled("div")`
  width: 350px;

  @media (max-width: 320px) {
    width: 250px;
  }

  @media (max-width: 375px) {
    width: 300px;
  }

  @media (max-width: 425px) {
  }
  //425

  h1 {
    text-align: center;
    margin-top: 10px;
  }
`;

export const DateDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

  @media (min-width: 320px) {
    width: 100%;
  }
`;

export const LocationDiv = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
`;

export const NoData = styled("p")`
  font-family: "Ubuntu", sans-serif;
  color: #eef0f5;
  text-align: center;
`;

export const TextDiv = styled("div")`
  width: 100%;
`;

//TextDiv