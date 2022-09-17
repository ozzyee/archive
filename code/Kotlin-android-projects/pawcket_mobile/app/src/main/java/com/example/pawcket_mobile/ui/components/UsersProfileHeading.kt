package com.example.pawcket_mobile.ui.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.LocationOn
import androidx.compose.material.icons.filled.MailOutline
import androidx.compose.material.icons.filled.MoreVert
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.layout.layoutId
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.tooling.preview.Devices
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.constraintlayout.compose.ConstraintLayout
import androidx.constraintlayout.compose.ConstraintSet
import androidx.constraintlayout.compose.Dimension
import coil.compose.rememberAsyncImagePainter
import com.example.myapplication.ui.theme.LightGray
import com.example.pawcket_mobile.R

object infoIcons {
  val homeIcon = Icons.Default.Home
  val locationIcon = Icons.Default.LocationOn
  val moreIcon = Icons.Default.MoreVert
}

@Preview(device = Devices.PIXEL_2)
@Composable
fun UsersInfo(
  fullName: String = "",
  nickName: String = "",
  CoverImage: Int,
  profileImage: Int,
) {
  val userRestraintsSet = ConstraintSet {
    val userImageWrapper = createRefFor("userImgWrapper")
    val fullName = createRefFor("fullName")
    val userName = createRefFor("userName")
    val userProfileBackground = createRefFor("userProfileBackground")
    val usersDetails = createRefFor("usersDetails")

    constrain(userImageWrapper) {
      top.linkTo(parent.top)
      start.linkTo(parent.start)
    }

    constrain(fullName) {
      start.linkTo(userImageWrapper.end)
      top.linkTo(userProfileBackground.bottom)
      end.linkTo(parent.end)
      width = Dimension.fillToConstraints
    }

    constrain(userName) {
      top.linkTo(fullName.bottom)
      start.linkTo(userImageWrapper.end)
      end.linkTo(parent.end)
      width = Dimension.fillToConstraints
    }

    constrain(usersDetails) {
      top.linkTo(userName.bottom)
    }
  }

  Box(Modifier.background(MaterialTheme.colors.onBackground)) {
    ConstraintLayout(userRestraintsSet) {
      // * users profile wallpaper
      Image(
        rememberAsyncImagePainter(CoverImage),
        contentDescription = "",
        modifier = Modifier
          .fillMaxWidth()
          .height(240.dp)
          .padding(0.dp)
          .layoutId("userProfileBackground")
          .clip(
            RoundedCornerShape(0.dp, 0.dp, 15.dp, 15.dp)
          ),
        contentScale = ContentScale.Crop
      )

      // * user Image
      Box(
        modifier = Modifier
          .width(160.dp)
          .height(340.dp)
          .layoutId("userImgWrapper")
          .padding(start = 10.dp)

      ) {
        Image(
          rememberAsyncImagePainter(profileImage),
          contentDescription = "",
          modifier = Modifier
            .width(155.dp)
            .height(155.dp)
            .padding(10.dp)
            .align(Alignment.BottomStart)

            .clip(
              RoundedCornerShape(20.dp)
            )
        )
      }

      // * real name
      Text(
        text = fullName, modifier = Modifier
          .layoutId("fullName")
          .padding(top = 6.dp), fontSize = 29.sp,
        fontWeight = FontWeight.Medium,
        maxLines = 1,
        overflow = TextOverflow.Ellipsis,
        color = MaterialTheme.colors.onSurface
      )

      // * nick name
      Text(
        text = nickName, modifier = Modifier
          .layoutId("userName"), fontSize = 20.sp,
        maxLines = 1,
        overflow = TextOverflow.Ellipsis,
        color = LightGray

      )

      UsersDetails()
    }
  }
}

