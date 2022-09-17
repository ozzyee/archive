package com.plcoding.cleanarchitecturenoteapp.di

import android.app.Application
import androidx.room.Room
import com.plcoding.cleanarchitecturenoteapp.feature_note.data.data_source.NoteDatabase
import com.plcoding.cleanarchitecturenoteapp.feature_note.data.repository.NoteRepositoryImpala
import com.plcoding.cleanarchitecturenoteapp.feature_note.domain.repository.NoteRepository
import com.plcoding.cleanarchitecturenoteapp.feature_note.domain.use_case.*
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object AppModule {
  @Provides
  @Singleton
  fun providesNoteDatabase(app: Application): NoteDatabase {
    return Room.databaseBuilder(
      app,
      NoteDatabase::class.java,
      NoteDatabase.DATABASE_NAME
    ).build()
  }

  @Provides
  @Singleton
  fun providesNoteRepository(db: NoteDatabase): NoteRepository {
    return NoteRepositoryImpala(db.noteDao)
  }

  @Provides
  @Singleton
  fun provideNoteUseCases(repository: NoteRepository): NoteUseCases{
    return NoteUseCases(
      getNotes = GetNotes(repository),
      deleteNotes = DeleteNote(repository),
      addNote = AddNote(repository),
      getNote = GetNote(repository)
    )
  }
}