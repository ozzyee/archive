package com.example.mums_notes.navigation.create_routes

import com.example.mums_notes.feature_cards.data_class.CardData
import com.example.mums_notes.feature_cards.presentation.cards.AddEditCardViewmodel
import com.example.mums_notes.navigation.Screen


fun createCardRoute(data: AddEditCardViewmodel): String {
  val card = CardData(
    CardName = data.cardName.value.text,
    CardNumber = data.cardNumber.value.text,
    ValidFrom = data.cardValidFrom.value.text,
    ExpiryEnd = data.cardExpires.value.text,
    Cvv = data.cardCvv.value.text,
    Pin = data.cardPin.value.text,
    ExtraInfo = data.cardExtraInfo.value.text
  )

  val cardName = if (card.CardName?.isNotEmpty() == true) card.CardName else ""

  val cardNumber =
    if (card.CardNumber?.isNotEmpty() == true) card.CardNumber else ""

  val validFrom = if (card.ValidFrom?.isNotEmpty() == true) card.ValidFrom else ""

  val expiryEnd = if (card.ExpiryEnd?.isNotEmpty() == true) card.ExpiryEnd else ""

  val cvv = if (card.Cvv?.isNotEmpty() == true) card.Cvv else ""

  val pin = if (card.Pin?.isNotEmpty() == true) card.Pin else ""

  val extraInfo = if (card.ExtraInfo?.isNotEmpty() == true) card.ExtraInfo else ""


  val querylink =
    "?cardName=${cardName}&cardNumber=${cardNumber}&validFrom=${validFrom}&expiryEnd=${expiryEnd}&cvv=${cvv}&pin=${pin}&extraInfo=${extraInfo}"

  return Screen.CreateCardScreen.router + querylink
}