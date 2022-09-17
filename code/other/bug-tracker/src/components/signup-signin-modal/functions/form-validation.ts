export function checkName(nameInput: React.ChangeEvent) {
  const target = nameInput.target as HTMLButtonElement;
  const inputValue = target.value;
  const targetLength = inputValue.length;
  let nameIsRight = false;

  if (targetLength >= 1) {
    nameIsRight = true;
  }

  const data = {
    nameIsOk: nameIsRight,
    nameValue: inputValue,
  };

  return data;
}

export function checkEmail(emailInput: React.ChangeEvent) {
  const target = emailInput.target as HTMLButtonElement;
  const inputValue = target.value;
  const split = inputValue.split("@");
  const endOfEmail = split[1]?.split(".");
  let endEmailLength: number | undefined;

  if (endOfEmail?.length >= 2) {
    endEmailLength = endOfEmail[1]?.length;
  }

  let isValidEmail = false;

  if (split.length == 2) {
    if (split[0].length >= 2 && split[1].length >= 2) {
      if (endEmailLength) {
        if (endEmailLength >= 2) {
          if (endOfEmail[0].length > 1) {
            isValidEmail = true;
          }
        }
      }
    }
  }

  const data = {
    emailIsValid: isValidEmail,
    emailValue: inputValue,
  };

  return data;
}

export function checkPassword(firstPassword: React.ChangeEvent) {
  const target = firstPassword.target as HTMLButtonElement;
  const targetValue = target.value,
    errors = [];
  let passwordValid = true;

  if (targetValue == "") {
    errors.push("Enter a password");
  }

  if (targetValue.length < 8) {
    // errors.push("Your password must be at least 8 characters");
    errors.push("Use 8 characters or more for your password");
  }

  if (targetValue.search(/[a-z]/i) < 0) {
    // errors.push("Your password must contain at least one letter.");
    errors.push("Use 1 or more letters for your password");
  }

  if (targetValue.search(/[0-9]/) < 0) {
    // errors.push("Your password must contain at least one digit.");
    errors.push("Use 1 or more numbers for your password");
  }
  if (errors.length > 0) {
    // eslint-disable-next-line unused-imports/no-unused-vars
    passwordValid = false;
  }

  const data = {
    passWordValue: targetValue,
    validPassWord: passwordValid,
    error: errors,
  };

  return data;
}

export function confirmPassword(
  lastPassword: React.ChangeEvent,
  password: string
) {
  const target = lastPassword.target as HTMLButtonElement;
  const targetValue = target.value;
  let passwordMatch = false;

  if (targetValue == password) {
    passwordMatch = true;
  }
  return passwordMatch;
}

export function confirmEmailCheck(
  confirmEmail: React.ChangeEvent,
  email: string
) {
  const target = confirmEmail.target as HTMLButtonElement;
  const targetValue = target.value;
  let emailMatch = false;

  if (targetValue == email) {
    emailMatch = true;
  }
  return emailMatch;
}
