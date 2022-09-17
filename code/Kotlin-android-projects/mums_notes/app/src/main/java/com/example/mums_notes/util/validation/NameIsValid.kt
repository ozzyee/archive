package com.example.mums_notes.util.validation

fun nameIsValid(name: String): String {
  if (name.isBlank()) return "You Must Enter Your Name"

  return ""
}