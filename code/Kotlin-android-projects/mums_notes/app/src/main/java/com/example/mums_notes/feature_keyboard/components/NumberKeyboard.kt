@file:Suppress("OPT_IN_IS_NOT_ENABLED")

package com.example.mums_notes.feature_keyboard.components

import android.util.Log
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Backspace
import androidx.compose.material.icons.outlined.Fingerprint
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavController
import com.example.mums_notes.feature_keyboard.KeyboardEvent
import com.example.mums_notes.feature_keyboard.KeyboardViewmodel
import com.example.mums_notes.feature_login.presintation.login.components.NumberRow

@Composable
fun NumberKeyboard(
  navController: NavController,
  route: String,
  modifier: Modifier = Modifier,
  viewModel: KeyboardViewmodel = hiltViewModel(),
) {
  Log.d("NumberKeyboard", "route -> $route")
  var passwordInput by remember { mutableStateOf("") }
  viewModel.onEvent(KeyboardEvent.Input(passwordInput))
  viewModel.onEvent(KeyboardEvent.IsDisabled(passwordInput.length >= 4))

  fun checkPassword(lastChar: String) {
    val password = passwordInput + lastChar
    val tempPassword = "1234"

    if (passwordInput.length == 3 && password == tempPassword) {
      navController.popBackStack()
      navController.navigate(route)
    }
  }

  Column(
    modifier = modifier,
  ) {

    NumberRow(
      "1", "2", "3",
      onButtonClick = {
        checkPassword(it)
        passwordInput += it
      },
    )

    NumberRow(
      "4",
      "5",
      "6",
      onButtonClick = {
        checkPassword(it)
        passwordInput += it
      },
    )

    NumberRow(
      "7",
      "8",
      "9",
      onButtonClick = {
        checkPassword(it)
        passwordInput += it
      },
    )

    Row(
      modifier = Modifier
        .width(400.dp)
        .height(95.dp)
    ) {
      Box(
        modifier = Modifier
          .weight(1f)
          .padding(start = 10.dp, end = 10.dp)
      ) {
        BounceButton(
          onClick = {
            passwordInput = passwordInput.dropLast(1)
          },
        ) {
          Icon(
            Icons.Outlined.Fingerprint,
            contentDescription = "",
            tint = MaterialTheme.colorScheme.secondary,
            modifier = Modifier
              .fillMaxSize()
              .wrapContentHeight()
              .height(30.dp)
          )
        }
      }

      Box(
        modifier = Modifier
          .weight(1f)
          .padding(start = 10.dp, end = 10.dp)
      ) {
        BounceButton(
          onClick = {
            checkPassword("0")
            passwordInput += "0"
          },
        ) {
          Text(
            text = "0",
            textAlign = TextAlign.Center,
            color = MaterialTheme.colorScheme.secondary,
            fontSize = 28.sp,
            modifier = Modifier
              .fillMaxSize()
              .wrapContentHeight()
          )
        }
      }

      Box(
        modifier = Modifier
          .weight(1f)
          .padding(start = 10.dp, end = 10.dp)
      ) {
        BounceButton(
          isIconButton = true,
          onClick = {
            passwordInput = passwordInput.dropLast(1)
          },
        ) {
          Icon(
            Icons.Outlined.Backspace,
            contentDescription = "",
            tint = MaterialTheme.colorScheme.secondary,
            modifier = Modifier
              .fillMaxSize()
              .wrapContentHeight()
          )
        }
      }
    }
  }
}

