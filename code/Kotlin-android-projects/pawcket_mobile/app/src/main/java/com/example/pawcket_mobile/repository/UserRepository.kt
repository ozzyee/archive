package com.example.roomapp.repository

import android.util.Log
import androidx.lifecycle.LiveData
import com.example.roomapp.data.UserDao
import com.example.roomapp.model.User
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase

class UserRepository(private val userDao: UserDao) {
  private val currentFirebaseUser = FirebaseAuth.getInstance().currentUser
  private val user = Firebase.auth.currentUser
  val db = Firebase.firestore
  val userInDB = db.collection("users").document(user!!.uid)

  val readAllData: LiveData<List<User>> = userDao.readAllData()
  val getUserByID: LiveData<List<User>> = userDao.getUserByID(user!!.uid)


  suspend fun addUser(
    user: User, callback: (error: Boolean, errMsg: String) -> Unit
  ) {

    userDao.addUser(user)


    // Creating a user data object for the db
    val userData = hashMapOf(
      "firstName" to user.firstName,
      "lastName" to user.lastName,
      "userName" to user.userName,
      "DOB" to user.DOB,
      "tel" to user.tel,
      "address" to user.address,
      "postCode" to user.postCode,
      "extraInfo" to user.extraInfo,
      "userImage" to user.userImage,
      "userID" to user.userID
    )

    userInDB.update(userData as Map<String, Any>)
      .addOnSuccessListener {
        callback.invoke(false, "data was saved to database")
      }
      .addOnFailureListener { e ->
        val errorMsg =
          "NOT_FOUND: No document to update: projects/pawcket-372d7/databases/(default)/documents/users/${user.userID}"

        if (e.message == errorMsg) {
          db.collection("users").document(user.userID)
            .set(userData)
            .addOnSuccessListener {
              callback.invoke(false, "data was saved to database")
            }
            .addOnFailureListener { e ->
              callback.invoke(true, "$e")
            }

        } else {
          callback.invoke(true, "$e")
        }
      }

  }

  suspend fun updateUser(user: User) {
    userDao.updateUser(user)
  }

  suspend fun deleteUser(user: User) {
    userDao.deleteUser(user)
  }

  suspend fun deleteAllUsers() {
    userDao.deleteAllUsers()
  }
}
