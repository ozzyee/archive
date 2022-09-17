/* eslint-disable unused-imports/no-unused-vars */
export function checkInputFields(
  nameValid?: boolean,
  emailValid?: boolean,
  PasswordValid?: boolean,
  passwordsMatch?: boolean,
  lastNameValid?: boolean
) {
  let highlightName;
  let highlightLastName;
  let highlightEmail;
  let highlightPassword;
  let HighlightPasswordDontMatch;

  if (!nameValid) {
    highlightName = true;
  } else {
    highlightName = false;
  }

  if (!lastNameValid) {
    highlightLastName = true;
  } else {
    highlightLastName = false;
  }

  if (!emailValid) {
    highlightEmail = true;
  } else {
    highlightEmail = false;
  }

  if (!PasswordValid) {
    highlightPassword = true;
  } else {
    highlightPassword = false;
  }

  if (!passwordsMatch) {
    HighlightPasswordDontMatch = true;
  } else {
    HighlightPasswordDontMatch = false;
  }

  const data = {
    highlightName: highlightName,
    highlightLastName: highlightLastName,
    highlightEmail: highlightEmail,
    highlightPassword: highlightPassword,
    HighlightPasswordDontMatch: HighlightPasswordDontMatch,
  };

  return data;
}
