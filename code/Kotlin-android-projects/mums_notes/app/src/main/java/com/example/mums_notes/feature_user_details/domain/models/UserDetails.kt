package com.example.mums_notes.feature_user_details.domain.models

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class UserDetails(
  val firstName: String = "",
  val lastName: String = "",
  val pin: String = "",
  val UID: String = "",
  @PrimaryKey val id: Int? = null,
)