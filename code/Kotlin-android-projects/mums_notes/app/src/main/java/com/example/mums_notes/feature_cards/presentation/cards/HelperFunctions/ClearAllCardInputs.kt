package com.example.mums_notes.feature_cards.presentation.cards.HelperFunctions

import com.example.mums_notes.feature_cards.presentation.cards.AddEditCardEvent
import com.example.mums_notes.feature_cards.presentation.cards.AddEditCardViewmodel

fun clearAllCardInputs(viewModel: AddEditCardViewmodel) {
  viewModel.onEvent(AddEditCardEvent.CardName(""))
  viewModel.onEvent(AddEditCardEvent.CardNumber(""))
  viewModel.onEvent(AddEditCardEvent.CardValidFrom(""))
  viewModel.onEvent(AddEditCardEvent.CardExpirdEnd(""))
  viewModel.onEvent(AddEditCardEvent.CardCvv(""))
  viewModel.onEvent(AddEditCardEvent.CardPin(""))
  viewModel.onEvent(AddEditCardEvent.CardInfo(""))
}