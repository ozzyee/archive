package com.example.mums_notes.feature_register.presintation

import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import com.example.mums_notes.feature_login.presintation.login.LoginTextFieldsState
import com.example.mums_notes.util.firebase.authentication.AutService
import com.example.mums_notes.util.firebase.error_messages.authErrorMessages
import com.example.mums_notes.util.validation.isValidEmail
import com.example.mums_notes.util.validation.isValidPassword
import com.example.mums_notes.util.validation.passwordsMatch
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject

@HiltViewModel
class RegisterViewModel @Inject constructor() : ViewModel() {
  private val _email = mutableStateOf(
    LoginTextFieldsState(
      label = "Email"
    )
  )
  val email: State<LoginTextFieldsState> = _email

  private val _password = mutableStateOf(
    LoginTextFieldsState(
      label = "Password"
    )
  )
  val password: State<LoginTextFieldsState> = _password

  private val _confirmPassword = mutableStateOf(
    LoginTextFieldsState(
      label = "Confirm Password"
    )
  )
  val confirmPassword: State<LoginTextFieldsState> = _confirmPassword


  private val _emailErrorMessage = mutableStateOf(
    LoginTextFieldsState(
      Error = ""
    )
  )
  val emailErrorMessage: State<LoginTextFieldsState> = _emailErrorMessage

  private val _passwordErrorMessage = mutableStateOf(
    LoginTextFieldsState(
      Error = ""
    )
  )
  val passwordErrorMessage: State<LoginTextFieldsState> = _passwordErrorMessage

  private val _confirmPasswordError = mutableStateOf(
    LoginTextFieldsState(
      label = "Confirm Password"
    )
  )
  val confirmPasswordError: State<LoginTextFieldsState> = _confirmPasswordError

  val _regSuccess = mutableStateOf(false)

  fun onEvent(event: RegisterEvent) {
    when (event) {
      is RegisterEvent.Email -> {
        _email.value = email.value.copy(
          text = event.value
        )
      }
      is RegisterEvent.Password -> {
        _password.value = password.value.copy(
          text = event.value
        )
      }
      is RegisterEvent.ConfirmPassword -> {
        _confirmPassword.value = confirmPassword.value.copy(
          text = event.value
        )
      }
      is RegisterEvent.Register -> {
        val isEmailValid = isValidEmail(email.value.text)
        val isPasswordValid = isValidPassword(password.value.text)
        val passwordsMatch = passwordsMatch(password.value.text, confirmPassword.value.text)


        if (isEmailValid.isNotEmpty()) {
          _emailErrorMessage.value = emailErrorMessage.value.copy(
            Error = isEmailValid
          )
        } else {
          _emailErrorMessage.value = emailErrorMessage.value.copy(
            Error = ""
          )
        }

        if (isPasswordValid.isNotEmpty()) {
          _passwordErrorMessage.value = passwordErrorMessage.value.copy(
            Error = isPasswordValid
          )
        } else {
          _passwordErrorMessage.value = passwordErrorMessage.value.copy(
            Error = ""
          )
        }

        if (passwordsMatch.isNotEmpty()) {
          _confirmPasswordError.value = confirmPasswordError.value.copy(
            Error = passwordsMatch
          )
        } else {
          _confirmPasswordError.value = confirmPasswordError.value.copy(
            Error = ""
          )
        }


        if (isEmailValid.isBlank() && isPasswordValid.isBlank() && passwordsMatch.isBlank()) {
          AutService().passwordRegister(
            email = email.value.text,
            password = password.value.text
          ) {
            val (type, message) = authErrorMessages(it)

            if (type == "email") {
              _emailErrorMessage.value = emailErrorMessage.value.copy(
                Error = message
              )
            }

            if (type == "") _regSuccess.value = true
          }
        }
      }
    }
  }
}