package com.example.mums_notes.util.firebase.authentication.google_login

import android.content.Context
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions


fun getGoogleSignInClient(context: Context, webId: String): GoogleSignInClient {
  val signInOptions = GoogleSignInOptions
    .Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
    .requestIdToken(webId)
    .requestEmail()
    .build()

  return GoogleSignIn.getClient(context, signInOptions)
}