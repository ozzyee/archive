package com.example.pawcket_mobile.Functions.HelperClasses
import com.example.pawcket_mobile.databinding.UserPetIconDashboardBinding

data class FriendsView(
  var friend1UserName: UserPetIconDashboardBinding,
  var friend2UserName: UserPetIconDashboardBinding,
  var friend3UserName: UserPetIconDashboardBinding
) {
  operator fun get(s: String): UserPetIconDashboardBinding {
    return when (s) {
      "friend1" -> friend1UserName
      "friend2" -> friend2UserName
      "friend3" -> friend3UserName
      else -> friend1UserName
    }
  }
}
