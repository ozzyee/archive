@file:Suppress("NAME_SHADOWING")

package com.example.mums_notes.feature_notes.presintation.add_edit_notes.components

import LightBlue
import LightGreen
import LightOrange
import LightRed
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.unit.dp


@Composable
fun ColorSelector(selectedColor: Color, selectedColors: (Int) -> Unit) {
  var selectedColor by remember { mutableStateOf(selectedColor.toArgb()) }
  selectedColors.invoke(selectedColor)

//  Log.d("selectedColor", "selectedColor -> ${}")

  Row() {
    ColorCircle(LightBlue, Color(selectedColor) == LightBlue) {
      selectedColor = it.toArgb()

    }

    Spacer(modifier = Modifier.width(16.dp))

    ColorCircle(LightGreen, Color(selectedColor) == LightGreen) {
      selectedColor = it.toArgb()
    }

    Spacer(modifier = Modifier.width(16.dp))

    ColorCircle(LightOrange, Color(selectedColor) == LightOrange) {
      selectedColor = it.toArgb()
    }

    Spacer(modifier = Modifier.width(16.dp))

    ColorCircle(LightRed, Color(selectedColor) == LightRed) {
      selectedColor = it.toArgb()
    }
  }
}

@Composable
fun ColorCircle(BackgroundColor: Color, isSelected: Boolean = false, onClick: (Color) -> Unit) {
  val selectedColor: Color = if (!isSelected) Color.Transparent else Color.Black

  Button(
    onClick = { onClick(BackgroundColor) },
    modifier = Modifier
      .width(55.dp)
      .height(55.dp)
      .border(2.dp, selectedColor, shape = RoundedCornerShape(50)),
    colors = ButtonDefaults.buttonColors(
      BackgroundColor
    ),
    shape = RoundedCornerShape(50),
  ) {}
}

