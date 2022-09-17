package com.example.mums_notes.feature_user_details.domain.use_case

import com.example.mums_notes.feature_user_details.domain.models.UserDetails
import com.example.mums_notes.feature_user_details.domain.repository.UserDetailsRepository


class AddUserDetails(private val repository: UserDetailsRepository) {
  suspend operator fun invoke(userDetails: UserDetails) {
    repository.insertUserDetails(userDetails)
  }
}