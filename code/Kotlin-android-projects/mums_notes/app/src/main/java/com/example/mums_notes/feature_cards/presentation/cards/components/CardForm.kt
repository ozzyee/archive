package com.example.mums_notes.feature_cards.presentation.cards.components

import androidx.compose.foundation.layout.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.mums_notes.Components.TextField
import com.example.mums_notes.feature_cards.data_class.CardData
import com.example.mums_notes.feature_cards.presentation.cards.AddEditCardEvent
import com.example.mums_notes.feature_cards.presentation.cards.AddEditCardViewmodel
import com.example.mums_notes.feature_cards.presentation.cards.DataClasses.CardDataErrors
import com.example.mums_notes.feature_cards.presentation.cards.DataClasses.CardDataValid
import com.google.gson.Gson

@Composable
fun CardForm(
  viewModel: AddEditCardViewmodel = hiltViewModel(),
  isValidCardData: String?,
  cardErrorMessage: String?,
  cardDataFromLink: CardData,
) {
  val isCardValid = Gson().fromJson(isValidCardData, CardDataValid::class.java)
  val cardErrorMessages = Gson().fromJson(cardErrorMessage, CardDataErrors::class.java)

  var cardName by remember { mutableStateOf("${cardDataFromLink.CardName}") }
  viewModel.onEvent(AddEditCardEvent.CardName(cardName))

  var cardNumber by remember { mutableStateOf("${cardDataFromLink.CardNumber}") }
  viewModel.onEvent(AddEditCardEvent.CardNumber(cardNumber))

  var cardValidFrom by remember { mutableStateOf("${cardDataFromLink.ValidFrom}") }
  viewModel.onEvent(AddEditCardEvent.CardValidFrom(cardValidFrom))

  var cardExpiredEnd by remember { mutableStateOf("${cardDataFromLink.ExpiryEnd}") }
  viewModel.onEvent(AddEditCardEvent.CardExpirdEnd(cardExpiredEnd))

  var cardCvv by remember { mutableStateOf("${cardDataFromLink.Cvv}") }
  viewModel.onEvent(AddEditCardEvent.CardCvv(cardCvv))

  var cardPin by remember { mutableStateOf("${cardDataFromLink.Pin}") }
  viewModel.onEvent(AddEditCardEvent.CardPin(cardPin))

  var cardInfo by remember { mutableStateOf("${cardDataFromLink.ExtraInfo}") }
  viewModel.onEvent(AddEditCardEvent.CardInfo(cardInfo))


  Column(
    modifier = Modifier
      .padding(top = 2.dp, start = 18.dp, end = 18.dp)

  ) {
    TextField(
      label = viewModel.cardName.value.label, modifier = Modifier.fillMaxWidth(),
      onChange = {
        cardName = it
      },
      text = cardName,
    )

    TextField(
      label = viewModel.cardNumber.value.label,
      modifier = Modifier
        .fillMaxWidth(),
      onChange = {
        cardNumber = it
      },
      text = cardNumber,
      keyboardType = KeyboardType.Number,
      translation = "bank",
      isError = !isCardValid.isValidCardNumber,
      errorMessage = cardErrorMessages.isValidCardNumberErrorMsg
    )

    Box(
      modifier = Modifier
        .fillMaxWidth()
        .padding(top = 2.dp)
    ) {
      Row() {
        Column(
          Modifier
            .weight(1f)
            .padding(end = 8.dp)
        ) {
          TextField(
            label = viewModel.cardValidFrom.value.label,
            modifier = Modifier.fillMaxWidth(),
            onChange = {
              cardValidFrom = it
            },
            text = cardValidFrom,
            keyboardType = KeyboardType.Number,
            translation = "date",
            isError = !isCardValid.isValidCardValidFrom,
            errorMessage = cardErrorMessages.isValidCardValidFromErrorMsg
          )
        }
        Column(
          Modifier
            .weight(1f)
            .padding(start = 8.dp)
        ) {

          TextField(
            label = viewModel.cardExpires.value.label,
            modifier = Modifier.fillMaxWidth(),
            onChange = {
              cardExpiredEnd = it
            },
            text = cardExpiredEnd,
            keyboardType = KeyboardType.Number,
            translation = "date",
            isError = !isCardValid.isValidCardExpiry,
            errorMessage = cardErrorMessages.isValidCardExpiryErrorMsg
          )
        }
      }
    }

    Box(
      modifier = Modifier
        .fillMaxWidth()
        .padding(top = 2.dp)
    ) {
      Row() {
        Column(
          Modifier
            .weight(1f)
            .padding(end = 8.dp)
        ) {
          TextField(
            label = viewModel.cardCvv.value.label,
            modifier = Modifier.fillMaxWidth(),
            onChange = {
              cardCvv = it
            },
            text = cardCvv,
            keyboardType = KeyboardType.Number,
            translation = "cvv",
            isError = !isCardValid.isValidCardCvv,
            secureInput = true,
            errorMessage = cardErrorMessages.isValidCardCvvErrorMsg
          )
        }
        Column(
          Modifier
            .weight(1f)
            .padding(start = 8.dp)
        ) {
          TextField(
            label = viewModel.cardPin.value.label,
            modifier = Modifier
              .fillMaxWidth(),
            onChange = {
              cardPin = it
            },
            text = cardPin,
            keyboardType = KeyboardType.Number,
            translation = "pin",
            secureInput = true,
            isError = !isCardValid.isValidCardPin,
            errorMessage = cardErrorMessages.isValidCardPinErrorMsg

          )
        }
      }

    }

    Box(
      modifier = Modifier
        .fillMaxWidth()
        .padding(top = 2.dp)
    ) {
      Column {
        TextField(
          label = viewModel.cardExtraInfo.value.label,
          modifier = Modifier
            .fillMaxWidth()
            .height(180.dp),
          isSingleLine = false,
          onChange = {
            cardInfo = it
          },
          text = cardInfo
        )
      }
    }
  }
}
