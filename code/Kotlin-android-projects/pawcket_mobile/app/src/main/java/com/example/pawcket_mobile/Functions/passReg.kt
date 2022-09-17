package com.example.pawcket_mobile

import HelperFunctions.CustomErrMessage
import android.annotation.SuppressLint
import android.text.Editable
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.example.pawcket_mobile.databinding.SignUpBinding
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase

@SuppressLint("StaticFieldLeak")
val db = Firebase.firestore

fun passwordReg(
  email: Editable,
  password: Editable,
  auth: FirebaseAuth,
  context: AppCompatActivity,
  binding: SignUpBinding,
  callback: (status: Boolean) -> Unit
) {
  auth.createUserWithEmailAndPassword("$email", "$password")
    .addOnCompleteListener(context) { task ->
      val currentFirebaseUser = FirebaseAuth.getInstance().getCurrentUser();

      if (task.isSuccessful) {
        if (currentFirebaseUser?.uid?.isNotEmpty()!!) {
          val userData = hashMapOf(
            "email" to "$email"
          )

          db.collection("users").document(currentFirebaseUser.uid)
            .set(userData)
            .addOnSuccessListener {
              callback.invoke(true)
            }
            .addOnFailureListener { e ->
              callback.invoke(true)
              showSnackBar(
                binding.snackBarErr,
                "$e",
              )
            }

        }
      } else {
        // If sign in fails, display a message to the user.
        Log.w("TAG", "signInWithEmail:failure")
        val err = CustomErrMessage("${task.exception}")
        callback.invoke(false)
        showSnackBar(
          binding.snackBarErr,
          err,
        )
      }
    }
}