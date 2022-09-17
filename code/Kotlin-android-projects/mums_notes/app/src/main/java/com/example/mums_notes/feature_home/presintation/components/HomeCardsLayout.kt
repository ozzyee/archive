package com.example.mums_notes.feature_home.presintation.components

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.expandVertically
import androidx.compose.animation.shrinkVertically
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.google.accompanist.flowlayout.FlowRow

@Composable
fun HomeCardsLayout(cards: List<String>) {
  var showAllCards by remember { mutableStateOf(false) }

  Column(

  ) {
    FlowRow(
      mainAxisSpacing = 8.dp,
      crossAxisSpacing = 8.dp,
    ) {
      cards.take(4).forEach { _ ->
        MiniCards()
      }
    }

    AnimatedVisibility(
      visible = showAllCards, enter = expandVertically(), exit = shrinkVertically()
    ) {
      FlowRow(
        mainAxisSpacing = 8.dp,
        crossAxisSpacing = 8.dp,
        modifier = Modifier.padding(top = 8.dp, bottom = 10.dp)
      ) {

        cards.slice(4 until cards.size).forEach { _ ->
          MiniCards()
        }
      }
    }
    if (cards.size > 4) {
      Button(
        onClick = { showAllCards = !showAllCards },
        modifier = Modifier
          .fillMaxWidth()
          .padding(top = 5.dp)
      ) {
        Text(text = if (!showAllCards) "See All Cards" else "Hide All Cards", color = Color.White)
      }
    }
  }
}