package com.example.mums_notes.feature_cards.domain.use_case

import com.example.mums_notes.feature_cards.domain.model.Card
import com.example.mums_notes.feature_cards.domain.repository.CardRepository

class AddCard(
  private val repository: CardRepository
) {
  suspend operator fun invoke(card: Card) {
    repository.insertCard(card)
  }
}