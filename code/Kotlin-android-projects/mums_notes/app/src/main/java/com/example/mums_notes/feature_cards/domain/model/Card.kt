package com.example.mums_notes.feature_cards.domain.model

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class Card(
  val cardName: String? = "",
  val cardNumber: String,
  val validFrom: String,
  val expiryEnd: String,
  val cvv: String,
  val pin: String,
  val extraInfo: String,
  val timestamp: Long,
  @PrimaryKey val id: Int? = null
)