package com.example.mums_notes.feature_cards.presentation.cards

sealed class AddEditCardEvent {
  data class CardName(val value: String) : AddEditCardEvent()
  data class CardNumber(val value: String) : AddEditCardEvent()
  data class CardValidFrom(val value: String) : AddEditCardEvent()
  data class CardExpirdEnd(val value: String) : AddEditCardEvent()
  data class CardCvv(val value: String) : AddEditCardEvent()
  data class CardPin(val value: String) : AddEditCardEvent()
  data class CardInfo(val value: String) : AddEditCardEvent()
  object SaveCard : AddEditCardEvent()
}