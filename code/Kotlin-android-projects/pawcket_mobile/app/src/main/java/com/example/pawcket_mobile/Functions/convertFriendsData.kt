package com.example.pawcket_mobile.Functions

@Suppress("UNCHECKED_CAST")
open class convertFriendsData {
  companion object {
    fun convert(
      data: ArrayList<Any>,
//      callback: (data: ArrayList<HashMap<String, String>>) -> Unit
    ): MutableList<sortUserData.Companion.friendsData> {
      val newDataArray: ArrayList<HashMap<String, String>> = ArrayList()
      if (data.isNotEmpty() && data.size > 1) {
        for (item in data.drop(1)) newDataArray.add(item as HashMap<String, String>)
      }

      return sortUserData.sortUserData(newDataArray)
    }
  }
}