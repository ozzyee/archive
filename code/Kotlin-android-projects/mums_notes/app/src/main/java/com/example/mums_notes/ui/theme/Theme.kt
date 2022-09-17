package com.example.mums_notes.ui.theme


import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable


private val DarkColorScheme = darkColorScheme(
  primary = Primary,
  secondary = LightTertiary,
  tertiary = DarkTertiary,
  background = DarkBackground,
  onTertiary = DarkOnTertiary,
  onSurface = DarkOnSurface,
  onBackground = DarkOnBackground,
  surface = DarkSurface,
)

private val LightColorScheme = lightColorScheme(
  primary = Primary,
  secondary = LightSecondary,
  background = LightBackground,
  tertiary = LightTertiary,
  onTertiary = LightOnTertiary,
  onSurface = LightOnSurface,
  onBackground = DarkOnBackground,
  surface = LightSurface,
//    onPrimary = Color.Black,

  /* Other default colors to override
    onSecondary = Color.White,
    */
)

@Composable
fun MyTheme(
  darkTheme: Boolean = isSystemInDarkTheme(), content: @Composable () -> Unit
) {
  MaterialTheme(
    colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme, content = content
  )
}