package com.example.mums_notes.Components

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
fun ScreenHeader(modifier: Modifier = Modifier, heading: String, subHeading: String) {
  Column(
    modifier = modifier
  ) {
    Text(
      text = subHeading,
      fontSize = 18.6.sp,
      textAlign = TextAlign.Center,
      modifier = Modifier
        .fillMaxWidth(),
      color = MaterialTheme.colorScheme.surface
    )
    Text(
      text = heading, fontSize = 24.sp,
      textAlign = TextAlign.Center,
      fontWeight = FontWeight.Bold,
      modifier = Modifier
        .fillMaxWidth(),
      color = MaterialTheme.colorScheme.secondary
    )
  }
}