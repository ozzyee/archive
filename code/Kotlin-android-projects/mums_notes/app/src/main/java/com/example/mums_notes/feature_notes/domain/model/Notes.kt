package com.example.mums_notes.feature_notes.domain.model

import LightBlue
import LightGreen
import LightOrange
import LightRed
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class Note(
  val title: String,
  val content: String,
  val timestamp: Long,
  val color: Int,
  @PrimaryKey val id: Int? = null
) {
  companion object {
    val noteColors = listOf(LightBlue, LightGreen, LightOrange, LightRed)
  }
}

class InvalidNoteException(message: String) : Exception(message)