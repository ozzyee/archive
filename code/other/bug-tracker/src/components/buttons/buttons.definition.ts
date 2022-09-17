import { ReactChild, ReactElement } from "react";

export type TButtonsProps = {
  className?: string;
  Btn?: string;
  children?: ReactChild;
  width?: string;
  height?: string;
  text?: string | ReactElement | undefined;
  onClick?: () => void;
  loginState?: boolean;
  singInFunction?: () => void;
  signUpFunction?: () => void;
};
