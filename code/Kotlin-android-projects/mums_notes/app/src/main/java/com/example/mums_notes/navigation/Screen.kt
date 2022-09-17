package com.example.mums_notes.navigation

sealed class Screen(val router: String) {
  object LandingScreen : Screen("landing-screen")
  object LoginScreen : Screen("login")
  object HomeScreen : Screen("home")
  object CreateCardScreen : Screen("create-card")
  object NoteScreen : Screen("note")
  object SplashScreen : Screen("splash-screen")
  object LoginFormScreen : Screen("login-form")
  object RegisterScreen : Screen("register")
  object UserDetailsScreen : Screen("user-details")

}
