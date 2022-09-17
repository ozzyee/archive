package com.example.pawcket_mobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase

class MainActivity : AppCompatActivity() {
  private lateinit var auth: FirebaseAuth

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    val loginButton = findViewById<Button>(R.id.login_btn)
    loginButton.setOnClickListener {
      val intent = Intent(this, LoginActivity::class.java)
      startActivity(intent)
      overridePendingTransition(android.R.anim.slide_in_left, android.R.anim.fade_out)
    }

    val signUpButton = findViewById<Button>(R.id.sign_up_btn)
    signUpButton.setOnClickListener {
      val intent = Intent(this, SignUpActivity::class.java)
      startActivity(intent)
      overridePendingTransition(android.R.anim.slide_in_left, android.R.anim.fade_out)
    }
  }

  override fun onStart() {
    auth = Firebase.auth
    super.onStart()
    val currentUser = auth.currentUser
    if (currentUser !== null) {
      val intent = Intent(this, CreateUserActivity::class.java)
      startActivity(intent)
      overridePendingTransition(android.R.anim.slide_in_left, android.R.anim.fade_out)
      finish()
    }
  }
}