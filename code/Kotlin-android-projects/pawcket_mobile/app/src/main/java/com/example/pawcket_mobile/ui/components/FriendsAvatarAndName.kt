package com.example.pawcket_mobile.ui.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.rememberAsyncImagePainter
import com.example.pawcket_mobile.R

const val profileImage = R.drawable.user_placeholder

@Composable
fun FriendsIcon() {
  Box(
    Modifier
      .padding(3.dp)
  ) {
    Column() {
      Image(
        rememberAsyncImagePainter(profileImage),
        contentDescription = "",
        modifier = Modifier
          .width(122.dp)
          .height(122.dp)
          .clip(
            RoundedCornerShape(26.dp)
          )
          .border(2.dp, color = Color.Transparent, shape = RoundedCornerShape(20.dp))
      )
      Text(
        text = "Ozzy Earle",
        fontWeight = FontWeight.Bold,
        fontSize = 14.sp,
        modifier = Modifier
          .width(110.dp)
          .padding(4.dp),
        color = MaterialTheme.colors.onSurface
      )
    }
  }
}