import React, { useState } from "react";
import { TSigninFromProps } from "./signin-form.definition";
import * as S from "./signin-form.style";
import { FormInput } from "../form-input/form-input.component";
import { checkEmail } from "../../functions/form-validation";
import { loginFunction } from "../../functions/signin";
import { loginGoogle } from "../../functions/google-login";
import { loginFacebook } from "../../functions/facebook-login";

export function SigninFrom({ className }: TSigninFromProps) {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [highlightEmail, setHighlightEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordErr, setPasswordErr] = useState("");
  const [highlightPassword, setHighlightPassword] = useState(false);

  async function signIn() {
    const {
      highlightEmail,
      emailError,
      passwordError,
      highlightPassword,
    } = await loginFunction(email, password, emailValid);

    setHighlightEmail(highlightEmail);
    setEmailError(emailError);
    setPasswordErr(passwordError);
    setHighlightPassword(highlightPassword);

  }

  return (
    <S.SigninFromDiv className={className}>
      <S.FormWrapper>
        <FormInput
          inputTypeOne="email"
          placeholderOne="Email"
          classNameTriggerOne={highlightEmail}
          onChangeInputOne={(e) => {
            setEmail(checkEmail(e).emailValue);
            setEmailValid(checkEmail(e).emailIsValid);
          }}
          id="email"
          errorTextTrigger={true}
          errorMessage={emailError}
        />

        <FormInput
          inputTypeOne={showPassword ? "text" : "password"}
          placeholderOne="Password"
          classNameTriggerOne={highlightPassword}
          onChangeInputOne={(e) => {
            setPassword(e.target.value);
          }}
          errorTextTrigger={true}
          errorMessage={passwordErr}
        />
        <FormInput
          inputTypeOne="checkbox"
          onChangeInputOne={(e) => {
            setShowPassword(e.target.checked);
          }}
        />

        <FormInput
          inputTypeOne="submit-btn"
          onClick={signIn}
          btnText="Sign In"
        />

        <S.OAuthButtonHolder>
          <FormInput
            inputTypeOne="OAuthLogin"
            googleF={loginGoogle}
            faceBookF={loginFacebook}
          />
        </S.OAuthButtonHolder>
      </S.FormWrapper>
    </S.SigninFromDiv>
  );
}
