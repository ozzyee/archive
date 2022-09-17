package com.example.mums_notes.feature_user_details.domain.use_case

import com.example.mums_notes.feature_user_details.domain.models.UserDetails
import com.example.mums_notes.feature_user_details.domain.repository.UserDetailsRepository
import kotlinx.coroutines.flow.Flow

class GetUserDetails(private val repository: UserDetailsRepository) {
  operator fun invoke(
  ): Flow<List<UserDetails>> {
    return repository.getUserDetails()
  }
}