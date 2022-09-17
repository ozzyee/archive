package com.example.mums_notes.feature_cards.domain.use_case

import com.example.mums_notes.feature_cards.domain.model.Card
import com.example.mums_notes.feature_cards.domain.repository.CardRepository

class GetCard(
  private val repository: CardRepository
) {
  suspend operator fun invoke(id: Int): Card? {
    return repository.getCardById(id)
  }
}