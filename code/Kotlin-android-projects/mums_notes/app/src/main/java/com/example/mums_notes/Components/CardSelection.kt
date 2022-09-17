package com.example.mums_notes.feature_cards.presentation.cards.components

import android.util.Log
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.zIndex
import com.example.mums_notes.R

@Composable
fun CardSelector(
  selecteedCardName: String = "ZOPA",
  cardNumber: String = "",
  cardStart: String = "",
  cardEnd: String = "",
) {
  var cardImage by remember { mutableStateOf(R.drawable.zopa_card) }
  var cardStartText by remember { mutableStateOf("") }
  var cardExpiresText by remember { mutableStateOf("") }
  cardStartText = if (cardStart.isNotEmpty()) "VALID FROM >" else ""
  cardExpiresText = if (cardEnd.isNotEmpty()) "Expires End >" else ""
  val startDate = convertDateString(cardStart)
  val expiryDate = convertDateString(cardEnd)

  var cardNumberOutput = ""
  for (i in cardNumber.indices) {
    cardNumberOutput += cardNumber[i]
    if (i == 3 || i == 7 || i == 11) cardNumberOutput += "  "
  }


  when (selecteedCardName) {
    "ZOPA" -> cardImage = R.drawable.zopa
    "NatWest" -> cardImage = R.drawable.nat_west
    "Capital One Green Corner" -> cardImage = R.drawable.capital_one
    else -> {
      Log.w("CARDS", "there wasn't a card with this name!")
    }
  }

  Box {
    Image(
      painter = painterResource(cardImage),
      contentDescription = "Content description for visually impaired",
      modifier = Modifier
        .width(360.dp)
        .height(226.dp)
        .align(Alignment.Center)
        .clip(RoundedCornerShape(20.dp))
    )
    Box(
      Modifier
        .width(360.dp)
        .height(105.dp)
        .zIndex(2f)
        .align(Alignment.BottomCenter)
    ) {
      Text(
        text = cardNumberOutput,
        color = Color(0xFFE7E7E7),
        fontSize = 24.sp,
        modifier = Modifier.align(Alignment.TopCenter)
      )

      Column(
        Modifier
          .padding(top = 38.dp, start = 44.dp)
      ) {
        Text(text = cardStartText, fontSize = 9.sp, color = Color.White)
        Text(text = startDate, fontSize = 16.sp, color = Color.White)
      }

      Column(
        Modifier
          .padding(top = 38.dp, start = 124.dp)
      ) {
        Text(text = cardExpiresText, fontSize = 9.sp, color = Color.White)
        Text(text = expiryDate, fontSize = 16.sp, color = Color.White)
      }
    }
  }
}

fun convertDateString(date: String): String {
  var convertedDate = ""
  for (i in date.indices) {
    convertedDate += date[i]
    if (i == 1) convertedDate += "/"
  }
  return convertedDate
}