package com.example.pawcket_mobile.Functions.HelperClasses

import com.example.pawcket_mobile.databinding.UserPetIconDashboardBinding

data class PetsView(
  var pets1UserName: UserPetIconDashboardBinding,
  var pets2UserName: UserPetIconDashboardBinding,
  var pets3UserName: UserPetIconDashboardBinding
){
  operator fun get(s: String): UserPetIconDashboardBinding {
    return when (s) {
      "pet1" -> pets1UserName
      "pet2" -> pets2UserName
      "pet3" -> pets3UserName
      else -> pets1UserName
    }
  }
}