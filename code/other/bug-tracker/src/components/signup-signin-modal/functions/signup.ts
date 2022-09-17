import { checkInputFields } from "./check-input";
import { signUpFunc } from "./signup-submit";

type TFunctionTypes = {
  e: React.MouseEvent<Element, globalThis.MouseEvent>;
  passwordErr: string[];
  nameValid: boolean;
  emailValid: boolean;
  PasswordValid: boolean;
  passwordsMatch: boolean;
  email: string;
  password: string;
  name: string;
  lastNameValid: boolean;
  lastName: string;
  confirmEmailValid: boolean;
};
export async function signUpFunction({
  e,
  passwordErr,
  nameValid,
  emailValid,
  PasswordValid,
  passwordsMatch,
  email,
  password,
  name,
  lastNameValid,
  lastName,
  confirmEmailValid,
}: TFunctionTypes) {
  let passwordAlertMsg = "";
  let passwordAlert = false;
  let alertNotification = true;
  let highlightName = false;
  let highlightLastName = false;
  let highlightEmail = false;
  let highlightPassword = false;
  let HighlightPasswordDontMatch = false;
  let error = "";

  if (passwordErr.length > 0) {
    alertNotification = false;

    if (passwordErr[0] == "less then 8 char") {
      passwordAlertMsg = "Your password must be at least 8 characters";
      passwordAlert = true;
    }

    if (passwordErr[0] == "no letters") {
      passwordAlertMsg = "Your password must contain a letter";
      passwordAlert = true;
    }

    if (passwordErr[0] == "no numbers") {
      passwordAlertMsg = "Your password must contain a number ";
      passwordAlert = true;
    }
  }

  if (passwordErr.length <= 0) passwordAlert = false;

  highlightName = checkInputFields(
    nameValid,
    emailValid,
    PasswordValid,
    passwordsMatch,
    lastNameValid
  ).highlightName;

  highlightLastName = checkInputFields(
    nameValid,
    emailValid,
    PasswordValid,
    passwordsMatch,
    lastNameValid
  ).highlightLastName;

  highlightEmail = checkInputFields(
    nameValid,
    emailValid,
    PasswordValid,
    passwordsMatch,
    lastNameValid
  ).highlightEmail;

  highlightPassword = checkInputFields(
    nameValid,
    emailValid,
    PasswordValid,
    passwordsMatch,
    lastNameValid
  ).highlightPassword;

  HighlightPasswordDontMatch = checkInputFields(
    nameValid,
    emailValid,
    PasswordValid,
    passwordsMatch,
    lastNameValid
  ).HighlightPasswordDontMatch;

  if (
    nameValid &&
    emailValid &&
    PasswordValid &&
    passwordsMatch &&
    lastNameValid &&
    confirmEmailValid
  ) {
    signUpFunc(e, email, password, name, lastName);
    error = await signUpFunc(e, email, password, name, lastName);
  }

  const data = {
    passwordAlertMsg: passwordAlertMsg,
    passwordAlert: passwordAlert,
    alertNotification: alertNotification,
    highlightName: highlightName,
    highlightLastName: highlightLastName,
    highlightEmail: highlightEmail,
    highlightPassword: highlightPassword,
    HighlightPasswordDontMatch: HighlightPasswordDontMatch,
    error: error,
  };

  return data;
}
