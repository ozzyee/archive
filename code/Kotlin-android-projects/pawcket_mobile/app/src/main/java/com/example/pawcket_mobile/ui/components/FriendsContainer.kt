package com.example.pawcket_mobile.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.tooling.preview.Devices
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.layoutId
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.constraintlayout.compose.ConstraintLayout
import com.example.myapplication.ui.theme.AliceBlue
import com.example.myapplication.ui.theme.BlueYonda
import com.example.myapplication.ui.theme.LightGray
import com.example.myapplication.ui.theme.White

@Preview(device = Devices.PIXEL_2)
@Composable
fun FriendsContainer() {
  Column(
    modifier = Modifier
      .fillMaxWidth()
      .padding(top = 10.dp)
      .background(MaterialTheme.colors.onBackground)
  ) {
    Column(
      modifier = Modifier
//        .background(White)
        .layoutId("profileContent")
    ) {
      Column() {
        ConstraintLayout(
          Modifier
            .fillMaxWidth()
            .padding(top = 15.dp)
        ) {
          val (friends, searchFriends, friendsCount) = createRefs()

          Text(
            "Find Friends",
            color = BlueYonda,
            fontSize = 18.sp,
            modifier = Modifier
              .padding(end = 22.dp)
              .constrainAs(searchFriends) {
                end.linkTo(parent.end)
                top.linkTo(friends.top)
                bottom.linkTo(friends.bottom)
              }
          )

          Text(
            "Friends",
            fontSize = 22.sp,
            fontWeight = FontWeight.Bold,
            modifier = Modifier
              .padding(start = 19.dp)
              .constrainAs(friends) {

              },
            color = MaterialTheme.colors.onSurface

          )

          Text(
            " 180 friends", fontSize = 18.sp,
            color = LightGray,
            modifier = Modifier
              .padding(start = 14.dp, bottom = 10.dp)
              .constrainAs(friendsCount) {
                top.linkTo(friends.bottom)
                start.linkTo(friends.start)
              }
          )
        }
      }

      Row(modifier = Modifier.align(alignment = Alignment.CenterHorizontally)) {
        FriendsIcon()
        FriendsIcon()
        FriendsIcon()
      }
      Row(modifier = Modifier.align(alignment = Alignment.CenterHorizontally)) {
        FriendsIcon()
        FriendsIcon()
        FriendsIcon()
      }

      Button(
        onClick = { /* Do something! */ },
        colors = ButtonDefaults.buttonColors(
          backgroundColor = MaterialTheme.colors.surface,
          contentColor = MaterialTheme.colors.onSurface
        ),
        modifier = Modifier
          .fillMaxWidth()
          .padding(start = 26.dp, end = 26.dp, top = 16.dp, bottom = 26.dp)
      ) {
        Text("Show All Friends")
      }
    }
  }
}