package com.example.pawcket_mobile.Functions

import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.bumptech.glide.Glide
import com.example.pawcket_mobile.Functions.HelperClasses.FriendsView
import com.example.pawcket_mobile.R
import com.example.pawcket_mobile.databinding.DashboardBinding

open class setFriendsInView {
  companion object {
    fun set(
      friends: ArrayList<HashMap<String, String>>,
      binding: DashboardBinding,
      activity: AppCompatActivity
    ) {
      val friendsView = FriendsView(binding.friend1, binding.friend2, binding.friend3)

      getFriendsData(friends) { friendsData ->
        val friendsLimit = if (friendsData.size > 3) 3 else friendsData.size

        for (currentFriend in 0..friendsLimit) {
          val index = if (currentFriend - 1 == -1) 0 else currentFriend - 1
          val name = friendsData[index]["firstName"]
          val userImage = friendsData[index]["userImage"]

          val friendInView = friendsView["friend$currentFriend"]
          friendInView.userName.text = name

          Glide.with(activity)
            .load(userImage)
            .placeholder(R.drawable.user_placeholder)
            .into(friendInView.userImage);


          Log.d("ZOOPLA", "the data is this -> ")
        }
      }
    }
  }
}