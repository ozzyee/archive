package com.example.mums_notes.feature_user_details.presintation

import androidx.compose.foundation.layout.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.mums_notes.Components.ScreenHeader
import com.example.mums_notes.Components.TextField
import com.example.mums_notes.feature_landing_screen.components.CustomButton

@Composable
fun UserDetailsScreen(
  viewModel: UserDetailsViewModel = hiltViewModel(),
) {

  val firstNameError = viewModel.firstNameError.value
  val lastNameError = viewModel.lastNameError.value
  val pinError = viewModel.pinError.value
  val confirmPinError = viewModel.confirmPinError.value

  Column(modifier = Modifier.fillMaxSize()) {
    ScreenHeader(modifier = Modifier.padding(top = 30.dp),
      heading = "User Details",
      subHeading = "")
    Spacer(modifier = Modifier.height(40.dp))

    Column(modifier = Modifier
      .padding(top = 2.dp, start = 18.dp, end = 18.dp)
      .weight(1f)) {


      TextField(text = viewModel.firstName.value.text,
        modifier = Modifier.fillMaxWidth(),
        label = viewModel.firstName.value.label,
        isError = firstNameError.isNotEmpty(),
        errorMessage = firstNameError,
        onChange = {
          viewModel.onEvent(UserDetailsEvent.FirstName(it))
        })

      TextField(modifier = Modifier.fillMaxWidth(),
        text = viewModel.lastName.value.text,
        label = viewModel.lastName.value.label,
        isError = lastNameError.isNotEmpty(),
        errorMessage = lastNameError,
        onChange = {
          viewModel.onEvent(UserDetailsEvent.LastName(it))
        })

      TextField(modifier = Modifier.fillMaxWidth(),
        text = viewModel.loginPin.value.text,
        label = viewModel.loginPin.value.label,
        isError = pinError.isNotEmpty(),
        errorMessage = pinError,
        secureInput = true,
        translation = "pin",
        keyboardType = KeyboardType.Number,
        onChange = {
          viewModel.onEvent(UserDetailsEvent.Pin(it))
        })

      TextField(modifier = Modifier.fillMaxWidth(),
        text = viewModel.confirmLoginPin.value.text,
        label = viewModel.confirmLoginPin.value.label,
        isError = confirmPinError.isNotEmpty(),
        errorMessage = confirmPinError,
        secureInput = true,
        translation = "pin",
        keyboardType = KeyboardType.Number,
        onChange = {
          viewModel.onEvent(UserDetailsEvent.ConfirmPin(it))
        })

      CustomButton(text = "Save", onClick = {
        viewModel.onEvent(UserDetailsEvent.Save)
      }, modifier = Modifier
        .padding(top = 20.dp)
        .height(50.dp))
    }
  }
}