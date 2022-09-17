package com.example.pawcket_mobile

import android.annotation.SuppressLint
import android.graphics.Color
import android.os.Bundle
import android.util.Log
import android.view.WindowManager
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.layoutId
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Devices
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.constraintlayout.compose.ConstraintLayout
import androidx.constraintlayout.compose.ConstraintSet
import androidx.constraintlayout.compose.Dimension
import androidx.core.view.WindowCompat
import androidx.core.view.isVisible
import androidx.lifecycle.ViewModelProvider
import com.bumptech.glide.Glide
import com.example.myapplication.ui.theme.*
import com.example.pawcket_mobile.Functions.HelperClasses.FriendsView
import com.example.pawcket_mobile.Functions.HelperClasses.PetsView
import com.example.pawcket_mobile.Functions.getFriendsData
import com.example.pawcket_mobile.Functions.getPetDataAndSetInLocalDB
import com.example.pawcket_mobile.Functions.getUserData
import com.example.pawcket_mobile.Functions.setFriendsInView
import com.example.pawcket_mobile.ui.layouts.Dashboard
import com.example.pawcket_mobile.viewmodel.PetsViewModel
import com.example.roomapp.viewmodel.UserViewModel
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase
import java.io.IOException
import java.util.HashMap
import kotlin.properties.Delegates

@Suppress("UNCHECKED_CAST", "NAME_SHADOWING")
class DashboardActivity : AppCompatActivity() {
  val TAG = "DashboardActivityTag"
  private val user = Firebase.auth.currentUser
  private lateinit var mUserViewModel: UserViewModel
  private lateinit var mPetViewModel: PetsViewModel
  private var userIsOnline by Delegates.notNull<Boolean>()


  @SuppressLint("SetTextI18n")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    setContent {
      MaterialTheme(
        colors = if (isSystemInDarkTheme()) DarkColors else LightColors
      ) {
        Dashboard()
      }
    }


    //    mUserViewModel = ViewModelProvider(this).get(UserViewModel::class.java)
//    mPetViewModel = ViewModelProvider(this).get(PetsViewModel::class.java)
//
//    val binding = DashboardBinding.inflate(layoutInflater)
//    setContentView(binding.root)
//    binding.bgImg.setImageResource(R.drawable.pawcket_img)
//    binding.frame.setImageResource(R.drawable.frame)
//    binding.searchFriends.text = "Find Friends"
//    binding.petsText.text = "Pets"
//    binding.addPet.text = "Add Pet"
//
//    userIsConnectedToInternet() {
//      userIsOnline = it
//    }
//
//    mPetViewModel.getPetsByID.observe(this) { localData ->
//      val localPetsData = if (localData.isNotEmpty()) localData[0].petsData else ArrayList()
//      val petsView = PetsView(binding.pet1, binding.pet2, binding.pet3)
//      val petsLimit = if (localPetsData.size > 3) 3 else localPetsData.size
//
//      if (localPetsData.size > 0) {
//        binding.petsWrapper.isVisible = true
//        binding.addPetBtn.isVisible = false
//        binding.addPet.isVisible = true
//
//        if (localPetsData.size > 3) {
//          binding.seeMorePets.isVisible = true
//        }
//
//        for (currentPet in 0..petsLimit) {
//          val index = if (currentPet - 1 == -1) 0 else currentPet - 1
//          val petName = localPetsData[index]["name"]
//          val petImage = localPetsData[index]["image"]
//          val currentPetInView = petsView["pet$index"]
//
//
//          currentPetInView.userName.text = petName
//          Glide.with(this)
//            .load(petImage)
//            .placeholder(R.drawable.user_placeholder)
//            .into(currentPetInView.userImage);
//        }
//      }
//
//      if (userIsOnline) {
//        getPetDataAndSetInLocalDB.getAndSetPetData(user!!.uid, localData, mPetViewModel)
//      }
//    }
//
//    mUserViewModel.readAllData.observe(this) { LocalUserData ->
//      val userData = LocalUserData[0]
//      val firstName = userData.firstName
//      val userName = userData.userName
//      val DOB = userData.DOB
//      val address = userData.address
//      val postCode = userData.postCode
//      val image = userData.userImage
//      val friends = userData.friends
//
//      val nameText = binding.userName
//      val addressLabel = binding.addressLabel
//      val addressText = binding.addressText
//      val dobText = binding.dobText
//      val addFriendBtn = binding.addFriendBtn
//      val addPetsBtn = binding.addPetBtn
//      val friendsWrapper = binding.friendsWrapper
//      val searchFriendsText = binding.searchFriends
//      val friendsContent = binding.friendsCount
//      val seeMoreFriendsBtn = binding.seeMoreFriends
//      binding.friendsText.text = "Friends"
//
//      addFriendBtn.text = "Add"
//      addPetsBtn.text = "Add"
//
//      Glide.with(this)
//        .load(image)
//        .placeholder(R.drawable.user_placeholder)
//        .into(binding.userImage);
//
//      if (userName.isNotEmpty()) {
//        nameText.text = stringCapitalized(userName)
//      } else {
//        nameText.text =
//          stringCapitalized(firstName)
//      }
//
//      if (address.isNotEmpty() && address != "null") {
//        addressText.isVisible = true
//        addressLabel.isVisible = true
//        if (postCode.isNotEmpty() && postCode != "null") {
//          addressText.text = "$address $postCode"
//        } else {
//          addressText.text = "$address "
//        }
//      } else {
//        addressText.isVisible = false
//        addressLabel.isVisible = false
//      }
//
//      val dobSplit = DOB.split(" ")
//      dobText.text = dobSplit[1] + " " + dobSplit[2] + " " + dobSplit[3]
//
//      if (friends.size > 0) {
//        addFriendBtn.isVisible = false
//        friendsWrapper.isVisible = true
//        searchFriendsText.isVisible = true
//        friendsContent.isVisible = true
//        friendsContent.text = "${friends.size} friends"
//        seeMoreFriendsBtn.text = "See more friends"
//
//        if (friends.size > 3) seeMoreFriendsBtn.isVisible = true
//
//        setFriendsInView.set(friends, binding, this)
//      }
//
//      if (userIsOnline) {
//        getUserData.getData(
//          user!!.uid,
//          LocalUserData,
//        ) { userData, dataChanged ->
//          if (dataChanged) {
//            mUserViewModel.updateUser(userData)
//          }
//        }
//      }
//    }
  }


  override fun onBackPressed() {
    moveTaskToBack(true)
  }

  private fun stringCapitalized(string: String) = string[0].uppercaseChar() + string.substring(1)

  @Throws(InterruptedException::class, IOException::class)
  fun userIsConnectedToInternet(callback: (status: Boolean) -> Unit) {
    val command = "ping -c 1 google.com"
    callback.invoke(Runtime.getRuntime().exec(command).waitFor() == 0)
  }
}