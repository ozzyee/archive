package com.example.mums_notes.feature_cards.domain.use_case

import com.example.mums_notes.feature_cards.domain.model.Card
import com.example.mums_notes.feature_cards.domain.repository.CardRepository
import kotlinx.coroutines.flow.Flow

class GetCards(
  private val repository: CardRepository
) {
  operator fun invoke(): Flow<List<Card>> {
    return repository.getCards()
  }
}