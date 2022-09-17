import React from "react";
import { TFormInputProps } from "./form-input.definition";
import * as S from "./form-input.style";

import { Google } from "@styled-icons/boxicons-logos/Google";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";

export function FormInput({
  className,
  twoInputs,
  onChangeInputOne,
  onChangeInputTwo,
  inputTypeOne,
  inputTypeTwo,
  placeholderOne,
  placeholderTwo,
  classNameTriggerOne,
  classNameTriggerTwo,
  errorTextTrigger,
  errorMessage,
  onClick,
  id,
  btnText,
  googleF,
  faceBookF,
  submitOnClick
}: TFormInputProps) {
  if (twoInputs) {
    return (
      <S.FormInputDiv className={className}>
        <S.InputHolder>
          <S.InputWrapper className="width50">
            <S.FormInput
              type={inputTypeOne}
              placeholder={placeholderOne}
              className={`${classNameTriggerOne && "red-boarder"}`}
              onChange={onChangeInputOne}
              id={id}
            />
          </S.InputWrapper>

          <S.InputWrapper className="width50">
            <S.FormInput
              type={inputTypeTwo}
              placeholder={placeholderTwo}
              className={`${classNameTriggerTwo && "red-boarder"}`}
              onChange={onChangeInputTwo}
              id={id}
            />
          </S.InputWrapper>
        </S.InputHolder>

        <S.TextHint>
          <S.Text className={`${errorTextTrigger && "red-text"}`}>
            {errorMessage}
          </S.Text>
        </S.TextHint>
      </S.FormInputDiv>
    );
  }

  if (inputTypeOne == "checkbox") {
    return (
      <S.FormInputDiv className={className}>
        <S.InputWrapper className="width50 checkbox-wrapper">
          <S.FormInput
            onChange={onChangeInputOne}
            className="checkbox"
            type="checkbox"
          />
          <S.Text className="checkbox-text">see Password</S.Text>
        </S.InputWrapper>
      </S.FormInputDiv>
    );
  }

  if (inputTypeOne == "submit-btn") {
    return (
      <S.ButtonWrapper>
        <S.InputHolder>
          <S.SubmitButton onClick={onClick}>{btnText}</S.SubmitButton>
        </S.InputHolder>
      </S.ButtonWrapper>
    );
  }

  if (inputTypeOne == "OAuthLogin") {
    return (
      <S.ButtonWrapper className="oauth-wrapper">
        <S.InputHolder>
          <S.OAuthButtonHolder>
            <S.GoogleButton onClick={googleF}>
              <S.ButtonContent>
                <S.Logo>
                  <Google className="icon" />
                </S.Logo>
                <S.Text className="white">Google</S.Text>
              </S.ButtonContent>
            </S.GoogleButton>

            <S.FacebookButton onClick={faceBookF}>
              <S.ButtonContent>
                <S.Logo>
                  <Facebook className="icon" />
                </S.Logo>
                <S.Text className="white">Facebook</S.Text>
              </S.ButtonContent>
            </S.FacebookButton>
          </S.OAuthButtonHolder>
        </S.InputHolder>
      </S.ButtonWrapper>
    );
  }

  return (
    <S.FormInputDiv className={className}>
      <S.InputHolder>
        <S.InputWrapper className="width100">
          <S.FormInput
            type={inputTypeOne}
            placeholder={placeholderOne}
            className={`${classNameTriggerOne && "red-boarder"}`}
            onChange={onChangeInputOne}
            id={id}
          />
        </S.InputWrapper>
      </S.InputHolder>

      <S.TextHint>
        <S.Text className={`${errorTextTrigger && "red-text"}`}>
          {errorMessage}
        </S.Text>
      </S.TextHint>
    </S.FormInputDiv>
  );
}
