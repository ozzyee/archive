@file:Suppress("OPT_IN_IS_NOT_ENABLED")

package com.example.mums_notes.feature_cards.presentation.cards

import android.annotation.SuppressLint
import android.view.ViewTreeObserver
import androidx.activity.OnBackPressedDispatcher
import androidx.activity.compose.LocalOnBackPressedDispatcherOwner
import androidx.compose.foundation.*
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.relocation.BringIntoViewRequester
import androidx.compose.material.Scaffold
import androidx.compose.material.TopAppBar
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalView
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.zIndex
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.example.mums_notes.feature_cards.data_class.CardData
import com.example.mums_notes.feature_cards.presentation.cards.HelperFunctions.checkCardInfo
import com.example.mums_notes.feature_cards.presentation.cards.components.CardForm
import com.example.mums_notes.feature_cards.presentation.cards.components.CardSelector
import com.example.mums_notes.feature_cards.presentation.cards.components.DropdownMenue
import com.google.gson.Gson
import kotlinx.coroutines.launch

@OptIn(ExperimentalFoundationApi::class)
@SuppressLint("UnusedMaterialScaffoldPaddingParameter")
@Composable
fun AddEditCardsScreen(
//  ROUTE ARGS
  cardName: String?,
  cardNumber: String?,
  cardValidFrom: String?,
  cardExpiryEnd: String?,
  cardCvv: String?,
  cardPin: String?,
  cardExtraInfo: String?,
//  OTHER ARGS
  viewModel: AddEditCardViewmodel = hiltViewModel(),
  backPressedDispatcher: OnBackPressedDispatcher? =
    LocalOnBackPressedDispatcherOwner.current?.onBackPressedDispatcher,
  navController: NavHostController,
  callback: (AddEditCardViewmodel) -> Unit,
) {
  callback.invoke(viewModel)

  val cardsList = listOf("Capital One Green Corner", "NatWest", "ZOPA")
  val map = HashMap<String, String>()
  val jsonString = (map as Map<*, *>?)?.let { Gson().toJson(map).toString() }
  var isValidCardData by remember { mutableStateOf(jsonString) }
  var cardErrorMessage by remember { mutableStateOf(jsonString) }
  var selecteedCardName by remember { mutableStateOf("") }

// *  Card form data
  val cardData = object {
    val cardNumberValue = viewModel.cardNumber.value.text
    val cardValidFromValue = viewModel.cardValidFrom.value.text
    val cardExpireValue = viewModel.cardExpires.value.text
    val cardCvv = viewModel.cardCvv.value.text
    val cardPin = viewModel.cardPin.value.text
    val extraCardInfo = viewModel.cardExtraInfo.value.text
  }


  val cardDataFromLink = CardData(
    CardName = if (cardName?.isNotEmpty() == true) cardName else "",
    CardNumber = if (cardNumber?.isNotEmpty() == true) cardNumber else "",
    ValidFrom = if (cardValidFrom?.isNotEmpty() == true) cardValidFrom else "",
    ExpiryEnd = if (cardExpiryEnd?.isNotEmpty() == true) cardExpiryEnd else "",
    Cvv = if (cardCvv?.isNotEmpty() == true) cardCvv else "",
    Pin = if (cardPin?.isNotEmpty() == true) cardPin else "",
    ExtraInfo = if (cardExtraInfo?.isNotEmpty() == true) cardExtraInfo else ""
  )
//  Log.d("CardForm", "data cardDataFromLink -=>$cardName")


  val bringIntoViewRequester = remember { BringIntoViewRequester() }
  val scope = rememberCoroutineScope()
  val view = LocalView.current
  DisposableEffect(view) {
    val listener = ViewTreeObserver.OnGlobalLayoutListener {
      scope.launch { bringIntoViewRequester.bringIntoView() }
    }
    view.viewTreeObserver.addOnGlobalLayoutListener(listener)
    onDispose { view.viewTreeObserver.removeOnGlobalLayoutListener(listener) }
  }


  Scaffold(
    backgroundColor = MaterialTheme.colorScheme.background,
    contentColor = Color.White,
    topBar = {
      TopAppBar(
        backgroundColor = MaterialTheme.colorScheme.background, elevation = 1.dp
      ) {
        Box(
          modifier = Modifier
            .fillMaxWidth()
            .padding(start = 16.dp, top = 12.dp, bottom = 12.dp, end = 16.dp)
        ) {
          Text(
            modifier = Modifier.align(Alignment.TopStart),
            text = "Add New Card",
            fontSize = 25.sp,
            fontWeight = FontWeight.Bold,
            color = MaterialTheme.colorScheme.secondary
          )
          Text(
            modifier = Modifier
              .align(Alignment.TopEnd)
              .padding(end = 0.dp)
              .clickable {
                checkCardInfo(
                  cardsNumber = cardData.cardNumberValue,
//                  cardValidFrom = cardData.cardValidFromValue,
                  cardExpires = cardData.cardExpireValue,
                  cardCvv = cardData.cardCvv,
                  cardPin = cardData.cardPin
                ) { isValid, errorMessage, canSaveData ->
                  if (canSaveData == true) {
                    viewModel.onEvent(AddEditCardEvent.SaveCard)
                    navController.navigateUp()
                  }
                  isValidCardData = isValid
                  cardErrorMessage = errorMessage
                }
              },
            text = "Save",
            fontSize = 19.sp,
            color = MaterialTheme.colorScheme.primary,
          )
        }
      }
    }) {
    Column(
      modifier = Modifier
        .verticalScroll(rememberScrollState())
        .height(1130.dp)
    ) {
      Column(
        Modifier
          .height(600.dp)
          .zIndex(1f)
      ) {

        Column(
          modifier = Modifier
            .background(Color.Transparent)
            .padding(16.dp)
            .height(250.dp)
            .zIndex(1f)
            .fillMaxWidth()
        ) {
          DropdownMenue(cardsList, "Select a card") { cardName, _ ->
            selecteedCardName = cardName
          }
        }

        Box(
          modifier = Modifier
            .fillMaxWidth()
            .offset(y = (-191).dp)
        ) {
          Box(Modifier.align(Alignment.Center)) {
            CardSelector(
              selecteedCardName = selecteedCardName,
              cardNumber = cardData.cardNumberValue,
              cardStart = cardData.cardValidFromValue,
              cardEnd = cardData.cardExpireValue
            )
          }
        }
      }

      Column(
        Modifier
          .fillMaxWidth()
          .zIndex(3f)
          .offset(y = (-261).dp)
      ) {
        CardForm(viewModel, isValidCardData, cardErrorMessage, cardDataFromLink)
      }
    }
  }
}