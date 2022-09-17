package com.example.pawcket_mobile.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.layout.layoutId
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Devices
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.myapplication.ui.theme.*


@Preview(device = Devices.PIXEL_2)
@Composable
fun UsersDetails() {
  // * user details
  Box(
    modifier = Modifier
      .fillMaxWidth()
      .padding(start = 15.dp, end = 15.dp, top = 24.dp)
      .layoutId("usersDetails")
  ) {
    Column {
      UserDetails(infoIcons.homeIcon, "Lives in", "Solihull")
      UserDetails(infoIcons.locationIcon, "From", "Tamworth")
      UserDetails(infoIcons.moreIcon, "See your info", "")

      Button(
        onClick = { /* Do something! */ },
        modifier = Modifier
          .fillMaxWidth()
          .padding(top = 15.dp, start = 5.dp, end = 6.dp, bottom = 28.dp),
        colors = ButtonDefaults.buttonColors(
          backgroundColor = MaterialTheme.colors.primary,
          contentColor =  MaterialTheme.colors.onPrimary
        )
      ) {
        Text("Edit Public Details")
      }
    }
  }
}

@Composable
fun UserDetails(icon: ImageVector, description: String, info: String) {
  Row(verticalAlignment = Alignment.CenterVertically, modifier = Modifier.padding(4.dp)) {
    Icon(
      imageVector = icon,
      contentDescription = null, // decorative element
      modifier = Modifier
        .padding(end = 10.dp)
        .width(27.dp)
        .height(30.dp),
      tint = LightGray
    )
    Text(
      text = description,
      modifier = Modifier.padding(end = 5.dp),
      fontSize = 17.sp,
      color = MaterialTheme.colors.onSurface
    )
    Text(
      text = info,
      fontWeight = FontWeight.Bold,
      fontSize = 18.sp,
      color = MaterialTheme.colors.onSurface
    )
  }
}
