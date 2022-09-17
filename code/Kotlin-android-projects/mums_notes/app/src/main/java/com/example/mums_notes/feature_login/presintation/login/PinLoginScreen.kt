package com.example.mums_notes.feature_login.presintation.login

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.example.mums_notes.Components.ScreenHeader
import com.example.mums_notes.feature_keyboard.components.NumberKeyboard
import com.example.mums_notes.feature_login.presintation.login.components.LoginFooter
import com.example.mums_notes.feature_login.presintation.login.components.PasswordInputValue

@Composable
fun PinLoginScreen(
  navController: NavController,
  route: String,
) {
  Column(
    modifier = Modifier
      .background(MaterialTheme.colorScheme.background)
      .fillMaxSize(),
  ) {
    ScreenHeader(
      heading = "Enter Your Pin",
      subHeading = "Verification",
      modifier = Modifier
        .fillMaxWidth()
        .padding(top = 50.dp)
    )

    PasswordInputValue(
      modifier = Modifier
        .fillMaxWidth()
        .padding(start = 45.dp, end = 45.dp, top = 90.dp),
    )

    NumberKeyboard(
      navController = navController,
      route = route,
      modifier = Modifier
        .fillMaxWidth()
        .padding(start = 34.dp, end = 34.dp, top = 60.dp),
    )

    LoginFooter(
      modifier = Modifier
        .fillMaxWidth()
        .padding(top = 35.dp)
    )
  }
}
