@file:Suppress("OPT_IN_IS_NOT_ENABLED")

package com.example.mums_notes.feature_cards.presentation.cards.components

import android.annotation.SuppressLint
import androidx.compose.animation.*
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.KeyboardArrowDown
import androidx.compose.material.icons.filled.KeyboardArrowUp
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.zIndex

@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@OptIn(ExperimentalMaterial3Api::class, ExperimentalAnimationApi::class)
@Composable
fun DropdownMenue(
  options: List<String>, label: String, callback: (cardName: String, selected: Boolean) -> Unit
) {
  var isOpen by remember { mutableStateOf(false) }
  var selecteedCard by remember { mutableStateOf(label) }
  val openMenuIcon = if (isOpen) Icons.Default.KeyboardArrowUp else Icons.Default.KeyboardArrowDown
  val listHeight = if (isOpen) 44.dp else 0.dp
  val dropdownTextColor =
    if (selecteedCard == "Select a card") Color(0xff8E8C94) else MaterialTheme.colorScheme.secondary


  fun getCardName(Card: String) {
    selecteedCard = Card
    isOpen = false
    callback.invoke(Card, false)
  }

  Surface(
    modifier = Modifier.fillMaxWidth(),
    shadowElevation = 4.dp,
    shape = RoundedCornerShape(4.dp),
    color = Color.Transparent
  ) {
    Card(
      modifier = Modifier
        .fillMaxWidth()
        .height(45.dp)
        .clickable {
          isOpen = !isOpen
        },
      colors = CardDefaults.cardColors(MaterialTheme.colorScheme.tertiary),
      elevation = CardDefaults.cardElevation(4.dp),
      shape = RoundedCornerShape(4.dp),

      ) {
      Box(
        modifier = Modifier
          .fillMaxSize()
          .padding(start = 16.dp, end = 16.dp)
      ) {
        Text(
          text = selecteedCard,
          modifier = Modifier.align(Alignment.CenterStart),
          fontSize = 17.sp,
          color = dropdownTextColor
        )

        Icon(
          openMenuIcon,
          contentDescription = "menu",
          modifier = Modifier.align(Alignment.CenterEnd),
          tint = MaterialTheme.colorScheme.onTertiary
        )
      }
    }
  }

  Spacer(modifier = Modifier.height(4.dp))

  Box(Modifier.zIndex(10f)) {
    Scaffold(containerColor = Color.Transparent,
      modifier = Modifier
        .fillMaxWidth()
        .pointerInput(Unit) {
          detectTapGestures(onTap = {
            isOpen = false
            callback.invoke(selecteedCard, false)
          })
        }) {
      AnimatedVisibility(
        visible = isOpen,
        enter = fadeIn(),
        exit = fadeOut(),
      ) {
        Surface(
          modifier = Modifier
            .fillMaxWidth()
            .padding(2.dp),
//        .border(2.dp, Color(0xff8E8C94)),
          shadowElevation = 4.dp, shape = RoundedCornerShape(4.dp), color = Color.Transparent
        ) {

          Card(
            modifier = Modifier
              .fillMaxWidth()
              .heightIn(listHeight, 250.dp)
              .zIndex(2f),
            colors = CardDefaults.cardColors(MaterialTheme.colorScheme.tertiary),

//          elevation = CardDefaults.cardElevation(shadow),
            shape = RoundedCornerShape(4.dp),
          ) {
            Spacer(modifier = Modifier.height(8.dp))
            options.forEach { item ->
              Box(modifier = Modifier
                .padding(start = 16.dp, end = 16.dp)
                .height(40.dp)
                .fillMaxWidth()
                .clickable {
                  getCardName(item)
                }

              ) {
                Text(
                  text = item,
                  modifier = Modifier
                    .align(Alignment.CenterStart)
                    .fillMaxWidth(),
                  fontSize = 15.sp
                )
              }
            }
            Spacer(modifier = Modifier.height(10.dp))
          }
        }
      }
    }
  }
}

