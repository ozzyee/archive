package com.example.mums_notes.feature_login.presintation.login.components

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.sp

@Composable
fun LoginFooter(modifier: Modifier = Modifier) {
  Column(
    modifier = modifier,
  ) {
    Text(
      color = MaterialTheme.colorScheme.primary,
      text = "Can’t login?",
      textAlign = TextAlign.Center,
      modifier = Modifier.fillMaxWidth(),
      fontSize = 18.5.sp,
      fontWeight = FontWeight.Light
    )
  }
}