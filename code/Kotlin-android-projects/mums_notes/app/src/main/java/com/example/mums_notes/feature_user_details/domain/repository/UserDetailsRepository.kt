package com.example.mums_notes.feature_user_details.domain.repository

import com.example.mums_notes.feature_user_details.domain.models.UserDetails
import kotlinx.coroutines.flow.Flow

interface UserDetailsRepository {
  fun getUserDetails(): Flow<List<UserDetails>>

  suspend fun getUserDetailsById(id: String): UserDetails?

  suspend fun insertUserDetails(userDetails: UserDetails)

  suspend fun deleteUserDetails(userDetails: UserDetails)
}