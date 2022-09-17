package com.example.mums_notes.feature_cards.data_class

data class CardData(
  val CardName: String? = "",
  val CardNumber: String? = "",
  val ValidFrom: String? = "",
  val ExpiryEnd: String? = "",
  val Cvv: String? = "",
  val Pin: String? = "",
  val ExtraInfo: String? = "",
  val id: Int? = null,
)