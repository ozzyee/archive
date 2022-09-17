package com.example.mums_notes.feature_home.presintation.components

import android.util.Log
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.mums_notes.R

@Composable
@Preview()
fun MiniCards(selecteedCardName: String = "") {
  val configuration = LocalConfiguration.current
  val screenWidth = configuration.screenWidthDp - 40
  val cardSize = screenWidth / 2

  var cardImage by remember { mutableStateOf(R.drawable.zopa_card) }

  when (selecteedCardName) {
    "ZOPA" -> cardImage = R.drawable.zopa
    "NatWest" -> cardImage = R.drawable.nat_west
    "Capital One Green Corner" -> cardImage = R.drawable.capital_one
    else -> {
      Log.w("CARDS", "there wasn't a card with this name!")
    }
  }

  Image(
    painter = painterResource(cardImage),
    contentDescription = "Content description for visually impaired",
    modifier = Modifier
      .width(cardSize.dp)
      .clip(RoundedCornerShape(20.dp))
  )
}
