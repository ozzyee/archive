package com.example.mums_notes.feature_user_details.data.data_source

import androidx.room.*
import com.example.mums_notes.feature_user_details.domain.models.UserDetails
import kotlinx.coroutines.flow.Flow

@Dao
interface UserDetailsDao {
  @Query("SELECT * FROM UserDetails")
  fun getUserDetails(): Flow<List<UserDetails>>

  @Query("SELECT * FROM UserDetails WHERE UID = :id")
  suspend fun getUserDetailsById(id: String): UserDetails?

  @Insert(onConflict = OnConflictStrategy.REPLACE)
  suspend fun insertUserDetails(userDetails: UserDetails)

  @Delete
  suspend fun deleteUserDetails(userDetails: UserDetails)
}