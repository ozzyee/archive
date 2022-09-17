package com.example.mums_notes.feature_login.presintation.login

import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import com.example.mums_notes.util.firebase.authentication.AutService
import com.example.mums_notes.util.validation.isValidEmail
import com.example.mums_notes.util.validation.isValidPassword
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject

@HiltViewModel
class LoginViewmodel @Inject constructor() : ViewModel() {
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

  private val _passwordErrorMessage = mutableStateOf(
    LoginTextFieldsState(
      Error = ""
    )
  )
  val passwordErrorMessage: State<LoginTextFieldsState> = _passwordErrorMessage

  private val _emailErrorMessage = mutableStateOf(
    LoginTextFieldsState(
      Error = ""
    )
  )
  val emailErrorMessage: State<LoginTextFieldsState> = _emailErrorMessage

  fun onEvent(event: LoginEvent) {
    when (event) {
      is LoginEvent.Email -> {
        _email.value = email.value.copy(
          text = event.value
        )
      }
      is LoginEvent.Password -> {
        _password.value = password.value.copy(
          text = event.value
        )
      }
      is LoginEvent.Login -> {
        val isEmailValid = isValidEmail(email.value.text)
        val isPasswordValid = isValidPassword(password.value.text)

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

        if (isEmailValid.isBlank() && isPasswordValid.isBlank()) {
          AutService().passwordLogin(
            email = email.value.text,
            password = password.value.text
          )
        }
      }
    }
  }
}