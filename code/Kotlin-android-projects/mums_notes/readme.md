private fun authSignIn() {
val providers = arrayListOf(
AuthUI.IdpConfig.EmailBuilder().build(),
AuthUI.IdpConfig.GoogleBuilder().build()
)

    val signinIntent =
      AuthUI.getInstance().createSignInIntentBuilder().setAvailableProviders(providers).build()

    signInLauncher.launch(signinIntent)
}

private var user: FirebaseUser? = FirebaseAuth.getInstance().currentUser
val signInLauncher = registerForActivityResult(
FirebaseAuthUIActivityResultContract()
) { res ->
this.signinResult(res)
}

fun signinResult(result: FirebaseAuthUIAuthenticationResult) {
val response = result.idpResponse

    if (result.resultCode == RESULT_OK) {
      user = FirebaseAuth.getInstance().currentUser
    } else {
      Log.e("RegisterScreen", "the error is: ${response?.error?.errorCode}")
    }
}
test