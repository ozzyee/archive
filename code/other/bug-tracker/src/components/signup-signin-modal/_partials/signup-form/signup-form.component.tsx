import React, { MouseEvent, useState } from "react";
import {
  checkEmail,
  checkName,
  checkPassword,
  confirmEmailCheck,
  confirmPassword,
} from "../../functions/form-validation";
import { TSignupFromProps } from "./signup-form.definition";
import * as S from "./signup-form.style";
import { signUpFunction } from "../../functions/signup";
import { FormInput } from "../form-input/form-input.component";
import {
  confirmEmailErrors,
  emailErrors,
  nameErrors,
  passwordErrors,
} from "../../functions/signup-errors";

export function SignupFrom({ className }: TSignupFromProps) {
  const [firstName, setFirstName] = useState("");
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [highlightFirstName, setHighlightFirstName] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameValid, setLastNameValid] = useState(false);
  const [highlightLastName, setHighlightLastName] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [highlightEmail, setHighlightEmail] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState("");

  const [confirmEmailValid, setConfirmEmailValid] = useState(false);

  const [highlightConfirmPass, setHighlightConfirmPass] = useState(false);
  const [password, setPassword] = useState("");
  const [PasswordValid, setPasswordValid] = useState(false);
  const [passwordErr, setPasswordErr] = useState([""]);
  const [highlightPassword, setHighlightPassword] = useState(false);
  const [passwordsMatch, setPasswordMatch] = useState(false);
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [highlightPasswordDontMatch, setHighlightPasswordDontMatch] = useState(
    false
  );

  const [showPassword, setShowPassword] = useState(false);
  // Errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(
    "Use 8 or more characters with a mix of letters, numbers & symbols"
  );
  const [confirmPassError, setConfirmPassError] = useState("");
  const [error, setError] = useState(false);

  async function signUp(e: MouseEvent) {
    e.preventDefault();

    const functionProps = {
      e,
      passwordErr,
      nameValid: firstNameValid,
      emailValid,
      PasswordValid,
      passwordsMatch,
      email,
      password,
      name: firstName,
      lastName,
      lastNameValid,
      confirmEmailValid,
    };
    const {
      error,
      highlightName,
      highlightLastName,
      highlightEmail,
      highlightPassword,
      HighlightPasswordDontMatch,
    } = await signUpFunction(functionProps);
    setHighlightFirstName(highlightName);
    setHighlightLastName(highlightLastName);
    setHighlightEmail(highlightEmail);
    setHighlightPassword(highlightPassword);
    setHighlightPasswordDontMatch(HighlightPasswordDontMatch);

    setNameError(nameErrors(firstName, lastName));
    setEmailError(emailErrors(email, emailValid, error).emailError);
    setHighlightEmail(emailErrors(email, emailValid, error).emailHighlight);
    confirmEmailErrors(confirmEmail, email, emailValid);
    setConfirmPassError(
      confirmEmailErrors(confirmEmail, email, emailValid).confirmEmailError
    );
    setHighlightConfirmPass(
      confirmEmailErrors(confirmEmail, email, emailValid)
        .highlightConfirmPassword
    );

    setShowPasswordError(
      passwordErrors(passwordErr, confirmPasswordValue, passwordsMatch)
        .passwordErrMsg
    );
    setError(
      passwordErrors(passwordErr, confirmPasswordValue, passwordsMatch)
        .passwordErrorRes
    );
  }

  return (
    <S.SignupFromDiv className={className}>
      <S.FormWrapper>
        {/* Name */}

        <FormInput
          twoInputs={true}
          inputTypeOne="text"
          placeholderOne="First Name"
          classNameTriggerOne={highlightFirstName}
          onChangeInputOne={(e) => {
            setFirstName(checkName(e).nameValue);
            setFirstNameValid(checkName(e).nameIsOk);
          }}
          inputTypeTwo="text"
          placeholderTwo="Last Name"
          classNameTriggerTwo={highlightLastName}
          onChangeInputTwo={(e) => {
            setLastName(checkName(e).nameValue);
            setLastNameValid(checkName(e).nameIsOk);
          }}
          errorTextTrigger={error}
          errorMessage={nameError}
        />

        {/* Email */}
        <FormInput
          inputTypeOne="email"
          placeholderOne="Email"
          classNameTriggerOne={highlightEmail}
          onChangeInputOne={(e) => {
            setEmail(checkEmail(e).emailValue);
            setEmailValid(checkEmail(e).emailIsValid);
          }}
          errorTextTrigger={error}
          errorMessage={emailError}
        />

        <FormInput
          inputTypeOne="email"
          placeholderOne="Confirm Email"
          classNameTriggerOne={highlightConfirmPass}
          id="confirm-email"
          onChangeInputOne={(e) => {
            setConfirmEmail(e.target.value);
            setConfirmEmailValid(confirmEmailCheck(e, email));
          }}
          errorTextTrigger={error}
          errorMessage={confirmPassError}
        />

        {/* password */}
        <FormInput
          twoInputs={true}
          inputTypeOne={showPassword ? "text" : "password"}
          placeholderOne="Password"
          classNameTriggerOne={highlightPassword}
          onChangeInputOne={(e) => {
            setPassword(checkPassword(e).passWordValue);
            setPasswordValid(checkPassword(e).validPassWord);
            setPasswordErr(checkPassword(e).error);
          }}
          inputTypeTwo={showPassword ? "text" : "password"}
          placeholderTwo="Confirm Password"
          classNameTriggerTwo={highlightPasswordDontMatch}
          onChangeInputTwo={(e) => {
            setPasswordMatch(confirmPassword(e, password));
            setConfirmPasswordValue(e.target.value);
          }}
          errorTextTrigger={error}
          errorMessage={showPasswordError}
        />
      </S.FormWrapper>

      {/* show password */}
      <FormInput
        inputTypeOne="checkbox"
        onChangeInputOne={(e) => {
          setShowPassword(e.target.checked);
        }}
      />
      {/* Submit Button */}
      <FormInput inputTypeOne="submit-btn" onClick={signUp} btnText="Sign Up" />
    </S.SignupFromDiv>
  );
}
