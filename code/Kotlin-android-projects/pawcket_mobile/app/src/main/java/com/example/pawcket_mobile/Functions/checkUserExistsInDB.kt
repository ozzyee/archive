package com.example.pawcket_mobile.Functions

import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.example.roomapp.viewmodel.UserViewModel


open class checkUserExistsInDB {
  companion object {
    fun checkUser(
      mUserViewModel: UserViewModel,
      context: AppCompatActivity,
      callback: (userSaved: Boolean) -> Unit
    ) {
      mUserViewModel.getUserByID.observe(context) { user ->
        if (user.isNotEmpty()) {
          if (user[0].firstName.isNotEmpty() && user[0].lastName.isNotEmpty() && user[0].DOB.isNotEmpty()) {
            callback.invoke(true)
          }
        } else if (user.isEmpty()) {
          callback.invoke(false)
        }
      }
    }
  }
}
