export function loginErrorResponse(error: string) {


    let errorMessage = "";
    if (
      error == "The password is invalid or the user does not have a password."
    ) {
      errorMessage = "wrong password";
    }
  
    if (
      error ==
      "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
    ) {
      errorMessage =
        "Access has been temporarily disabled due to many failed login attempts.";
    }
  
    if (
      error ==
      "There is no user record corresponding to this identifier. The user may have been deleted."
    ) {
      errorMessage = "there isn't a user with these credentials";
    }
  
    return errorMessage;
  }
  