package com.example.mums_notes.feature_cards.presentation.cards.DataClasses

import com.google.gson.annotations.SerializedName

data class CardDataValid(
  @SerializedName("isValidCardExpiry") val isValidCardExpiry: Boolean = true,
  @SerializedName("isValidCardValidFrom") val isValidCardValidFrom: Boolean = true,
  @SerializedName("isValidCardCvv") val isValidCardCvv: Boolean = true,
  @SerializedName("isValidCardPin") val isValidCardPin: Boolean = true,
  @SerializedName("isValidCardNumber") val isValidCardNumber: Boolean = true
)
