package com.example.mums_notes.feature_cards.presentation.cards.DataClasses

import com.google.gson.annotations.SerializedName

data class CardDataErrors(
  @SerializedName("isValidCardNumberErrorMsg") val isValidCardNumberErrorMsg: String = "",
  @SerializedName("isValidCardValidFromErrorMsg") val isValidCardValidFromErrorMsg: String = "",
  @SerializedName("isValidCardExpiryErrorMsg") val isValidCardExpiryErrorMsg: String = "",
  @SerializedName("isValidCardCvvErrorMsg") val isValidCardCvvErrorMsg: String = "",
  @SerializedName("isValidCardPinErrorMsg") val isValidCardPinErrorMsg: String = "",

  )
