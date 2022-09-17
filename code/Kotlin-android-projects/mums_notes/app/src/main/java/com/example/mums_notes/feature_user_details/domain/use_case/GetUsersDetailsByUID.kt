package com.example.mums_notes.feature_user_details.domain.use_case

import com.example.mums_notes.feature_user_details.domain.models.UserDetails
import com.example.mums_notes.feature_user_details.domain.repository.UserDetailsRepository

class GetUsersDetailsByUID(
  private val repository: UserDetailsRepository,
) {

  suspend fun invoke(id: String): UserDetails? {
    return repository.getUserDetailsById(id)
  }
}
