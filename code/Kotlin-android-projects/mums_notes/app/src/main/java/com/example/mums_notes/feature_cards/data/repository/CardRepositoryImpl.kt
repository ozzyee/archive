package com.example.mums_notes.feature_cards.data.repository

import com.example.mums_notes.feature_cards.data.data_source.CardDao
import com.example.mums_notes.feature_cards.domain.model.Card
import com.example.mums_notes.feature_cards.domain.repository.CardRepository
import kotlinx.coroutines.flow.Flow

class CardRepositoryImpl(
  private val dao: CardDao
) : CardRepository {

  override fun getCards(): Flow<List<Card>> {
    return dao.getCards()
  }

  override suspend fun getCardById(id: Int): Card? {
    return dao.getCardById(id)
  }

  override suspend fun insertCard(card: Card) {
    return dao.insertCard(card)
  }

  override suspend fun deleteCard(card: Card) {
    dao.deleteCard(card)
  }
}