package com.example.mums_notes.feature_register.presintation

sealed class RegisterEvent {
  data class Email(val value: String) : RegisterEvent()
  data class Password(val value: String) : RegisterEvent()
  data class ConfirmPassword(val value: String) : RegisterEvent()
  object Register : RegisterEvent()
}
