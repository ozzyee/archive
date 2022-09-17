import { MouseEventHandler } from "react";

export type TFormInputProps = {
  className?: string;
  twoInputs?: boolean;
  inputTypeOne?: string;
  placeholderOne?: string;
  classNameTriggerOne?: boolean;
  onChangeInputOne?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  inputTypeTwo?: string;
  placeholderTwo?: string;
  classNameTriggerTwo?: boolean;
  onChangeInputTwo?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  errorTextTrigger?: boolean;
  errorMessage?: string;
  onClick?: MouseEventHandler<HTMLInputElement> | undefined;
  id?: string;
  btnText?: string;
  googleF?: () => void;
  faceBookF?: () => void;
  submitOnClick?: MouseEventHandler<HTMLButtonElement>;
};
