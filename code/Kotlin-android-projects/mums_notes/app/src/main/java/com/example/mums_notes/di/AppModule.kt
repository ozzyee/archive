package com.example.mums_notes.di

import android.app.Application
import androidx.room.Room
import androidx.security.crypto.EncryptedSharedPreferences
import androidx.security.crypto.MasterKeys
import com.example.mums_notes.database.NoteDatabase
import com.example.mums_notes.feature_cards.data.repository.CardRepositoryImpl
import com.example.mums_notes.feature_cards.domain.repository.CardRepository
import com.example.mums_notes.feature_cards.domain.use_case.*
import com.example.mums_notes.feature_notes.data.repository.NoteRepositoryImpl
import com.example.mums_notes.feature_notes.domain.repository.NoteRepository
import com.example.mums_notes.feature_notes.domain.use_case.*
import com.example.mums_notes.feature_user_details.data.repository.UserDetailsRepositoryImpl
import com.example.mums_notes.feature_user_details.domain.repository.UserDetailsRepository
import com.example.mums_notes.feature_user_details.domain.use_case.*
import com.example.mums_notes.functions.createPassword
import com.example.mums_notes.functions.savePassword
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import net.sqlcipher.database.SQLiteDatabase
import net.sqlcipher.database.SupportFactory
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object AppModule {

  private fun getPassword(app: Application): String? {
    val keyName = "DBPassword"
    val fileName = "SecureDB"
    val masterKeyAlias = MasterKeys.getOrCreate(MasterKeys.AES256_GCM_SPEC)

    val sharedPreferences = EncryptedSharedPreferences.create(
      fileName,
      masterKeyAlias,
      app,
      EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
      EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
    )

    fun loadSecret(): String? = sharedPreferences.getString(keyName, null)

    if (loadSecret() == null) {
      return savePassword(sharedPreferences, keyName, createPassword(20))
    }

    return loadSecret()
  }

  @Provides
  @Singleton
  fun provideNoteDatabase(app: Application): NoteDatabase {
    val password = getPassword(app)
    val builder = Room.databaseBuilder(
      app, NoteDatabase::class.java, NoteDatabase.DATABASE_NAME
    )

    val factory = SupportFactory(SQLiteDatabase.getBytes(password!!.toCharArray()))

//    builder.openHelperFactory(factory)
    return builder.build()
  }

  @Provides
  @Singleton
  fun provideNoteRepository(db: NoteDatabase): NoteRepository {
    return NoteRepositoryImpl(db.noteDao)
  }

  @Provides
  @Singleton
  fun provideCardRepository(db: NoteDatabase): CardRepository {
    return CardRepositoryImpl(db.cardDao)
  }

  @Provides
  @Singleton
  fun provideUserDetailsRepository(db: NoteDatabase): UserDetailsRepository {
    return UserDetailsRepositoryImpl(db.userDetailsDao)
  }

  @Provides
  @Singleton
  fun provideNoteUseCases(repository: NoteRepository): NoteUseCases {
    return NoteUseCases(
      getNotes = GetNotes(repository),
      deleteNote = DeleteNote(repository),
      addNote = AddNote(repository),
      getNote = GetNote(repository)
    )
  }

  @Provides
  @Singleton
  fun provideCardUseCases(repository: CardRepository): CardUseCase {
    return CardUseCase(
      getCards = GetCards(repository),
      deleteCard = DeleteCard(repository),
      addCard = AddCard(repository),
      getCard = GetCard(repository)
    )
  }

  @Provides
  @Singleton
  fun provideUsersDetailsUCases(repository: UserDetailsRepository): UserDetailsUseCases {
    return UserDetailsUseCases(
      getUserDetails = GetUserDetails(repository),
      deleteUserDetails = DeleteUserDetails(repository),
      addUserDetails = AddUserDetails(repository),
      getUserDetailsByUID = GetUsersDetailsByUID(repository)
    )
  }

}