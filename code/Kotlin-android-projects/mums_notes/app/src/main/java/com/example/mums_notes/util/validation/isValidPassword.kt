package com.example.mums_notes.util.validation

fun isValidPassword(password: String): String {
  val passwordPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=/])(?=\\S+$).{4,}$"
  val passwordMatcher = Regex(passwordPattern)

  if (password.isBlank()) return "No Password"

  if (passwordMatcher.find(password) == null) return "Invalid Password"

  return ""
}