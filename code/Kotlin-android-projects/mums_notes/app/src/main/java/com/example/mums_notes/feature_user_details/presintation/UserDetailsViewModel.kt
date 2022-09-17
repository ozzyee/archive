package com.example.mums_notes.feature_user_details.presintation

import android.util.Log
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.mums_notes.feature_login.presintation.login.LoginTextFieldsState
import com.example.mums_notes.feature_user_details.domain.use_case.UserDetailsUseCases
import com.example.mums_notes.util.validation.confirmPinIsValid
import com.example.mums_notes.util.validation.nameIsValid
import com.example.mums_notes.util.validation.pinIsValid
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class UserDetailsViewModel @Inject constructor(
  private val userDetailsUseCases: UserDetailsUseCases,
  savedStateHandle: SavedStateHandle,
) : ViewModel() {
  private val _firstName = mutableStateOf(
    LoginTextFieldsState(
      label = "First Name"
    )
  )
  val firstName: State<LoginTextFieldsState> = _firstName

  private val _lastName = mutableStateOf(
    LoginTextFieldsState(
      label = "Last Name"
    )
  )
  val lastName: State<LoginTextFieldsState> = _lastName


  private val _loginPin = mutableStateOf(
    LoginTextFieldsState(
      label = "Login Pin"
    )
  )
  val loginPin: State<LoginTextFieldsState> = _loginPin


  private val _confirmLoginPin = mutableStateOf(
    LoginTextFieldsState(
      label = "Conform Login Pin"
    )
  )
  val confirmLoginPin: State<LoginTextFieldsState> = _confirmLoginPin


  init {
    viewModelScope.launch {
      userDetailsUseCases.getUserDetails().collect { data ->
        Log.d("UserDetailsViewModel", "data: $data")
      }
    }
  }

  //  Errors
  val firstNameError = mutableStateOf("")
  val lastNameError = mutableStateOf("")
  val pinError = mutableStateOf("")
  val confirmPinError = mutableStateOf("")


  fun onEvent(event: UserDetailsEvent) {
    when (event) {
      is UserDetailsEvent.FirstName -> {
        _firstName.value = firstName.value.copy(
          text = event.value
        )
      }
      is UserDetailsEvent.LastName -> {
        _lastName.value = lastName.value.copy(
          text = event.value
        )
      }
      is UserDetailsEvent.Pin -> {
        _loginPin.value = loginPin.value.copy(
          text = event.value
        )
      }
      is UserDetailsEvent.ConfirmPin -> {
        _confirmLoginPin.value = confirmLoginPin.value.copy(
          text = event.value
        )
      }
      is UserDetailsEvent.Save -> {
        firstNameError.value = nameIsValid(firstName.value.text)
        lastNameError.value = nameIsValid(lastName.value.text)
        pinError.value = pinIsValid(loginPin.value.text)
        confirmPinError.value = confirmPinIsValid(confirmLoginPin.value.text, loginPin.value.text)


        //        viewModelScope.launch {
//          try {
//            val data = UserDetails(
//              firstName = "Oscar",
//              lastName = "Earle",
//              pin = "1234",
//              UID = "22332211000",
//            )
//            userDetailsUseCases.addUserDetails(data)
//          } catch (e: InvalidNoteException) {
//            Log.e("UserDetailsViewModel", "Error: $e")
////        Log.d("UserDetailsViewModel", "ive been clicked")
//          }
//        }
      }
    }
  }
}