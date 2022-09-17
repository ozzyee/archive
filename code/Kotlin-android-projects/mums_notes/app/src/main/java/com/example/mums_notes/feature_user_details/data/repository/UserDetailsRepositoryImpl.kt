package com.example.mums_notes.feature_user_details.data.repository

import com.example.mums_notes.feature_user_details.data.data_source.UserDetailsDao
import com.example.mums_notes.feature_user_details.domain.models.UserDetails
import com.example.mums_notes.feature_user_details.domain.repository.UserDetailsRepository
import kotlinx.coroutines.flow.Flow


class UserDetailsRepositoryImpl(private val dao: UserDetailsDao) : UserDetailsRepository {
  override fun getUserDetails(): Flow<List<UserDetails>> {
    return dao.getUserDetails()
  }

  override suspend fun getUserDetailsById(id: String): UserDetails? {
    return dao.getUserDetailsById(id)
  }

  override suspend fun insertUserDetails(userDetails: UserDetails) {
    dao.insertUserDetails(userDetails)
  }

  override suspend fun deleteUserDetails(userDetails: UserDetails) {
    dao.deleteUserDetails(userDetails)
  }
}