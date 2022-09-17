package com.example.pawcket_mobile.ui.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Icon
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Devices
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.constraintlayout.compose.ConstraintLayout
import androidx.constraintlayout.compose.Dimension.Companion.fillToConstraints
import coil.compose.rememberAsyncImagePainter
import com.example.myapplication.ui.theme.Purple700
import com.example.pawcket_mobile.R


@Composable
@Preview(device = Devices.PIXEL_2)
fun CreatePostWidget() {
  val imageIcon = R.drawable.ic_image

  Box(
    Modifier
      .padding(top = 12.dp)
      .background(Color.White)
  ) {
    Box(
      Modifier
        .padding(start = 20.dp, end = 15.dp, top = 15.dp, bottom = 15.dp)
    ) {
      ConstraintLayout(Modifier.fillMaxSize()) {
        val (profileImageRestraint, UserInputWrapper, imageIconRestraint) = createRefs()
        Image(
          rememberAsyncImagePainter(profileImage),
          contentDescription = "",
          modifier = Modifier
            .width(60.dp)
            .height(60.dp)
            .clip(
              RoundedCornerShape(20.dp)
            )
            .constrainAs(profileImageRestraint) {
              start.linkTo(parent.start)
              end.linkTo(UserInputWrapper.start)
              top.linkTo(parent.top)
              bottom.linkTo(parent.bottom)
            }
        )

        Box(
          Modifier
            .width(112.dp)
            .height(30.dp)
            .padding(
              10.dp
            )
            .constrainAs(UserInputWrapper) {
              start.linkTo(profileImageRestraint.end)
              end.linkTo(imageIconRestraint.end)
              top.linkTo(parent.top)
              bottom.linkTo(parent.bottom)
              width = fillToConstraints
              height = fillToConstraints
            },
          contentAlignment = Alignment.Center

        ) {
          Box(
            Modifier
              .height(40.dp)
              .fillMaxWidth()
              .border(2.dp, Purple700, shape = RoundedCornerShape(10.dp))
              .padding(start = 10.dp),
            contentAlignment = Alignment.CenterStart
          ) {
            Text("What's on your mind?")
          }


        }

        Icon(
          painter = painterResource(id = imageIcon),
          contentDescription = null, // decorative element
          modifier = Modifier
            .width(42.dp)
            .height(42.dp)
            .padding(end = 10.dp)
            .constrainAs(imageIconRestraint) {
              start.linkTo(UserInputWrapper.end)
              end.linkTo(parent.end)
              top.linkTo(UserInputWrapper.top)
              bottom.linkTo(UserInputWrapper.bottom)
            }
        )
      }
    }
  }
}
