package com.example.mums_notes.util.validation

fun passwordsMatch(password: String, confirmPassword: String): String {
  if (confirmPassword.isBlank()) return "No Confirm Password"
  return if (password != confirmPassword) "Passwords Don't match" else ""
}