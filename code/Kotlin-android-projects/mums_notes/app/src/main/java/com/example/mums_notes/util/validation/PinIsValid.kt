package com.example.mums_notes.util.validation

fun pinIsValid(pin: String): String {
  if (pin.isBlank()) return "No Pin"

  val regex = "-?[0-9]+(\\.[0-9]+)?".toRegex()
  if (!pin.matches(regex)) return "Pin Must Only Contain Numbers"

  if (pin.length < 4) return "Pin Must Be At Least 4 Number's"

  return ""
}

fun confirmPinIsValid(confirmPin: String, pin: String): String {
  if (confirmPin.isBlank()) return "No Confirm Pin"

  if (confirmPin != pin) return "Confirm Pin Doesn't Match"

  return ""
}