package com.example.mums_notes.navigation.create_routes

import androidx.compose.ui.graphics.toArgb
import com.example.mums_notes.feature_notes.data_class.NoteData
import com.example.mums_notes.feature_notes.domain.model.Note
import com.example.mums_notes.feature_notes.presintation.add_edit_notes.AddEditNoteViewModel
import com.example.mums_notes.navigation.Screen

fun createNoteRoute(data: AddEditNoteViewModel): String {
  val note = NoteData(
    Color = data.noteColor.value,
    Title = data.noteTitle.value.text,
    Content = data.noteContent.value.text,
  )


  val noteColor = note.Color ?: Note.noteColors.random().toArgb()
  val noteTitle = if (note.Title?.isNotEmpty() == true) note.Title else ""
  val noteContent = if (note.Content?.isNotEmpty() == true) note.Content else ""

  return Screen.NoteScreen.router + "?noteColor=${noteColor}&noteTitle=${noteTitle}&noteContent=${noteContent}"
}