package com.example.pawcket_mobile

import android.text.Editable
import android.text.TextUtils
import android.util.Log
import android.util.Patterns
import androidx.appcompat.app.AppCompatActivity
import com.example.pawcket_mobile.databinding.LoginBinding
import com.example.pawcket_mobile.databinding.SignUpBinding
import com.google.firebase.auth.FirebaseAuth
import java.util.regex.Pattern

fun isValidPassword(password: String?): Boolean {
  password?.let {
    val passwordPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=/])(?=\\S+$).{4,}$"
    val passwordMatcher = Regex(passwordPattern)

    return passwordMatcher.find(password) != null
  } ?: return false
}

private fun isValidEmail(email: String): Boolean {
  return !TextUtils.isEmpty(email) && Patterns.EMAIL_ADDRESS.matcher(email).matches()
}

fun canLogin(
  email: Editable,
  password: Editable,
  binding: LoginBinding,
  context: AppCompatActivity,
  auth: FirebaseAuth,
  callback: (status: Boolean) -> Unit
) {
  if (email.isEmpty() && password.isEmpty()) {
    showSnackBar(
      binding.snackBarErr,
      "You must enter your Email & Password!",
    )
  } else if (email.isEmpty()) {
    showSnackBar(
      binding.snackBarErr,
      "You must enter your Email!",
    )
  } else if (password.isEmpty()) {
    showSnackBar(
      binding.snackBarErr,
      "You must enter your Password!",
    )
  } else {
    passwordLogin(email, password, auth, context, binding) { status ->
      callback.invoke(status)
    }
  }
}

fun canUserSignUp(
  email: Editable,
  password: Editable,
  confirm: Editable,
  binding: SignUpBinding,
  auth: FirebaseAuth,
  context: AppCompatActivity,
  callback: (status: Boolean) -> Unit

) {
  val isValidEmail = isValidEmail("$email")
  val isValidPassword = isValidPassword("$password")

  if (email.isEmpty() && password.isEmpty() && confirm.isEmpty()) {
    showSnackBar(
      binding.snackBarErr,
      "You must fill in all fields!",
    )
  } else if (email.isEmpty() && password.isEmpty()) {
    showSnackBar(
      binding.snackBarErr,
      "You must fill your Email & Password!",
    )
  } else if (password.isEmpty() && confirm.isEmpty()) {
    showSnackBar(
      binding.snackBarErr,
      "You must fill your Password & Confirm Password!",
    )
  } else if (email.isEmpty()) {
    showSnackBar(
      binding.snackBarErr,
      "You must fill you Email!",
    )
  } else if (!isValidEmail) {
    showSnackBar(
      binding.snackBarErr,
      "You must fill in a valid Email!",
    )
  } else if (password.isEmpty()) {
    showSnackBar(
      binding.snackBarErr,
      "You must fill in your Password!",
    )
  } else if (!isValidPassword) {
    showSnackBar(
      binding.snackBarErr,
      "You must fill in a valid Password!",
    )
  } else if (password == confirm) {
    showSnackBar(
      binding.snackBarErr,
      "Your passwords don't match!",
    )
  } else {
    passwordReg(email, password, auth, context, binding) { res ->
      callback.invoke(res)
    }
  }
}

