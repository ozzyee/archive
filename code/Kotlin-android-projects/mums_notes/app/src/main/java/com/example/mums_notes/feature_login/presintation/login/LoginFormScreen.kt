package com.example.mums_notes.feature_login.presintation.login

import android.util.Log
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.mums_notes.Components.ScreenHeader
import com.example.mums_notes.Components.TextField
import com.example.mums_notes.feature_landing_screen.components.AuthFooter
import com.example.mums_notes.feature_landing_screen.components.CustomButton
import com.example.mums_notes.feature_landing_screen.components.IconHeader

@Composable
fun LoginFormScreen(
  logo: Int,
  googleIcon: Int,
  facebookIcon: Int,
  googleLogin: () -> Unit,
  facebookLogin: () -> Unit,
  viewModel: LoginViewmodel = hiltViewModel(),
) {

  val emailError = viewModel.emailErrorMessage.value.Error
  val passwordError = viewModel.passwordErrorMessage.value.Error



  Log.d("LoginFormScreen", "emailError -> $passwordError")

  Column(modifier = Modifier.fillMaxSize()) {

    Spacer(modifier = Modifier.height(80.dp))
    IconHeader(logo)

    ScreenHeader(modifier = Modifier.padding(top = 30.dp),
      heading = "Login",
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
          viewModel.onEvent(LoginEvent.Email(it))
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
          viewModel.onEvent(LoginEvent.Password(it))
        },
        isError = passwordError.isNotEmpty(),
        errorMessage = passwordError
      )

      CustomButton(
        text = "Login",
        modifier = Modifier
          .padding(top = 20.dp)
          .height(50.dp),
        onClick = { viewModel.onEvent(LoginEvent.Login) }
      )
    }

    AuthFooter(
      googleIcon = googleIcon,
      facebookIcon = facebookIcon,
      googleLogin = googleLogin,
      facebookLogin = facebookLogin)
  }
}