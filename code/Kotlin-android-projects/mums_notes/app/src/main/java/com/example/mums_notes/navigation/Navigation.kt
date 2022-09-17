@file:Suppress("OPT_IN_IS_NOT_ENABLED")

package com.example.mums_notes.navigation

import androidx.compose.animation.*
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.navArgument
import com.example.mums_notes.R
import com.example.mums_notes.feature_cards.presentation.cards.AddEditCardsScreen
import com.example.mums_notes.feature_home.presintation.HomeScreen
import com.example.mums_notes.feature_landing_screen.LandingScreen
import com.example.mums_notes.feature_login.presintation.login.LoginFormScreen
import com.example.mums_notes.feature_login.presintation.login.PinLoginScreen
import com.example.mums_notes.feature_notes.presintation.add_edit_notes.AddEditNoteScreen
import com.example.mums_notes.feature_register.presintation.RegisterScreen
import com.example.mums_notes.feature_spash_screen.SplashScreen
import com.example.mums_notes.feature_user_details.presintation.UserDetailsScreen
import com.example.mums_notes.navigation.create_routes.createNoteRoute
import com.google.accompanist.navigation.animation.AnimatedNavHost
import com.google.accompanist.navigation.animation.composable

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun Navigation(
  navController: NavHostController,
  isLoggedIn: Boolean,
  googleLogin: () -> Unit,
  facebookLogin: () -> Unit,
) {
  var route by remember { mutableStateOf(Screen.SplashScreen.router) }
  val logo = R.drawable.logo_placeholder
  val googleIcon = R.drawable.google
  val facebookIcon = R.drawable.facebook

  AnimatedNavHost(modifier = Modifier.background(MaterialTheme.colorScheme.background),
    navController = navController,
    startDestination = route
  ) {

    composable(route = Screen.UserDetailsScreen.router, enterTransition = {
      fadeIn(animationSpec = tween(durationMillis = 300))
    }) {
      UserDetailsScreen()
    }

    composable(route = Screen.RegisterScreen.router, enterTransition = {
      fadeIn(animationSpec = tween(durationMillis = 300))
    }) {
      RegisterScreen(
        logo = logo,
        googleIcon = googleIcon,
        facebookIcon = facebookIcon,
        googleLogin = googleLogin,
        facebookLogin = facebookLogin,
        navController = navController,

        )
    }

    composable(route = Screen.LandingScreen.router, exitTransition = {
      fadeOut(animationSpec = tween(durationMillis = 300))
    }) {
      LandingScreen(
        logo = logo,
        googleIcon = googleIcon,
        facebookIcon = facebookIcon,
        navController = navController,
        googleLogin = googleLogin,
        facebookLogin = facebookLogin
      )
    }

    composable(route = Screen.LoginFormScreen.router, enterTransition = {
      fadeIn(animationSpec = tween(durationMillis = 300))
    }) {
      LoginFormScreen(
        logo = logo,
        googleIcon = googleIcon,
        facebookIcon = facebookIcon,
        googleLogin = googleLogin,
        facebookLogin = facebookLogin)
    }

    composable(
      route = Screen.SplashScreen.router,
    ) {
      SplashScreen(navController = navController, isLoggedIn = isLoggedIn)
    }

    composable(route = Screen.LoginScreen.router, exitTransition = {
      slideOutVertically(animationSpec = tween(durationMillis = 300),
        targetOffsetY = { -300 }) + fadeOut(animationSpec = tween(300))
    }, enterTransition = {
      slideInVertically(animationSpec = tween(durationMillis = 200),
        initialOffsetY = { -300 }) + fadeIn(tween(200))
    }) {
      PinLoginScreen(navController = navController, route)
    }

    composable(route = Screen.HomeScreen.router, enterTransition = {
      fadeIn(animationSpec = tween(300))
    }) {
      HomeScreen(navController = navController)
    }

    composable(route = Screen.CreateCardScreen.router + "?cardName={cardName}&cardNumber={cardNumber}&validFrom={validFrom}&expiryEnd={expiryEnd}&cvv={cvv}&pin={pin}&extraInfo={extraInfo}",
      arguments = listOf(
        navArgument("cardName") {
          type = NavType.StringType
          nullable = true
        },
        navArgument("cardNumber") {
          type = NavType.StringType
          nullable = true
        },
        navArgument("validFrom") {
          type = NavType.StringType
          nullable = true
        },
        navArgument("expiryEnd") {
          type = NavType.StringType
          nullable = true
        },
        navArgument("cvv") {
          type = NavType.StringType
          nullable = true
        },
        navArgument("pin") {
          type = NavType.StringType
          nullable = true
        },
        navArgument("extraInfo") {
          type = NavType.StringType
          nullable = true
        },
      )) { event ->
      AddEditCardsScreen(
        navController = navController,
        cardName = event.arguments?.getString("cardName"),
        cardNumber = event.arguments?.getString("cardNumber"),
        cardValidFrom = event.arguments?.getString("validFrom"),
        cardExpiryEnd = event.arguments?.getString("expiryEnd"),
        cardCvv = event.arguments?.getString("cvv"),
        cardPin = event.arguments?.getString("pin"),
        cardExtraInfo = event.arguments?.getString("extraInfo")) {
//        route = createCardRoute(it)
      }
    }


    composable(route = Screen.NoteScreen.router + "?noteColor={noteColor}&noteTitle={noteTitle}&noteContent={noteContent}",
      arguments = listOf(
        navArgument("noteColor") {
          type = NavType.StringType
          nullable = true
        },
        navArgument("noteTitle") {
          type = NavType.StringType
          nullable = true
        },
        navArgument("noteContent") {
          type = NavType.StringType
          nullable = true
        },
      )) { event ->
      AddEditNoteScreen(
        noteColor = event.arguments?.getString("noteColor"),
        noteTitle = event.arguments?.getString("noteTitle"),
        noteContent = event.arguments?.getString("noteContent"),
        navController = navController
      ) {
        route = createNoteRoute(it)
      }
    }
  }
}
