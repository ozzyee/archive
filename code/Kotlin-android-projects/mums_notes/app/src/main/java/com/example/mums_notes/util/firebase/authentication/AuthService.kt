package com.example.mums_notes.util.firebase.authentication

import android.util.Log
import android.widget.Toast
import com.example.mums_notes.MainActivity
import com.facebook.AccessToken
import com.facebook.CallbackManager
import com.facebook.FacebookCallback
import com.facebook.FacebookException
import com.facebook.login.LoginManager
import com.facebook.login.LoginResult
import com.google.firebase.auth.FacebookAuthProvider
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase


open class AutService() : MainActivity() {
  private val auth: FirebaseAuth = Firebase.auth

  fun facbookLogin(
    callbackManager: CallbackManager,
    activity: MainActivity,
    callback: (hasLoggedInSuccessfully: Boolean) -> Unit,
  ) {
    LoginManager.getInstance()
      .logInWithReadPermissions(activity, listOf("public_profile", "email"))

    LoginManager.getInstance().registerCallback(callbackManager, object :
      FacebookCallback<LoginResult> {
      override fun onSuccess(result: LoginResult) {
        Log.d("MainActivity123", "facebook:onSuccess:$result")
        handleFacebookAccessToken(result.accessToken) {
          callback.invoke(it)
        }
      }

      override fun onCancel() {
        Log.d("MainActivity123", "facebook:onCancel")
      }

      override fun onError(error: FacebookException) {
        Log.d("MainActivity123", "facebook:onError", error)
      }
    })
  }

  fun handleFacebookAccessToken(
    token: AccessToken,
    callback: (hasLoggedInSuccessfully: Boolean) -> Unit,
  ) {
    val credential = FacebookAuthProvider.getCredential(token.token)
    auth.signInWithCredential(credential)
      .addOnCompleteListener(this) { task ->
        if (task.isSuccessful) {
          callback.invoke(true)
          Log.d("MainActivity123", "signInWithCredential:success")
        } else {
          callback.invoke(false)
          Log.w("MainActivity123", "signInWithCredential:failure", task.exception)
          Toast.makeText(baseContext, "Authentication failed.",
            Toast.LENGTH_SHORT).show()
        }
      }
  }

  fun passwordRegister(email: String, password: String, callback: (String) -> Unit) {
    auth.createUserWithEmailAndPassword(email, password)
      .addOnCompleteListener(this) { task ->
        Log.d("RegisterViewModel", "Register Task -> $task")
        if (task.isSuccessful) {
          Log.d("successRegister", "msg -> success")
          callback.invoke("success")
        } else {
          Log.d("successRegister", "msg -> ${task.exception}")
          callback.invoke("failure: ${task.exception}")
        }
      }
  }

  fun passwordLogin(email: String, password: String) {
    auth.signInWithEmailAndPassword(email, password)
      .addOnCompleteListener(this) { task ->
        if (task.isSuccessful) {
          // Sign in success, update UI with the signed-in user's information
          Log.d("RegisterScreen", "signInWithEmail:success")
//          updateUI(user)
        } else {
          // If sign in fails, display a message to the user.
          Log.w("RegisterScreen", "signInWithEmail:failure", task.exception)
          Toast.makeText(baseContext, "Authentication failed.",
            Toast.LENGTH_SHORT).show()
//          updateUI(null)
        }
      }
  }
}



