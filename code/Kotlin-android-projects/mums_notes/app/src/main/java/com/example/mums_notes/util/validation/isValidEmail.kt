package com.example.mums_notes.util.validation

import android.util.Patterns

fun isValidEmail(value: String): String {

  if (value.isBlank()) {
    return "No Email"
  }

  return if (!Patterns.EMAIL_ADDRESS.matcher(value).matches()) {
    "Invalid Email"
  } else {
    ""
  }
}
