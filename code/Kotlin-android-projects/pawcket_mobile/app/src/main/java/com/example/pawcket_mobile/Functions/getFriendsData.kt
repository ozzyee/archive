@file:Suppress("UNCHECKED_CAST")

package com.example.pawcket_mobile.Functions

import android.util.Log
import com.example.pawcket_mobile.db

fun getFriendsData(
  friends: ArrayList<HashMap<String, String>>,
  callback: (ArrayList<HashMap<String, String>>) -> Unit
) {
  val friendsArray = ArrayList<HashMap<String, String>>()
  for (friend in friends) {

    get(friend) {
      friendsArray.add(it as HashMap<String, String>)
      callback.invoke(friendsArray)
    }
  }
}

fun get(
  friend: HashMap<String, String>,
  callback: (Map<String, Any>) -> Unit
) {
  val friendDocRef = db.collection("users").document(friend["friendID"].toString())
  friendDocRef.get().addOnSuccessListener { documentSnapshot ->
    val data = documentSnapshot.data
    if (data != null) {
      val _data = hashMapOf(
        "firstName" to data["firstName"].toString(),
        "lastName" to data["lastName"].toString(),
        "userName" to data["userName"].toString(),
        "userImage" to data["userImage"].toString(),
      )
      callback.invoke(_data)
    }
  }
}

