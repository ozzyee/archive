package HelperFunctions

import android.util.Log

fun CustomErrMessage(err: String): String {
  Log.d("ERROIER123", "THE ERR IS $err")

  var error = ""

  if (err == "com.google.firebase.auth.FirebaseAuthUserCollisionException: The email address is already in use by another account.") {
    error = "The email address is currently in use.";
  }

  if (
    err ==
    "com.google.firebase.auth.FirebaseAuthInvalidCredentialsException: The email address is badly formatted."
  ) {
    error = "The email address is badly formatted.";
  }

  if (err == "com.google.firebase.auth.FirebaseAuthInvalidCredentialsException: The password is invalid or the user does not have a password.") {
    error = "Wrong Password";
  }

  if (err == "com.google.firebase.auth.FirebaseAuthInvalidUserException: There is no user record corresponding to this identifier. The user may have been deleted.") {
    error = "There is no user corresponding with these details";
  }

  if (err == "com.google.firebase.FirebaseTooManyRequestsException: We have blocked all requests from this device due to unusual activity. Try again later. [ Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. ]") {
    error = "you account has been temporarily disabled due to too many failed logins";
  }

  return error
}
