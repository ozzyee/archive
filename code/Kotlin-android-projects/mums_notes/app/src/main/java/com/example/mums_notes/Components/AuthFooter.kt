package com.example.mums_notes.feature_landing_screen.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp

@Composable
fun AuthFooter(
  googleIcon: Int,
  facebookIcon: Int,
  googleLogin: () -> Unit = {},
  facebookLogin: () -> Unit = {},
) {

  Column(
    modifier = Modifier
      .fillMaxWidth()
      .height(150.dp)
  ) {
    Box(modifier = Modifier) {
      Spacer(modifier = Modifier
        .padding(top = 12.dp, end = 30.dp, start = 30.dp)
        .fillMaxWidth()
        .height(2.dp)
        .border(2.dp, MaterialTheme.colorScheme.primary))

      Box(modifier = Modifier
        .fillMaxWidth(),
        contentAlignment = Alignment.Center
      ) {
        Text(text = "Or",
          color = MaterialTheme.colorScheme.primary,
          textAlign = TextAlign.Center,
          modifier = Modifier
            .background(MaterialTheme.colorScheme.background)
            .width(30.dp))
      }

      Row(modifier = Modifier
        .fillMaxSize(),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.Center
      ) {
        LogoButton(googleIcon, onClick = {
          googleLogin()
        })
        LogoButton(facebookIcon, onClick = {
          facebookLogin()
        })
      }
    }
  }
}