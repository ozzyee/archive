package com.example.mums_notes.feature_cards.data.data_source

import androidx.room.*
import com.example.mums_notes.feature_cards.domain.model.Card
import kotlinx.coroutines.flow.Flow

@Dao
interface CardDao {

  @Query("SELECT * FROM card")
  fun getCards(): Flow<List<Card>>

  @Query("SELECT * FROM card WHERE id = :id")
  suspend fun getCardById(id: Int): Card?

  @Insert(onConflict = OnConflictStrategy.REPLACE)
  suspend fun insertCard(card: Card)

  @Delete
  suspend fun deleteCard(card: Card)
}