package com.example.mums_notes.feature_landing_screen.components

import androidx.compose.foundation.layout.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.example.mums_notes.navigation.Screen

@Composable
fun LoginOptions(modifier: Modifier = Modifier, navController: NavController) {
  Column(modifier = modifier,
    verticalArrangement = Arrangement.Center,
    horizontalAlignment = Alignment.CenterHorizontally
  ) {
    CustomButton(text = "Login", modifier = Modifier
      .height(58.dp)
      .width(630.dp), onClick = {
      navController.navigate(Screen.LoginFormScreen.router)
    })
    Spacer(modifier = Modifier.height(50.dp))
    CustomButton(text = "Register", modifier = Modifier
      .height(58.dp)
      .width(630.dp), onClick = {
      navController.navigate(Screen.RegisterScreen.router)
    })
  }
}

//