package com.example.mums_notes.feature_home.presintation.layouts

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.mums_notes.feature_home.presintation.components.NoteItem

@Composable
@Preview(showBackground = true)
fun Notes() {
  Column {
    Text(
      text = "My Notes",
      color= MaterialTheme.colorScheme.secondary,
      fontSize = 25.sp,
      fontWeight = FontWeight.Bold,
      modifier = Modifier.padding(bottom = 15.dp)
    )
    Column(
      modifier = Modifier
        .verticalScroll(rememberScrollState())
    ) {
      Column(modifier = Modifier.padding(bottom = 20.dp)) {
        NoteItem(
          modifier = Modifier
            .padding(top = 15.dp, bottom = 0.dp),
          onDeleteClick = {})
      }
    }
  }
}