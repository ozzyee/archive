package com.example.pawcket_mobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import com.example.pawcket_mobile.Functions.setUserOnLogin
import com.example.pawcket_mobile.databinding.SignUpBinding
import com.facebook.AccessToken
import com.facebook.CallbackManager
import com.facebook.FacebookCallback
import com.facebook.FacebookException
import com.facebook.login.LoginManager
import com.facebook.login.LoginResult
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.api.ApiException
import com.google.firebase.auth.FacebookAuthProvider
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.GoogleAuthProvider
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase

class SignUpActivity : AppCompatActivity() {
  companion object {
    const val CONST_SIGN_IN = 34
  }

  private lateinit var auth: FirebaseAuth
  private lateinit var googleAuth: GoogleSignInClient
  val callbackManager = CallbackManager.Factory.create()
  var TAG = "TAG"


  override fun onCreate(savedInstanceState: Bundle?) {
    //  initialize firebase
    auth = Firebase.auth

    // Load the view and display it
    val binding = SignUpBinding.inflate(layoutInflater)
    super.onCreate(savedInstanceState)
    setContentView(binding.root)

    // Display the Logo and Background
    binding.logo.setImageResource(R.drawable.dummy_logo)
    binding.bgImg.setImageResource(R.drawable.pawcket_img)
    binding.name.setImageResource(R.drawable.untitled)
    binding.welcome.setImageResource(R.drawable.welcome)

    // Password register
    binding.regBtn.setOnClickListener {
      // get all input for the text
      val emailTextView = binding.emailTv.text
      val passwordTextView = binding.passwordTv.text
      val confirmTextView = binding.confirmTv.text
      canUserSignUp(
        emailTextView,
        passwordTextView,
        confirmTextView,
        binding,
        auth,
        this
      ) { res ->
        if (res) {
          val intent = Intent(this, CreateUserActivity::class.java)
          startActivity(intent)
          overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
          finish()
        }
      }
    }

    // Google Login
    val gso = GoogleSignInOptions
      .Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
      .requestIdToken(getString(R.string.default_web_client_id))
      .requestEmail()
      .build()

    googleAuth = GoogleSignIn.getClient(this, gso)

    binding.googleLogo.setOnClickListener {
      googleLogIN()
    }

    // Facebook login
    binding.facebookLogo.setOnClickListener {
      LoginManager.getInstance().logInWithReadPermissions(this, listOf("public_profile", "email"))
    }
    LoginManager.getInstance()
      .registerCallback(callbackManager, object : FacebookCallback<LoginResult> {
        override fun onSuccess(result: LoginResult) {
          Log.d(TAG, "facebook:onSuccess:$result")
          handleFacebookAccessToken(result.accessToken)
        }

        override fun onCancel() {
          Log.d(TAG, "facebook:onCancel")
          // ...
        }

        override fun onError(error: FacebookException) {
          Log.d(TAG, "facebook:onError", error)
          // ...
        }
      })

    binding.LoginText.setOnClickListener {
      val intent = Intent(this, LoginActivity::class.java)
      startActivity(intent)
      overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
      finish()
    }
  }

  private fun logUserIntoUI() {
    setUserOnLogin.setUser(this) { userSaved ->
      if (userSaved) {
        val intent = Intent(this, DashboardActivity::class.java)
        startActivity(intent)
        overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
        finish()
      } else {
        val intent = Intent(this, CreateUserActivity::class.java)
        startActivity(intent)
        overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
        finish()
      }
    }
  }

  private fun googleLogIN() {
    val account = GoogleSignIn.getLastSignedInAccount(this)
    if (account == null) {
      val signInIntent = googleAuth.signInIntent
      startActivityForResult(signInIntent, LoginActivity.CONST_SIGN_IN)
    }
  }

  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    super.onActivityResult(requestCode, resultCode, data)

    if (requestCode == LoginActivity.CONST_SIGN_IN) {
      val task = GoogleSignIn.getSignedInAccountFromIntent(data)

      try {
        val account = task.getResult(ApiException::class.java)
        firebaseAuthWithGoogle(account?.idToken)
      } catch (e: ApiException) {
        Toast.makeText(this, "$e", Toast.LENGTH_LONG).show()
      }
    } else {
      callbackManager.onActivityResult(requestCode, resultCode, data)
    }
  }

  private fun firebaseAuthWithGoogle(idToken: String?) {
    val credential = GoogleAuthProvider.getCredential(idToken, null)
    auth.signInWithCredential(credential)
      .addOnCompleteListener(this) {
        logUserIntoUI()
      }
  }

  private fun handleFacebookAccessToken(token: AccessToken) {
    Log.d(TAG, "handleFacebookAccessToken:$token")

    val credential = FacebookAuthProvider.getCredential(token.token)
    auth.signInWithCredential(credential)
      .addOnCompleteListener(this) { task ->
        if (task.isSuccessful) {
          logUserIntoUI()
        } else {
          // If sign in fails, display a message to the user.
          Log.w(TAG, "signInWithCredential:failure", task.exception)
          Toast.makeText(
            baseContext, "Authentication failed.",
            Toast.LENGTH_SHORT
          ).show()

        }
      }
  }

  override fun onBackPressed() {
    val intent = Intent(this, MainActivity::class.java)
    startActivity(intent)
    overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
    finish()
  }

  override fun onStart() {
    auth = Firebase.auth
    super.onStart()
    val currentUser = auth.currentUser
    if (currentUser !== null) {
      val intent = Intent(this, CreateUserActivity::class.java)
      startActivity(intent)
      overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
      finish()
    }
  }
}
