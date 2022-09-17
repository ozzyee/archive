package com.example.roomapp.model

import android.os.Parcelable
import android.util.Log
import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.TypeConverter
import com.google.common.reflect.TypeToken
import com.google.gson.Gson
import kotlinx.android.parcel.Parcelize
import kotlin.collections.ArrayList
import kotlin.collections.HashMap


@Parcelize
@Entity(tableName = "user_table")
data class User(
  @PrimaryKey(autoGenerate = false)
  val id: Int = 0,
  var firstName: String = "",
  var lastName: String = "",
  var userName: String = "",
  var DOB: String = "",
  var tel: String = "",
  var address: String = "",
  var postCode: String = "",
  var extraInfo: String = "",
  var userImage: String = "",
  var email: String = "",
  var userID: String = "boo123",
  var friendsRequests: ArrayList<HashMap<String, String>> = ArrayList(),
  var friends: ArrayList<HashMap<String, String>> = ArrayList(),

  ) : Parcelable {
  operator fun set(s: String, value: String) {
    when (s) {
      "firstName" -> firstName = value
      "lastName" -> lastName = value
      "userName" -> userName = value
      "DOB" -> DOB = value
      "tel" -> tel = value
      "address" -> address = value
      "postCode" -> postCode = value
      "extraInfo" -> extraInfo = value
      "userImage" -> userImage = value
      "email" -> email = value
      "userID" -> userID = value
    }
  }
}

class FriendsTypeConverter {
  @TypeConverter
  fun fromString(value: String?): ArrayList<HashMap<String, String>> {
    val listType = object : TypeToken<ArrayList<HashMap<String, String>>>() {}.type
    return Gson().fromJson(value, listType)
  }

  @TypeConverter
  fun fromArrayList(list: ArrayList<HashMap<String, String>?>): String {
    return Gson().toJson(list)
  }
}

data class UserDataFB(
  val email: String? = null,
  val DOB: String? = null,
  val address: String? = null,
  val extraInfo: String? = null,
  val friends: ArrayList<Any>? = null,
  val friendsRequests: ArrayList<Any>? = null,
  val lastName: String? = null,
  val postCode: String? = null,
  val tel: String? = null,
  val userID: String? = null,
  val userImage: String? = null,
  val userName: String? = null,
  val firstName: String? = null
) {}