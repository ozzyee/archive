package com.example.mums_notes.feature_landing_screen.components

import androidx.compose.foundation.border
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun CustomButton(text: String, onClick: () -> Unit, modifier: Modifier = Modifier) {
  val appBackgroundColor = MaterialTheme.colorScheme.background
  val primaryColor = MaterialTheme.colorScheme.primary
  var backgroundColor by remember { mutableStateOf(appBackgroundColor) }
  var textColor by remember { mutableStateOf(primaryColor) }
  var buttonSize by remember { mutableStateOf(1f) }

  val interactionSource = remember { MutableInteractionSource() }
  val isPressed by interactionSource.collectIsPressedAsState()


  if (isPressed) {
    backgroundColor = primaryColor
    textColor = Color.White
    buttonSize = 0.99f

    DisposableEffect(Unit) {
      onDispose {
        backgroundColor = appBackgroundColor
        textColor = primaryColor
        buttonSize = 1f
      }
    }
  }




  Column(modifier = modifier) {
    Button(modifier = Modifier
      .scale(buttonSize)
      .align(Alignment.CenterHorizontally)
      .fillMaxSize()
      .border(
        width = 2.dp,
        color = MaterialTheme.colorScheme.primary,
        shape = RoundedCornerShape(50),
      ),
      interactionSource = interactionSource,
      colors = ButtonDefaults.buttonColors(containerColor = backgroundColor),
      onClick = onClick) {
      Text(modifier = Modifier.scale(buttonSize),
        text = text,
        color = textColor,
        fontSize = 18.sp)
    }
  }
}

