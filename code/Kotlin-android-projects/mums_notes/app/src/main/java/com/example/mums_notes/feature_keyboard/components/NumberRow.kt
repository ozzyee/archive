package com.example.mums_notes.feature_login.presintation.login.components

import androidx.compose.foundation.layout.*
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.mums_notes.feature_keyboard.components.BounceButton

@Composable
fun NumberRow(
  firstItem: String,
  secondItem: String,
  thirdItem: String,
  onButtonClick: (item: String) -> Unit,
) {
  Row(
    modifier = Modifier
      .width(400.dp)
      .height(95.dp)
  ) {
    Box(
      modifier = Modifier
        .weight(1f)
        .padding(start = 10.dp, end = 10.dp)
    ) {
      BounceButton(
        onClick = {
          onButtonClick(firstItem)
        }
      ) {
        Text(
          text = firstItem,
          textAlign = TextAlign.Center,
          color = MaterialTheme.colorScheme.secondary,
          fontSize = 28.sp,
          modifier = Modifier
            .fillMaxSize()
            .wrapContentHeight()
        )
      }
    }

    Box(
      modifier = Modifier
        .weight(1f)
        .padding(start = 10.dp, end = 10.dp)
    ) {
      BounceButton(
        onClick = {
          onButtonClick(secondItem)
        },
      ) {
        Text(
          text = secondItem,
          textAlign = TextAlign.Center,
          color = MaterialTheme.colorScheme.secondary,
          fontSize = 28.sp,
          modifier = Modifier
            .fillMaxSize()
            .wrapContentHeight()
        )
      }
    }

    Box(
      modifier = Modifier
        .weight(1f)
        .padding(start = 10.dp, end = 10.dp)
    ) {
      BounceButton(
        onClick = {
          onButtonClick(thirdItem)
        },
      ) {
        Text(
          text = thirdItem,
          textAlign = TextAlign.Center,
          color = MaterialTheme.colorScheme.secondary,
          fontSize = 28.sp,
          modifier = Modifier
            .fillMaxSize()
            .wrapContentHeight()
        )
      }
    }
  }
}