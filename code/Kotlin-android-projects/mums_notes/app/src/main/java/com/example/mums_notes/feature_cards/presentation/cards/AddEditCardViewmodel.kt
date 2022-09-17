package com.example.mums_notes.feature_cards.presentation.cards


//import com.example.mums_notes.feature_cards.domain.use_case.CardUseCase
import android.util.Log
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.mums_notes.feature_cards.domain.model.Card
import com.example.mums_notes.feature_cards.domain.use_case.CardUseCase
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class AddEditCardViewmodel @Inject constructor(
  private val cardUseCase: CardUseCase, savedStateHandle: SavedStateHandle,
) : ViewModel() {

  private val _cardName = mutableStateOf(
    CardTextFieldsState(
      label = "Card Name",
      text = ""
    )
  )
  val cardName: State<CardTextFieldsState> = _cardName

  private val _cardNumber = mutableStateOf(
    CardTextFieldsState(
      label = "Card Number"
    )
  )
  val cardNumber: State<CardTextFieldsState> = _cardNumber

  private val _cardValidFrom = mutableStateOf(
    CardTextFieldsState(
      label = "Valid From"
    )
  )
  val cardValidFrom: State<CardTextFieldsState> = _cardValidFrom

  private val _cardExpires = mutableStateOf(
    CardTextFieldsState(
      label = "Expires End"
    )
  )
  val cardExpires: State<CardTextFieldsState> = _cardExpires

  private val _cardCvv = mutableStateOf(
    CardTextFieldsState(
      label = "CVV"
    )
  )
  val cardCvv: State<CardTextFieldsState> = _cardCvv

  private val _cardPin = mutableStateOf(
    CardTextFieldsState(
      label = "Pin"
    )
  )
  val cardPin: State<CardTextFieldsState> = _cardPin

  private val _cardExtraInfo = mutableStateOf(
    CardTextFieldsState(
      label = "Extra Info"
    )
  )
  val cardExtraInfo: State<CardTextFieldsState> = _cardExtraInfo

  private var currentNoteId: Int? = null


  fun onEvent(event: AddEditCardEvent) {
    when (event) {
      is AddEditCardEvent.CardName -> {
        _cardName.value = cardName.value.copy(
          text = event.value,
        )
      }
      is AddEditCardEvent.CardNumber -> {
        _cardNumber.value = cardNumber.value.copy(
          text = event.value
        )
      }
      is AddEditCardEvent.CardValidFrom -> {
        _cardValidFrom.value = cardValidFrom.value.copy(
          text = event.value
        )
      }
      is AddEditCardEvent.CardExpirdEnd -> {
        _cardExpires.value = cardExpires.value.copy(
          text = event.value
        )
      }
      is AddEditCardEvent.CardCvv -> {
        _cardCvv.value = cardCvv.value.copy(
          text = event.value
        )
      }
      is AddEditCardEvent.CardPin -> {
        _cardPin.value = cardPin.value.copy(
          text = event.value
        )
      }
      is AddEditCardEvent.CardInfo -> {
        _cardExtraInfo.value = cardExtraInfo.value.copy(
          text = event.value
        )
      }
      is AddEditCardEvent.SaveCard -> {
        viewModelScope.launch {
          try {
            Log.d("CARDS", "SAVE")

            cardUseCase.addCard(
              Card(
                cardName = "1",
                cardNumber = "2",
                validFrom = "3",
                expiryEnd = "4",
                cvv = "5",
                pin = "6",
                extraInfo = "7",
                timestamp = System.currentTimeMillis(),
                id = currentNoteId
              )
            )
          } catch (e: Exception) {
            Log.e("CARDS", "the error -> $e")
          }
        }
      }
    }
  }
}