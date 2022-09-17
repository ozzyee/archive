package com.example.mums_notes.feature_cards.domain.repository

import com.example.mums_notes.feature_cards.domain.model.Card
import kotlinx.coroutines.flow.Flow

interface CardRepository {

  fun getCards(): Flow<List<Card>>

  suspend fun getCardById(id: Int): Card?

  suspend fun insertCard(card: Card)

  suspend fun deleteCard(card: Card)
}