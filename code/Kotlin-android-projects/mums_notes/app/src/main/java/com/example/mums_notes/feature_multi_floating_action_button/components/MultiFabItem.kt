package com.example.mums_notes.feature_multi_floating_action_button.components

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material.Card
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun MultiFabItem(name: String, onClick: () -> Unit) {
  Row(modifier = Modifier.padding(bottom = 10.dp, end = 8.dp)) {
    Card(modifier = Modifier.align(Alignment.CenterVertically)) {
      Text(name, fontSize = 16.sp, modifier = Modifier.padding(6.dp))
    }
    Spacer(modifier = Modifier.width(10.dp))
    MiniFloatingActionButton(onClick = { onClick() })
  }
}