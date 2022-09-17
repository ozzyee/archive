package com.example.pawcket_mobile.Functions

open class sortUserData {
  companion object {
    fun sortUserData(data: ArrayList<HashMap<String, String>>): MutableList<friendsData> {
      val newDataArray: MutableList<friendsData> = ArrayList()

      for (friend in data) {
        val friendsDataSorted = friendsData(
          "${friend["friendID"]}",
          "${friend["requestAccepted"]}",
          "${friend["chatID"]}"
        )
        newDataArray.add(friendsDataSorted)
      }

      return newDataArray
    }

    data class friendsData(
      var friendID: String,
      var requestAccepted: String,
      var chatID: String
    )
  }
}