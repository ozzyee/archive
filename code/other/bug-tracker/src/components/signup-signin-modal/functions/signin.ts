import firebase from "firebase";
import { checkInputFields } from "./check-input";
import { loginErrorResponse } from "./login-errors";

export async function loginFunction(
  email: string,
  password: string,
  emailValid: boolean
) {
  let highlightEmail = false;
  let highlightPassword = false;
  let emailError = "";
  let loginErrorStr = "";
  let passwordError = "";

  highlightEmail = checkInputFields(emailValid).highlightEmail;

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    window.location.href = "/dashboard";
  } catch (e) {
    const error = e as Error;
    loginErrorResponse(error.message);
    loginErrorStr = loginErrorResponse(error.message);
  }

  // email Errors
  console.log();
  if (email.length > 4 && !emailValid) {
    emailError = "Enter a valid email";
  }
  if (email.length < 1) {
    emailError = "Enter email";
  }
  if (emailValid) {
    emailError = "";
    highlightEmail = false;
  }
  if (loginErrorStr == "there isn't a user with these credentials") {
    highlightEmail = true;
  }

  // password Errors
  if (password.length < 1) {
    passwordError = "Enter password";
    highlightPassword = true;
  }
  if (password.length > 1 && emailValid) {
    passwordError = "wrong password. did you sign up with Google or Facebook";
    highlightPassword = true;
  }

  const data = {
    highlightEmail: highlightEmail,
    highlightPassword: highlightPassword,
    emailError: emailError,
    passwordError: passwordError,
  };

  return data;
}
