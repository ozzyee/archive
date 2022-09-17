package com.example.pawcket_mobile.Functions

import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider
import com.example.pawcket_mobile.db
import com.example.roomapp.model.User
import com.example.roomapp.model.UserDataFB
import com.example.roomapp.viewmodel.UserViewModel
import com.google.firebase.auth.ktx.auth
import com.google.firebase.firestore.ktx.toObject
import com.google.firebase.ktx.Firebase
import java.util.ArrayList
import java.util.HashMap

class setUserOnLogin {
  companion object {
    fun setUser(
      context: AppCompatActivity, callback: (userSaved: Boolean) -> Unit
    ) {
      val mUserViewModel = ViewModelProvider(context).get(UserViewModel::class.java)
      val user = Firebase.auth.currentUser
      val userInDB = db.collection("users").document(user!!.uid)
      userInDB.get().addOnSuccessListener { documentSnapshot ->
        val userDATA = documentSnapshot.toObject<UserDataFB>()
        val friendsRequests = (userDATA?.friendsRequests ?: ArrayList())
        val friendsReq = ArrayList<HashMap<String, String>>()
        val firends = (userDATA?.friends ?: ArrayList())
        val _friends = ArrayList<HashMap<String, String>>()


//              we check if there are any friends || friends requests and if there is then we add them to the array
        if (firends.size > 1) {
          firends.drop(1).forEach {
            @Suppress("UNCHECKED_CAST")
            _friends.add(it as HashMap<String, String>)
          }
        }

        if (friendsRequests.size > 1) {
          friendsRequests.drop(1).forEach {
            @Suppress("UNCHECKED_CAST")
            friendsReq.add(it as HashMap<String, String>)
          }
        }

        if (userDATA?.firstName != null && userDATA.lastName != null && userDATA.DOB != null) {
          val user = User(
            0,
            "${userDATA.firstName}",
            "${userDATA.lastName}",
            "${userDATA.userName}",
            "${userDATA.DOB}",
            "${userDATA.tel}",
            "${userDATA.address}",
            "${userDATA.postCode}",
            "${userDATA.extraInfo}",
            "${userDATA.userImage}",
            "${userDATA.email}",
            user.uid,
            friendsReq,
            _friends
          )

          mUserViewModel.addUser(user) { error, errorMsg ->
            if (!error) {
              callback.invoke(true)
            } else {
              callback.invoke(false)
            }
          }
        }else{
          callback.invoke(false)
        }
      }
    }
  }
}