package com.example.mums_notes.feature_spash_screen

import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.mums_notes.feature_user_details.domain.models.UserDetails
import com.example.mums_notes.feature_user_details.domain.use_case.UserDetailsUseCases
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class SplashScreenViewModel @Inject constructor(
  private val userDetailsUseCases: UserDetailsUseCases,
) : ViewModel() {

  private val _getUserDetail = mutableStateOf(UserDetails())
  val getUserDetails: State<UserDetails> = _getUserDetail

  fun getUserDetails(UID: String, callback: (UserDetails?) -> Unit) {
    viewModelScope.launch {
      val data = userDetailsUseCases.getUserDetailsByUID.invoke(UID)
      callback.invoke(data)
    }
  }
}