package com.example.mums_notes.feature_multi_floating_action_button.components

import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Add
import androidx.compose.material3.Icon
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

@Composable
fun MiniFloatingActionButton(modifier: Modifier = Modifier, onClick: () -> Unit) {
  Button(modifier = modifier
    .size(50.dp),
    shape = RoundedCornerShape(50),
    colors = ButtonDefaults.outlinedButtonColors(backgroundColor = androidx.compose.material3.MaterialTheme.colorScheme.primary),
    onClick = { onClick() }
  ) {
    Icon(
      Icons.Outlined.Add,
      contentDescription = "Add Content",
      tint = Color.White,
      modifier = Modifier
        .size(26.dp)
    )
  }
}