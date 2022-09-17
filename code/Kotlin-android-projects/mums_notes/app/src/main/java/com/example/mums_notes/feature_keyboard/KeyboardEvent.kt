package com.example.mums_notes.feature_keyboard


sealed class KeyboardEvent {
  data class IsDisabled(val value: Boolean) : KeyboardEvent()
  data class Input(val value: String) : KeyboardEvent()
}