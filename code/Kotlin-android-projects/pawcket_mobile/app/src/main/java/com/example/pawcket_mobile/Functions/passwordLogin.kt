package com.example.pawcket_mobile

import HelperFunctions.CustomErrMessage
import android.text.Editable
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.example.pawcket_mobile.databinding.LoginBinding
import com.google.firebase.auth.FirebaseAuth

fun passwordLogin(
  email: Editable,
  password: Editable,
  auth: FirebaseAuth,
  context: AppCompatActivity,
  binding: LoginBinding,
  callback: (status: Boolean) -> Unit
) {
  auth.signInWithEmailAndPassword("$email", "$password")
    .addOnCompleteListener(context) { task ->
      if (task.isSuccessful) {
        Log.w("TAG", "signInWithEmail:passes", task.exception)
        callback.invoke(true)
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