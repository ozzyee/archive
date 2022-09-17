import styled from "styled-components";
import Colors from "../../configs/colors.json";

export const ButtonsDiv = styled("div")``;

export const SmallBtnHolderGlass = styled("div")`
  /* size */
  width: 43px;
  height: 43px;
  transform: scale(1);
  cursor: pointer;

  :active {
    transform: scale(0.9);
  }

  &.active {
    border: 2px solid black;
  }
`;

export const IconHolder = styled("div")`
  width: 100%;
  height: 100%;
  padding: 7px;

  /* position */
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${Colors.primary};

  .log-out {
    :active {
      color: ${Colors.close};
    }
  }
`;

export const AddBtnHolder = styled("div")`
  width: 25px;
  height: 25px;
  color: ${Colors.primary};
  transform: scale(1);
  cursor: pointer;

  :active {
    transform: scale(0.9);
  }
`;

export const AddImg = styled("div")`
  height: ${(props) => props.theme.height};
  width: ${(props) => props.theme.width};
  color: ${Colors.primary};
  transform: scale(1);
  cursor: pointer;

  :active {
    transform: scale(0.9);
  }
`;

export const FormButton = styled("button")`
  height: ${(props) => props.theme.height};
  width: ${(props) => props.theme.width};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  border: 0px;
  background-color: ${Colors.primary};
  color: white;

  transform: border 200ms ease-in-out;

  cursor: pointer;

  :hover {
    border: 1px solid white;
  }

  :active {
    transform: scale(0.98);
    font-size: 13px;
  }
`;

export const SubmitButton = styled("div")`
  height: ${(props) => props.theme.height};
  width: ${(props) => props.theme.width};
  border-radius: 20px;
  border: 0px;
  background-color: ${Colors.primary};
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: border 200ms ease-in-out;
  cursor: pointer;

  margin-top: auto;
  margin-bottom: auto;

  :hover {
    border: 1px solid white;
  }

  :active {
    transform: scale(0.98);
    font-size: 13px;
  }
`;

export const BtnText = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  :active {
    transform: scale(0.98);
    font-size: 13px;
  }
`;

export const NavigationBtnHolder = styled("div")`
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${Colors.primary};
  transform: scale(1);
  cursor: pointer;

  :active {
    transform: scale(0.9);
  }

  &.active {
    width: 50px;
    height: 50px;
    color: white;
    padding: 8px;
  }
`;

export const NavIconHolder = styled("div")`
  width: 38px;
  height: 38px;
`;

export const LoginSwitchHolder = styled("div")`
  width: 100%;
  height: 25px;
`;

export const CenterText = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextHolder = styled("div")`
  width: 72px;
  height: 100%;
  font-size: 14px;
  position: relative;
  display: flex;
`;

export const TextOverlay = styled("div")`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;

  &.float-right {
    align-items: right;
    justify-content: right;
  }
`;

export const Overlay = styled("div")`
  height: 100%;
  width: 00%;
  background: ${Colors.primary};
  transition: width 200ms;

  &.left-side {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &.right-side {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &.login-toggle-true {
    width: 100%;
  }
`;

export const Text = styled("div")`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${Colors.primary};
  cursor: default;

  &.change-color {
    color: white;
    transition: color 200ms;
  }
`;
export const TopOfPage = styled("div")`
  width: 150px;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginSwitch = styled("div")`
  width: 150px;
  height: 30px;
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;
