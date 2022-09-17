package com.example.mums_notes.feature_keyboard

import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject

@HiltViewModel
class KeyboardViewmodel @Inject constructor() : ViewModel() {
  private val _input = mutableStateOf(
    KeyboardState(
      input = ""
    )
  )
  val input: MutableState<KeyboardState> = _input

  private val _isDisabled = mutableStateOf(
    KeyboardState(
      isDisabled = false,
    )
  )
  val isDisabled: MutableState<KeyboardState> = _isDisabled

  fun onEvent(event: KeyboardEvent) {
    when (event) {
      is KeyboardEvent.Input -> {
        _input.value = input.value.copy(
          input = event.value
        )
      }
      is KeyboardEvent.IsDisabled -> {
        _isDisabled.value = isDisabled.value.copy(
          isDisabled = event.value
        )
      }
    }
  }
}