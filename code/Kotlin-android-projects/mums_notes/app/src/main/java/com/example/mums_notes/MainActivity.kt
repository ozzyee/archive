@file:Suppress("OPT_IN_IS_NOT_ENABLED")

package com.example.mums_notes

import android.annotation.SuppressLint
import android.content.Intent
import android.content.pm.ActivityInfo
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.compose.setContent
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.runtime.*
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import com.example.mums_notes.navigation.Navigation
import com.example.mums_notes.ui.theme.MyTheme
import com.example.mums_notes.util.firebase.authentication.AutService
import com.example.mums_notes.util.firebase.authentication.google_login.GoogleAuthResultContract
import com.facebook.CallbackManager
import com.google.accompanist.navigation.animation.rememberAnimatedNavController
import com.google.accompanist.pager.ExperimentalPagerApi
import com.google.android.gms.common.api.ApiException
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.GoogleAuthProvider
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase
import dagger.hilt.android.AndroidEntryPoint


@Suppress("DEPRECATION")
@AndroidEntryPoint
open class MainActivity : ComponentActivity() {
  private var callbackManager = CallbackManager.Factory.create()
  private lateinit var auth: FirebaseAuth


  @SuppressLint("SourceLockedOrientationActivity")
  @OptIn(ExperimentalAnimationApi::class, ExperimentalPagerApi::class)
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
    auth = Firebase.auth

    val authService = AutService()
    val mUser = FirebaseAuth.getInstance().currentUser;

    mUser!!.getIdToken(true)
      .addOnCompleteListener { task ->
        if (task.isSuccessful) {
//          val idToken: String = task.getResult().getToken()
          Log.d("UserDetailsViewModel", "id token: ${task.result.token}")
        } else {
        }
      }

    setContent {
      val navController = rememberAnimatedNavController()
      val signInRequestCode = 1
      var isLoggedIn by remember { mutableStateOf(false) }
      isLoggedIn = auth.currentUser != null
      val googleAuthResultLauncher =
        rememberLauncherForActivityResult(contract = GoogleAuthResultContract(getString(R.string.google_web_id))) { task ->
          try {
            val account = task?.getResult(ApiException::class.java)
            firebaseAuthWithGoogle(account?.idToken) { hasLoggedInSuccessfully ->
              isLoggedIn = hasLoggedInSuccessfully
            }
          } catch (e: ApiException) {
            Toast.makeText(this, "$e", Toast.LENGTH_LONG).show()
          }
        }

//      LifecycleEventListener(event = { lifecycleEvent ->
//        when (lifecycleEvent) {
//          Lifecycle.Event.ON_RESUME -> {
//            val currentRoute = navController.currentBackStackEntry?.destination?.route
//
////            if (currentRoute != "login" && currentRoute != "splash-screen") {
////              navController.popBackStack()
////              navController.navigate(Screen.RegisterScreen.router)
////            }
//          }
//          else -> return@LifecycleEventListener
//        }
//      })

      MyTheme {
        Navigation(navController,
          isLoggedIn = isLoggedIn,
          googleLogin = {
            googleAuthResultLauncher.launch(signInRequestCode)
          },
          facebookLogin = {
            authService.facbookLogin(callbackManager, this) { hasLoggedInSuccessfully ->
              isLoggedIn = hasLoggedInSuccessfully
            }
          }
        )
      }
    }
  }

  @Deprecated("Deprecated in Java")
  override fun onActivityResult(
    requestCode: Int,
    resultCode: Int,
    data: Intent?,
  ) {
    super.onActivityResult(requestCode, resultCode, data)
    callbackManager.onActivityResult(requestCode, resultCode, data)
  }

  private fun firebaseAuthWithGoogle(idToken: String?, callback: (Boolean) -> Unit) {
    try {
      val credential = GoogleAuthProvider.getCredential(idToken, null)
      auth.signInWithCredential(credential)
        .addOnCompleteListener(this) { task ->
          if (task.isSuccessful) {
            callback.invoke(true)
          } else {
            callback.invoke(false)
          }
        }
    } catch (_: ApiException) {

    }
  }

  @Composable
  fun ComponentActivity.LifecycleEventListener(event: (Lifecycle.Event) -> Unit) {
    val eventHandler by rememberUpdatedState(newValue = event)
    val lifecycle = this@LifecycleEventListener.lifecycle
    DisposableEffect(lifecycle) {
      val observer = LifecycleEventObserver { _, event ->
        eventHandler(event)
      }

      lifecycle.addObserver(observer)

      onDispose {
        lifecycle.removeObserver(observer)
      }
    }
  }
}
