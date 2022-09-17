package com.example.mums_notes.feature_register.presintation

import android.util.Log
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.example.mums_notes.Components.ScreenHeader
import com.example.mums_notes.Components.TextField
import com.example.mums_notes.feature_landing_screen.components.AuthFooter
import com.example.mums_notes.feature_landing_screen.components.CustomButton
import com.example.mums_notes.feature_landing_screen.components.IconHeader
import com.example.mums_notes.navigation.Screen

@Composable
fun RegisterScreen(
  logo: Int,
  googleIcon: Int,
  facebookIcon: Int,
  googleLogin: () -> Unit,
  facebookLogin: () -> Unit,
  navController: NavHostController,
  viewModel: RegisterViewModel = hiltViewModel(),
) {

  val emailError = viewModel.emailErrorMessage.value.Error
  val passwordError = viewModel.passwordErrorMessage.value.Error
  val passwordsMatch = viewModel.confirmPasswordError.value.Error
  val registerSuccess = viewModel._regSuccess.value

  Log.d("RegisterViewModel", "val -> $registerSuccess")

  if (registerSuccess) navController.navigate(Screen.UserDetailsScreen.router)

  Column(modifier = Modifier.fillMaxSize()) {

    Spacer(modifier = Modifier.height(80.dp))
    IconHeader(logo)

    ScreenHeader(modifier = Modifier.padding(top = 30.dp),
      heading = "Register",
      subHeading = "Welcome")
    Spacer(modifier = Modifier.height(40.dp))

    Column(modifier = Modifier
      .padding(top = 2.dp, start = 18.dp, end = 18.dp)
      .weight(1f)) {


      TextField(
        text = viewModel.email.value.text,
        modifier = Modifier.fillMaxWidth(),
        label = viewModel.email.value.label,
        onChange = {
          viewModel.onEvent(RegisterEvent.Email(it))
        },
        isError = emailError.isNotEmpty(),
        errorMessage = emailError
      )

      TextField(
        modifier = Modifier.fillMaxWidth(),
        text = viewModel.password.value.text,
        label = viewModel.password.value.label,
        secureInput = true,
        onChange = {
          viewModel.onEvent(RegisterEvent.Password(it))
        },
        isError = passwordError.isNotEmpty(),
        errorMessage = passwordError
      )

      TextField(
        modifier = Modifier.fillMaxWidth(),
        text = viewModel.confirmPassword.value.text,
        label = viewModel.confirmPassword.value.label,
        secureInput = true,
        onChange = {
          viewModel.onEvent(RegisterEvent.ConfirmPassword(it))
        },
        isError = passwordsMatch.isNotEmpty(),
        errorMessage = passwordsMatch
      )

      CustomButton(
        text = "Register",
        onClick = {
          viewModel.onEvent(RegisterEvent.Register)
        },
        modifier = Modifier
          .padding(top = 20.dp)
          .height(50.dp))
    }

    AuthFooter(googleIcon, facebookIcon, googleLogin, facebookLogin)
  }
}

