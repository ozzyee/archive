package com.example.mums_notes.feature_spash_screen

import android.view.animation.OvershootInterpolator
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.example.mums_notes.navigation.Screen
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase
import kotlinx.coroutines.delay

@Composable
fun SplashScreen(
  navController: NavHostController,
  isLoggedIn: Boolean,
  viewModel: SplashScreenViewModel = hiltViewModel(),
) {
  var route by remember { mutableStateOf(Screen.LandingScreen.router) }
  val scale = remember {
    Animatable(0f)
  }

  if (isLoggedIn) {
    val userUid = Firebase.auth.uid

    viewModel.getUserDetails("$userUid") { data ->
      route = if (data == null) {
        Screen.UserDetailsScreen.router
      } else {
        Screen.LoginScreen.router
      }
    }
  }

  LaunchedEffect(key1 = true) {
    scale.animateTo(targetValue = 0.3f, animationSpec = tween(durationMillis = 500, easing = {
      OvershootInterpolator(2f).getInterpolation(it)
    }))
    delay(200L)
    navController.navigate(route)
  }

  Box(modifier = Modifier.fillMaxSize()) {
    Text("Loading...", modifier = Modifier.align(Alignment.Center))
  }
}