@file:Suppress("OPT_IN_IS_NOT_ENABLED")

package com.example.mums_notes.feature_landing_screen.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Card
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun IconHeader(logo: Int) {
  Box(modifier = Modifier
    .fillMaxWidth(),
    contentAlignment = Alignment.Center
  ) {
    Card(
      modifier = Modifier.size(180.dp),
      shape = RoundedCornerShape(10),
    ) {
      Image(
        painter = painterResource(logo),
        contentDescription = "logo",
        alignment = Alignment.Center,
        contentScale = ContentScale.Crop,
        modifier = Modifier.fillMaxSize()
      )
    }
  }
}