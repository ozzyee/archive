@file:Suppress("OPT_IN_IS_NOT_ENABLED")

package com.example.mums_notes.feature_landing_screen

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.example.mums_notes.feature_landing_screen.components.AuthFooter
import com.example.mums_notes.feature_landing_screen.components.IconHeader
import com.example.mums_notes.feature_landing_screen.components.LoginOptions

@Composable
fun LandingScreen(
  logo: Int,
  googleIcon: Int,
  facebookIcon: Int,
  navController: NavController,
  googleLogin: () -> Unit,
  facebookLogin: () -> Unit,
) {
  Column(modifier = Modifier
    .fillMaxSize()
    .background(MaterialTheme.colorScheme.background)) {

    Spacer(modifier = Modifier.height(80.dp))
    IconHeader(logo)

    Column(
      modifier = Modifier
        .fillMaxWidth()
    ) {
      LoginOptions(modifier = Modifier
        .padding(26.dp)
        .fillMaxWidth()
        .weight(1f), navController)
      AuthFooter(
        googleIcon = googleIcon,
        facebookIcon = facebookIcon,
        googleLogin = googleLogin,
        facebookLogin = facebookLogin)
    }
  }
}