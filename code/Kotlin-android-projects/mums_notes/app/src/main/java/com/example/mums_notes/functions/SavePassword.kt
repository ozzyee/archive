package com.example.mums_notes.functions

import android.content.SharedPreferences

fun savePassword(sharedPreferences: SharedPreferences, key: String, secret: String): String {
  with(sharedPreferences.edit()) {
    putString(key, secret)
    apply()
    return secret
  }
}