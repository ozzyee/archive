import styled from "@emotion/styled-base";
import Colors from "../../../../configs/colors.json";
import fontFamily from "../../../../configs/fonts.json";

export const FormInputDiv = styled("div")`
  width: 100%;
`;

export const InputHolder = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
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
    cursor: pointer;
  }
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

  &.white {
    color: white;
  }

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

export const ButtonWrapper = styled("div")`
  margin-top: 25px;

  &.oauth-wrapper {
    margin-top: 10px;
  }
`;

export const SubmitButton = styled("div")`
  width: 250px;
  border-radius: 20px;
  height: 28px;
  background-color: ${Colors.primary};
  border: 2px solid transparent;
  color: white;
  transition: transform 90ms;
  cursor: pointer;
  user-select: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  :active {
    transform: scale(0.95);
  }
`;

export const OAuthButtonHolder = styled("div")`
  width: 250px;
  height: 28px;
  display: flex;
`;

export const GoogleButton = styled("div")`
  width: 50%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #4285f4;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  user-select: none;
  :active {
    transform: scale(0.95);
  }
`;

export const FacebookButton = styled("div")`
  width: 50%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #39569a;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  user-select: none;
  :active {
    transform: scale(0.95);
  }
`;

export const Logo = styled("div")`
  .icon {
    height: 20px;
    padding-right: 10px;
    color: white;
  }
`;

export const ButtonContent = styled("div")`
  height: 80%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
