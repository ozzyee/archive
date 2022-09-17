package com.example.pawcket_mobile.Functions

fun checkFriendsData(
  firebaseData: ArrayList<Any>?,
  localData: ArrayList<HashMap<String, String>>,
): Pair<ArrayList<HashMap<String, String>>, Boolean> {
  val firebaseDataToArrayList = friendsArrayConverted(firebaseData)
  val firebaseDataSorted = sortUserData.sortUserData(firebaseDataToArrayList)
  val localDataSorted = sortUserData.sortUserData(localData)

  val localDataDoseNotMatchMatches = !localDataSorted.containsAll(firebaseDataSorted)
  val firebaseDataDoseNotMatchMatches = !firebaseDataSorted.containsAll(localDataSorted)

  return if (localDataDoseNotMatchMatches || firebaseDataDoseNotMatchMatches) {
    firebaseDataToArrayList to false
  } else {
    firebaseDataToArrayList to true
  }
}