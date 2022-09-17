package com.example.mums_notes.feature_cards.domain.use_case

data class CardUseCase(
  val getCards: GetCards,
  val deleteCard: DeleteCard,
  val addCard: AddCard,
  val getCard: GetCard
)