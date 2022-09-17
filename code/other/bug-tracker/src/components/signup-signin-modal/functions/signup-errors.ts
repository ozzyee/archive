export function nameErrors(firstName: string, lastName: string) {
  let nameError = "";

  if (firstName.length < 1 && lastName.length < 1) {
    nameError = "Enter first and last names";
  }
  if (firstName.length >= 1 && lastName.length < 1) {
    nameError = "Enter last name";
  }
  if (firstName.length < 1 && lastName.length >= 1) {
    nameError = "Enter first name";
  }
  if (firstName.length >= 1 && lastName.length >= 1) {
    nameError = "";
  }
  return nameError;
}

export function emailErrors(email: string, emailValid: boolean, error: string) {
  let emailError = "";
  let emailHighlight = false;

  if (email.length < 1) {
    emailError = "Enter Email address";
    emailHighlight = true;
  }

  if (!emailValid && email.length > 1) {
    emailError = "Enter a valid Email address";
    emailHighlight = true;
  }

  if (error == "The email address is already in use by another account.") {
    const confirmEmail = <HTMLInputElement>(
      document.getElementById("confirm-email")
    );
    confirmEmail.value = "";

    emailError = error;
    emailHighlight = true;
  }

  if (
    emailValid &&
    error != "The email address is already in use by another account."
  ) {
    emailError = "";
    emailHighlight = false;
  }

  const data = {
    emailError: emailError,
    emailHighlight: emailHighlight,
  };
  return data;
}

export function confirmEmailErrors(
  confirmEmail: string,
  email: string,
  emailValid: boolean
) {
  let confirmEmailError = "";
  let highlightConfirmPassword = false;

  if (confirmEmail.length <= 0) {
    highlightConfirmPassword = true;
  }

  if (confirmEmail.length < 1 && emailValid) {
    confirmEmailError = "Confirm email";
    highlightConfirmPassword = true;
  }

  if (confirmEmail.length >= 1 && confirmEmail != email) {
    confirmEmailError = "Emails dont match";
    highlightConfirmPassword = true;
  }

  if (confirmEmail.length >= 1) {
    if (confirmEmail == email) {
      confirmEmailError = "";
      highlightConfirmPassword = false;
    }
  }

  const data = {
    confirmEmailError: confirmEmailError,
    highlightConfirmPassword: highlightConfirmPassword,
  };

  return data;
}

export function passwordErrors(
  passwordErr: string[],
  confirmPasswordValue: string,
  passwordsMatch: boolean
) {
  let passwordErrMsg = "";
  let passwordErrorRes = false;

  const passwordError = passwordErr[0];

  if (passwordError == "") {
    passwordErrorRes = true;
    passwordErrMsg =
      "Use 8 or more characters with a mix of letters, numbers & symbols";
  }
  if (passwordError != "") {
    passwordErrMsg = passwordError;
    passwordErrorRes = true;
  }

  if (passwordError == "Enter a password") {
    const confirmPassword = <HTMLInputElement>(
      document.getElementById("Confirm")
    );
    if (confirmPassword.value != "") {
      confirmPassword.value = "";
    }
  }

  if (confirmPasswordValue.length < 1 && passwordErr.length <= 0) {
    passwordErrMsg = "Confirm Password.";
  }

  if (
    confirmPasswordValue.length >= 1 &&
    !passwordsMatch &&
    passwordErr.length <= 0
  ) {
    passwordErrMsg = "Passwords dont match.";
  }

  const data = {
    passwordErrMsg: passwordErrMsg,
    passwordErrorRes: passwordErrorRes,
  };

  return data;
}
