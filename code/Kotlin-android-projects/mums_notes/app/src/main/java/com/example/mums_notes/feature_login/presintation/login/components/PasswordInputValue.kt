package com.example.mums_notes.feature_login.presintation.login.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.mums_notes.feature_keyboard.KeyboardViewmodel

@Composable
fun PasswordInputValue(
  modifier: Modifier = Modifier,
  viewModel: KeyboardViewmodel = hiltViewModel()
) {
  val password = viewModel.input.value.input
  val passwordSplit = password.split("")

  val firstNumber = if (passwordSplit.size > 1) passwordSplit[1] else ""
  val secondNumber = if (passwordSplit.size > 2) passwordSplit[2] else ""
  val thirdNumber = if (passwordSplit.size > 3) passwordSplit[3] else ""
  val fourthNumber = if (passwordSplit.size > 4) passwordSplit[4] else ""



  Row(
    modifier = modifier, horizontalArrangement = Arrangement.SpaceBetween
  ) {
    InputValueTile(firstNumber)
    InputValueTile(secondNumber)
    InputValueTile(thirdNumber)
    InputValueTile(fourthNumber)
  }
}