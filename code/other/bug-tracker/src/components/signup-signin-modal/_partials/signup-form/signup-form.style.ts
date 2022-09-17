import styled from "styled-components";
import Colors from "../../../../configs/colors.json";
import fontFamily from "../../../../configs/fonts.json";

export const SignupFromDiv = styled("div")`
  height: 76%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const FormWrapper = styled("div")`
  width: 100%;
  margin-top: 10px;
  /* margin-top: -40px; */
`;

export const Wrapper = styled("div")`
  width: 100%;
`;

export const ButtonWrapper = styled("div")`
  margin-top: 25px;
`;

export const SubmitButton = styled("button")`
  width: 250px;
  border-radius: 20px;
  height: 28px;
  background-color: ${Colors.primary};
  border: 2px solid transparent;
  color: white;
  transition: transform 90ms;

  :active {
    transform: scale(0.95);
  }
`;

export const InputHolder = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextHint = styled("div")`
  display: flex;
  height: 24px;
  margin-bottom: 6px;
  margin-top: 2px;
  justify-content: center;
  color: ${Colors.primary};
`;

export const Text = styled("div")`
  width: 90%;
  font-size: 12px;
  display: flex;

  &.red-text {
    color: red;
  }

  &.checkbox-text {
    font-size: 14px;
    width: 1000px;
    display: flex;
    align-items: center;
    color: ${Colors.primary};
  }
`;

export const InputWrapper = styled("div")`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;

  &.width50 {
    width: 50%;
  }

  &.width100 {
    width: 100%;
  }

  &.checkbox-wrapper {
    align-items: left;
    justify-content: left;
    margin-top: -12px;
    margin-left: 3px;
  }
`;

export const FormInput = styled("input")`
  width: 100%;
  height: 28px;
  border-radius: 20px;
  background-color: transparent;
  padding-left: 10px;
  padding-right: 0px;
  font-family: ${fontFamily.primary};
  color: ${Colors.primary};
  border: 2px solid ${Colors.primary};

  ::placeholder {
    color: ${Colors.primary};
  }

  :focus {
    background-color: white;
  }

  &.red-boarder {
    border: 2px solid red;
  }

  &.checkbox {
    height: 15px;
    border: 2px solid blue;
  }
`;
