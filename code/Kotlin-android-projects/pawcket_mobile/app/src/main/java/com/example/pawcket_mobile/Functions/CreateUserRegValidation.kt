package com.example.pawcket_mobile

import android.graphics.Color
import android.os.Build
import android.text.Editable
import android.util.Log
import androidx.annotation.RequiresApi
import com.example.pawcket_mobile.databinding.CreateUserBinding
import java.time.LocalDate
import java.time.Period

open class createUserValidation {
  companion object {
    @JvmStatic
    fun isNameValid(name: String): Boolean {
      return name.matches("^[a-zA-Z]*$".toRegex())
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun isUserOlderEnough(dob: String): Boolean {
      if (dob == "Date of Birth") {
        return false
      }

      val dobSplit = dob.split("/")
      val dobYear = dobSplit[2].toInt()
      val dobMonth = dobSplit[1].toInt()
      val dobDay = dobSplit[0].toInt()

      val todaysDate = LocalDate.now()
      val userDob = LocalDate.of(dobYear, dobMonth, dobDay)
      val yearDiff = Period.between(userDob, todaysDate).years

      return yearDiff >= 13
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun checkUser(
      binding: CreateUserBinding,
      fnameValue: Editable,
      lnameValue: Editable,
      dobValue: CharSequence
    ): Boolean {
      var isDataValid = false;

      val fNameValid = isNameValid("$fnameValue")
      val lNameValid = isNameValid("$lnameValue")
      val isOldEnough = isUserOlderEnough("$dobValue")


      if (fnameValue.isEmpty() && lnameValue.isEmpty() && dobValue == "Date of Birth") {
        binding.etFname.setHintTextColor(Color.parseColor("#FF3D33"))
        binding.etLname.setHintTextColor(Color.parseColor("#FF3D33"))
        binding.dobText.setTextColor(Color.parseColor("#FF3D33"))

        showSnackBar(
          binding.snackBarWrapper,
          "You must fill in all requiered fieelds!"
        )

      } else if (fnameValue.isEmpty() && lnameValue.isEmpty()) {
        binding.etFname.setHintTextColor(Color.parseColor("#FF3D33"))
        binding.etLname.setHintTextColor(Color.parseColor("#FF3D33"))
        binding.dobText.setTextColor(Color.parseColor("#FF000000"))

        showSnackBar(
          binding.snackBarWrapper,
          "You must fill in your First name & Last Name!",
        )

      } else if (fnameValue.isEmpty() && dobValue == "Date of Birth") {
        binding.etFname.setHintTextColor(Color.parseColor("#FF3D33"))
        binding.etLname.setTextColor(Color.parseColor("#FF000000"))
        binding.dobText.setTextColor(Color.parseColor("#FF3D33"))

        showSnackBar(
          binding.snackBarWrapper,
          "You must fill in your First name & Date of birth!",
        )

      } else if (lnameValue.isEmpty() && dobValue == "Date of Birth") {
        binding.etFname.setHintTextColor(Color.parseColor("#FF000000"))
        binding.etLname.setHintTextColor(Color.parseColor("#FF3D33"))
        binding.dobText.setTextColor(Color.parseColor("#FF3D33"))

        showSnackBar(
          binding.snackBarWrapper,
          "You must fill in your Last name & Date of birth!",
        )

      } else if (!fNameValid || fnameValue.isEmpty()) {
        binding.etFname.setHintTextColor(Color.parseColor("#FF3D33"))
        binding.etLname.setHintTextColor(Color.parseColor("#FF000000"))
        binding.dobText.setTextColor(Color.parseColor("#FF000000"))

        if (fnameValue.isEmpty()) {
          showSnackBar(
            binding.snackBarWrapper,
            "You must enter a your First Name!",
          )
        } else {
          showSnackBar(
            binding.snackBarWrapper,
            "You must enter a valid First Name!",
          )
        }

      } else if (!lNameValid || lnameValue.isEmpty()) {
        binding.etFname.setHintTextColor(Color.parseColor("#FF000000"))
        binding.etLname.setHintTextColor(Color.parseColor("#FF3D33"))
        binding.dobText.setTextColor(Color.parseColor("#FF000000"))

        if (lnameValue.isEmpty()) {
          showSnackBar(
            binding.snackBarWrapper,
            "You must enter your Last Name!",
          )
        } else {
          showSnackBar(
            binding.snackBarWrapper,
            "You must enter a valid Last Name!",
          )
        }

      } else if (!isOldEnough) {
        binding.etFname.setHintTextColor(Color.parseColor("#FF000000"))
        binding.etLname.setHintTextColor(Color.parseColor("#FF000000"))
        binding.dobText.setTextColor(Color.parseColor("#FF3D33"))

        if (dobValue == "Date of Birth") {
          showSnackBar(
            binding.snackBarWrapper,
            "You must enter your Date of Birth! ",
          )
        } else {
          showSnackBar(
            binding.snackBarWrapper,
            "Sorry your not old enough!",
          )
        }
      } else {
        isDataValid = true
      }



      return isDataValid
    }
  }
}



