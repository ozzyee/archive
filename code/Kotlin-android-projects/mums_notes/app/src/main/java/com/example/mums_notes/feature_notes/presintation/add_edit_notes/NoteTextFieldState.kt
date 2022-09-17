package com.example.mums_notes.feature_notes.presintation.add_edit_notes

data class NoteTextFieldState(
  val text: String = "",
  val hint: String = "",
  val isHintVisible: Boolean = true
)