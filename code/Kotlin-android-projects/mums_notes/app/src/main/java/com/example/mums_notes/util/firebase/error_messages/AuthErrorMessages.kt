package com.example.mums_notes.util.firebase.error_messages

import android.util.Log

fun authErrorMessages(firebaseMessage: String): Message {
  Log.d("authErrorMessages", "firebaseMessage -> $firebaseMessage")

  if (firebaseMessage == "failure: com.google.firebase.auth.FirebaseAuthUserCollisionException: The email address is already in use by another account.")
    return Message(
      type = "email",
      message = "The email address is already in use by another account"
    )



  return Message()
}

data class Message(
  val type: String = "",
  val message: String = "",
)