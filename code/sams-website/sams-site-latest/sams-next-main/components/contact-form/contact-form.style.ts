import styled from "styled-components";

export const Form = styled("form")`
  padding: 10px;
  padding-top: 0;

  h1 {
    text-align: center;
    margin-top: 1px;
  }
`;

const formElements = `
  align-items:center;
  justify-content: center;
  display: flex;

  color: #ffffff;
  font-family: "Ubuntu", sans-serif;
  background-color: #242423;
  padding: 15px;
  margin-bottom: 20px;
  border: 0;
  outline: 0;
  box-sizing: border-box;

  :focus {
    box-shadow: 0 0 3pt 2pt #aca9a9;
  }
`;

export const Input = styled("input")`
  height: 30px;
  border-radius: 100px;
  ${formElements}

  width: 360px;

  @media (min-width: 320px) {
    width: 280px;
  }

  @media (min-width: 375px) {
    width: 300px;
  }

  @media (min-width: 929px) {
    width: 360px;
  }
  @media (min-width: 380px) {
    width: 350px;
  }
`;

export const Message = styled("textarea")`
  height: 200px;
  border-radius: 20px;
  ${formElements}

  @media (min-width: 300px) {
    width: 280px;
  }

  @media (min-width: 929px) {
    width: 360px;
  }

  @media (min-width: 375px) {
    width: 300px;
  }
  @media (min-width: 380px) {
    width: 350px;
  }
`;

//380
export const ButtonHolder = styled("div")`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 11px;
  margin-bottom: 28px;

  @media (min-width: 929px) {
    padding-bottom: 20px;
    padding-top: 20px;
    margin-bottom: 0;
  }
`;
//Message
//Div

export const Div = styled("div")`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  /* margin-top: 20px; */
`;
