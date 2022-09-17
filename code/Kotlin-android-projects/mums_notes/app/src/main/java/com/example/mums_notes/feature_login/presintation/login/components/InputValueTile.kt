@file:Suppress("OPT_IN_IS_NOT_ENABLED")

package com.example.mums_notes.feature_login.presintation.login.components

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import java.util.*
import kotlin.concurrent.schedule

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun InputValueTile(value: String = "") {
  var number by remember { mutableStateOf("") }
  val defaultColor = MaterialTheme.colorScheme.surface
  var color by remember { mutableStateOf(defaultColor) }

  number = value.ifBlank { "0" }


  if (value.isNotBlank()) {
    color = MaterialTheme.colorScheme.secondary
    Timer("SettingUp", false).schedule(340) {
      number = "*"
    }
  } else {
    color = defaultColor
  }



  Card(
    modifier = Modifier
      .width(70.dp)
      .height(70.dp),
    colors = CardDefaults.cardColors(MaterialTheme.colorScheme.tertiary),
    elevation = CardDefaults.cardElevation(8.dp),
    shape = RoundedCornerShape(4.dp),
  ) {
    Text(
      text = number,
      textAlign = TextAlign.Center,
      fontSize = 26.sp,
      color = color,
      modifier = Modifier
        .fillMaxSize()
        .wrapContentHeight()
    )
  }
}
