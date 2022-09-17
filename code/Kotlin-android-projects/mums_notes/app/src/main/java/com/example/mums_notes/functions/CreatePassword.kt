package com.example.mums_notes.functions

import java.util.*

fun createPassword(n: Int): String {
  val characterSet =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/!@£$%&*()_+=|±§€#¢∞§^"

  val random = Random(System.nanoTime())
  val password = StringBuilder()

  for (i in 0 until n) {
    val rIndex = random.nextInt(characterSet.length)
    password.append(characterSet[rIndex])
  }

  return password.toString()
}