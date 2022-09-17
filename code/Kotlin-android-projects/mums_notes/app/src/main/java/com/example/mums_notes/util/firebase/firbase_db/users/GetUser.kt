package com.example.mums_notes.util.firbase_db

import android.util.Log
import com.example.mums_notes.util.firebase.firbase_db.users.UsersData
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase

fun getUser(userUid: String, callback: (data: UsersData, hasData: Boolean) -> Unit) {
  val db = Firebase.firestore
  val docRef = db.collection("users").document(userUid)

  docRef.get()
    .addOnSuccessListener { document ->
      if (document != null) {
        if (document.data != null) {
          val user = UsersData(
            FirstName = document.data?.get("firstName") as String,
            LastName = document.data?.get("lastName") as String
          )
          callback.invoke(user, true)
        } else {
          callback.invoke(UsersData(), false)
        }
      } else {
        Log.d("MainActivity123321", "No such document")
      }
    }
    .addOnFailureListener { exception ->
      Log.d("MainActivity123321", "get failed with ", exception)
    }
}