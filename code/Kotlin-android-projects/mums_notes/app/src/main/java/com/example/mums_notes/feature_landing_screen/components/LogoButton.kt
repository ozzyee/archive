package com.example.mums_notes.feature_landing_screen.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LogoButton(logo: Int, onClick: () -> Unit = {}) {
  Button(
    onClick = onClick,
    colors = ButtonDefaults.buttonColors(
      containerColor = Color.Transparent
    )
  ) {
    Card(
      modifier = Modifier.size(34.dp),
      colors = CardDefaults.cardColors(Color.Transparent),
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