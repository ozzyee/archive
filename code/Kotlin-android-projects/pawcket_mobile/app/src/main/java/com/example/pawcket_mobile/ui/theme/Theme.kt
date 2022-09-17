package com.example.myapplication.ui.theme

import androidx.compose.material.darkColors
import androidx.compose.material.lightColors
import androidx.compose.ui.graphics.Color


val DarkColors = darkColors(
  background = Black,
  onBackground = LightBlack,
  onSurface = Color.White,
  surface = DarkBtnColor,
  primary = BlueYonda,
  onPrimary = AliceBlue,
)

val LightColors = lightColors(
  primary = AliceBlue,
//primaryVariant =
//secondary =
//secondaryVariant =
  background = LightBackground,
  surface = LightBtnGray,
//error =
  onPrimary = BlueYonda,
//onSecondary =
  onBackground = Color.White,
  onSurface = Color.Black
//onError =
)