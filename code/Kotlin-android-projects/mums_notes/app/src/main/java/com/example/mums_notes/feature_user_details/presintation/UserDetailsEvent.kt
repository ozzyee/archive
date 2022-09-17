package com.example.mums_notes.feature_user_details.presintation

sealed class UserDetailsEvent {
  data class FirstName(val value: String) : UserDetailsEvent()
  data class LastName(val value: String) : UserDetailsEvent()
  data class Pin(val value: String) : UserDetailsEvent()
  data class ConfirmPin(val value: String) : UserDetailsEvent()
  object Save : UserDetailsEvent()
}