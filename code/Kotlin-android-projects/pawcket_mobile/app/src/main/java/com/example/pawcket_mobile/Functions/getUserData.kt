package com.example.pawcket_mobile.Functions

import android.util.Log
import com.example.pawcket_mobile.db
import com.example.roomapp.model.User
import com.example.roomapp.model.UserDataFB
import com.google.firebase.firestore.ktx.toObject
import com.google.gson.Gson
import com.google.gson.JsonParser
import kotlin.reflect.full.memberProperties

@Suppress("UNCHECKED_CAST")
open class getUserData {
  companion object {
    val TAG = "getAndSetUserData"

    fun getData(
      userID: String,
      localUsers: List<User>,
      callback: (user: User, dataChanged: Boolean) -> Unit
    ) {
//?   create a reference to the users data in firebase
      val docRef = db.collection("users").document(userID)

//?   we loop through the users data as the users in an array
      for (user in localUsers) {

//?     we then make a new instance of the user data class and pass in an id we only pass in the id as we will be putting in the rest of the data in later
        val userObject = User(0)

//?     we then listen to are firebase database
        docRef.addSnapshotListener { snapshot, e ->

//?       if there was any errors in the process we log the error and return earlie as we don't wont the rest of the data to be run
          if (e != null) {
            Log.e(TAG, "Listen failed.", e)
            return@addSnapshotListener

//?         if there was data in the db we will then go into this if statement
          } else if (snapshot != null && snapshot.exists()) {

//?         we then create an object from the firebase data so we can use it
// *        Note: we are putting a type to the end of the object. this is important because this is how we convert it into a json object
            val data = snapshot.toObject<UserDataFB>()

//?         we then create a json object form the firebase data
            val firebaseData = JsonParser.parseString(Gson().toJson(data)).asJsonObject

//?         we then loop through the users data object as we wont the value names
            for (userValue in User::class.memberProperties) {

//?           as we don't wont the id and uid we ignore them with this if statement
              if (userValue.name !== "uid" && userValue.name !== "id") {

//?             as the friends and friendsRequest data are arrays we need to deal with that differently this is why we have this if statement this skips these values
                if (userValue.name !== "friends" && userValue.name !== "friendsRequests") {

//?               we then add the other values to are user class we made at the top
// *              Note: we use the values names. this is a part of the user data class this is set in are for loop at the top
                  userObject[userValue.name] =
//?                 as we are using a json object it puts quotes around the strings at this point we wont to remove them
                    removeQuotes(firebaseData.get(userValue.name).toString())
                }
//?             as the friends data is an array we have to deal with it differently to check if they match. in this case we have made a function to check this for us as we wont to keep are code dry
                val (friendsData, friendsDataMatches) = checkFriendsData(
                  data?.friends,
                  localUsers[0].friends
                )
                val (friendsRequestData, friendsRequestDataMatches) = checkFriendsData(
                  data?.friendsRequests,
                  localUsers[0].friendsRequests
                )

//?             we then check if eather the friends or the friendsRequests data dosen't match and if this is true we update are local db
// *            Note: we have the or statement because if we didn't it would cause an infinite loop this is because it would wipe the other data out in witch the data wouldn't ever match
                if (!friendsDataMatches || !friendsRequestDataMatches) {
                  userObject.friends = friendsData
                  userObject.friendsRequests = friendsRequestData
                  callback.invoke(userObject, true)
                }

//?             to check if the data matches we turn them into json object and use the equality operator this is done by using bracket notation
                val firebaseJsonObject =
                  JsonParser.parseString(Gson().toJson(userObject)).asJsonObject
                val localData = JsonParser.parseString(Gson().toJson(user)).asJsonObject

//?             we then check the localData with the firebase data and if they don't match this will return true
                val valuesDoNotMatch =
                  removeQuotes(firebaseJsonObject.get(userValue.name).toString()) != removeQuotes(
                    localData.get(userValue.name).toString()
                  )

//?             we then check if the values don't match and the current value is ether friends or friendsRequests this is because we don't wont to check these values
                if (
                  valuesDoNotMatch && userValue.name != "friends" && userValue.name != "friendsRequests"
                ) {
                  callback.invoke(userObject, true)
                }
              }
            }
//?         if there wasn't any data we just log a message
          } else {
            Log.d(TAG, "Current data: null")
          }
        }
      }
    }

    //? this function just removes the quotes from a string
    private fun removeQuotes(string: String): String {
      val removeQuotes = string.replace("\"", "");
      return removeQuotes
    }
  }
}


