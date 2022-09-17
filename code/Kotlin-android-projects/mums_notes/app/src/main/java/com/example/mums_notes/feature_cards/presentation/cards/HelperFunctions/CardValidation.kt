package com.example.mums_notes.feature_cards.presentation.cards.HelperFunctions

import android.util.Log
import com.google.gson.Gson

fun checkCardInfo(
  cardsNumber: String,
//  cardValidFrom: String,
  cardExpires: String,
  cardCvv: String,
  cardPin: String,
  callback: (isValidCardData: String?, errorMessages: String?, canSaveData: Boolean?) -> Unit
) {
  val isValidCardData: HashMap<String, Boolean> = HashMap()
  val errorMessages: HashMap<String, String> = HashMap()

  isValidCardData["isValidCardNumber"] =
    containsOnlyNumbers(cardsNumber) && cardsNumber.length == 16
  errorMessages["isValidCardNumberErrorMsg"] = if (cardsNumber.isBlank()) {
    "Enter card number"
  } else if (!containsOnlyNumbers(cardsNumber)) {
    "invalid card number"
  } else if (cardsNumber.length < 16) {
    "too short"
  } else {
    ""
  }

//  isValidCardData["isValidCardValidFrom"] =
//    containsOnlyNumbers(cardValidFrom) && cardValidFrom.length == 4
//  errorMessages["isValidCardValidFromErrorMsg"] = if (cardValidFrom.isBlank()) {
//    "Enter date"
//  } else if (!containsOnlyNumbers(cardValidFrom)) {
//    "invalid Date"
//  } else if (cardValidFrom.length < 4) {
//    "too short"
//  } else {
//    ""
//  }

  isValidCardData["isValidCardExpiry"] = containsOnlyNumbers(cardExpires) && cardExpires.length == 4
  errorMessages["isValidCardExpiryErrorMsg"] = if (cardExpires.isBlank()) {
    "Enter date"
  } else if (!containsOnlyNumbers(cardExpires)) {
    "invalid Date"
  } else if (cardExpires.length < 4) {
    "too short"
  } else {
    ""
  }

  isValidCardData["isValidCardCvv"] = containsOnlyNumbers(cardCvv) && cardCvv.length == 3
  errorMessages["isValidCardCvvErrorMsg"] = if (cardCvv.isBlank()) {
    "Enter CVV"
  } else if (!containsOnlyNumbers(cardCvv)) {
    "invalid CVV"
  } else if (cardCvv.length < 3) {
    "too short"
  } else {
    ""
  }

  isValidCardData["isValidCardPin"] = containsOnlyNumbers(cardPin) && cardPin.length == 4
  errorMessages["isValidCardPinErrorMsg"] = if (cardPin.isBlank()) {
    "Enter pin"
  } else if (!containsOnlyNumbers(cardPin)) {
    "invalid pin"
  } else if (cardPin.length < 4) {
    "too short"
  } else {
    ""
  }

  val canSaveData = isValidCardData["isValidCardExpiry"] == true &&
          isValidCardData["isValidCardCvv"] == true &&
          isValidCardData["isValidCardPin"] == true &&
          isValidCardData["isValidCardNumber"] == true

  Log.d("CARDS", "is card valid  exp -> ${isValidCardData["isValidCardCvv"] == true}")



  callback.invoke(
    Gson().toJson(isValidCardData).toString(), Gson().toJson(errorMessages).toString(), canSaveData
  )
}

fun containsOnlyNumbers(value: String): Boolean {
  val patten = Regex("^(0|[1-9][0-9]*)\$")
  return patten.containsMatchIn(value)
}