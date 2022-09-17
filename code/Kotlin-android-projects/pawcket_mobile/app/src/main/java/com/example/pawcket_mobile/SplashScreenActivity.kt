package com.example.pawcket_mobile

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.lifecycle.ViewModelProvider
import com.example.pawcket_mobile.Functions.checkUserExistsInDB
import com.example.roomapp.model.User
import com.example.roomapp.model.UserDataFB
import com.example.roomapp.viewmodel.UserViewModel
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.firestore.ktx.toObject
import com.google.firebase.ktx.Firebase
import kotlinx.android.synthetic.main.activity_splash_screen.*
import java.util.ArrayList
import java.util.HashMap

@Suppress("NAME_SHADOWING")
@SuppressLint("CustomSplashScreen")
class SplashScreenActivity : AppCompatActivity() {
  private lateinit var mUserViewModel: UserViewModel
  private lateinit var auth: FirebaseAuth

  override fun onCreate(savedInstanceState: Bundle?) {
    auth = Firebase.auth
    val currentUser = auth.currentUser

    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_splash_screen)

    loading_ic.alpha = 0f
    loading_ic.animate().setDuration(1600).alpha(1f).withEndAction {


      if (currentUser !== null) {
        mUserViewModel = ViewModelProvider(this).get(UserViewModel::class.java)

//      get the data from firebase if any
        val user = Firebase.auth.currentUser
        val userInDB = db.collection("users").document(user!!.uid)
        userInDB.get().addOnSuccessListener { documentSnapshot ->
//        we create an object from are db and give it a data class for are types
          val userDATA = documentSnapshot.toObject<UserDataFB>()

//        we check if the user data if filled in if it isn't we then send the user to create user.
          if (userDATA?.firstName == null || userDATA.lastName == null || userDATA.DOB == null) {
            loadCreateUser()
          }

//       if user has data in db check if the data is in the local db
          if (userDATA?.firstName?.isNotEmpty() == true
            && userDATA.lastName?.isNotEmpty() == true
            && userDATA.DOB?.isNotEmpty() == true
          ) {
//          check if user is saved in local db
            checkUserExistsInDB.checkUser(mUserViewModel, this) { userSavedLocally ->
//            if the user is saved in are local db then we can send the user to the dashboard
              if (userSavedLocally) {
                loadDashboard()
              } else if (!userSavedLocally) {
//                since the user has data in firebase we need to set them in room db and then send them to the dashboard

//                since the user may or may not have friends we create an empty array and add to it we do the same with friends requests
                val friendsRequests = (userDATA.friendsRequests ?: ArrayList())
                val friendsReq = ArrayList<HashMap<String, String>>()
                val firends = (userDATA.friends ?: ArrayList())
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
                    loadDashboard()
                  }
                }
              }
            }
          }


        }
      } else {
        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
        overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
        finish()
      }
    }
  }

  private fun loadDashboard() {
    val intent = Intent(this, DashboardActivity::class.java)
    startActivity(intent)
    overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
    finish()
  }

  private fun loadCreateUser() {
    val intent = Intent(this, CreateUserActivity::class.java)
    startActivity(intent)
    overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
    finish()
  }
}
