package com.example.mums_notes.feature_login.presintation.login

sealed class LoginEvent {
  data class Email(val value: String) : LoginEvent()
  data class Password(val value: String) : LoginEvent()
  object Login : LoginEvent()
}
