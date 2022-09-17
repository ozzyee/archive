package com.example.pawcket_mobile.ui.layouts

import androidx.compose.foundation.*
import androidx.compose.foundation.layout.*
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Devices
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.core.view.WindowCompat
import com.example.myapplication.ui.theme.*
import com.example.pawcket_mobile.R
import com.example.pawcket_mobile.ui.components.CreatePostWidget
import com.example.pawcket_mobile.ui.components.FriendsContainer
import com.example.pawcket_mobile.ui.components.UsersInfo

object profilePlaceholderImages {
  const val profileImage = R.drawable.user_placeholder
  const val profileCover = R.drawable.temp_cover
}

@Preview(device = Devices.PIXEL_2)
@Composable
fun Dashboard() {
  val scrollState = rememberScrollState()
  Column(
    modifier = Modifier
      .verticalScroll(state = scrollState)
      .background(MaterialTheme.colors.background)

  ) {
    UsersInfo(
      "Oscar Earle",
      "Ozzy",
      profilePlaceholderImages.profileCover,
      profilePlaceholderImages.profileImage,
    )

    Column(
      Modifier
        .fillMaxWidth(),
    ) {
      FriendsContainer()
    }
  }
}

