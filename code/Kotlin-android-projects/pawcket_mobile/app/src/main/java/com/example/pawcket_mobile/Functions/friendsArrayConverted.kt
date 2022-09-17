@file:Suppress("UNCHECKED_CAST")

package com.example.pawcket_mobile.Functions

fun friendsArrayConverted(data: ArrayList<Any>?): ArrayList<HashMap<String, String>> {
  val array: ArrayList<HashMap<String, String>> = ArrayList()

  if (data?.isNotEmpty() == true && data.size > 1) {
    if (data[0] == "") {
      for (friend in data.drop(1)) array.add(friend as HashMap<String, String>)
    } else {
      for (friend in data) array.add(friend as HashMap<String, String>)
    }
  }

  return array
}