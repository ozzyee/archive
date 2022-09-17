package com.example.mums_notes.database

import androidx.room.Database
import androidx.room.RoomDatabase
import com.example.mums_notes.feature_cards.data.data_source.CardDao
import com.example.mums_notes.feature_cards.domain.model.Card
import com.example.mums_notes.feature_notes.data.data_source.NoteDao
import com.example.mums_notes.feature_notes.domain.model.Note
import com.example.mums_notes.feature_user_details.data.data_source.UserDetailsDao
import com.example.mums_notes.feature_user_details.domain.models.UserDetails

@Database(
  entities = [Note::class, Card::class, UserDetails::class],
  version = 1
)
abstract class NoteDatabase : RoomDatabase() {

  abstract val noteDao: NoteDao
  abstract val cardDao: CardDao
  abstract val userDetailsDao: UserDetailsDao

  companion object {
    const val DATABASE_NAME = "notes_db"
  }
}