package com.example.mums_notes.feature_cards.presentation.cards.HelperFunctions

import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.input.OffsetMapping
import androidx.compose.ui.text.input.TransformedText

fun bankCardNumber(text: AnnotatedString): TransformedText {
  val trimmed =
    if (text.text.length >= 24) text.text.substring(0..24) else text.text

  val annotatedString = AnnotatedString.Builder().run {
    for (i in trimmed.indices) {
      append(trimmed[i])
      if (i == 3 || i == 7 || i == 11 || i == 16 && i != 17) {
        append("-")
      }
    }
    toAnnotatedString()
  }

  val bankNumberOffsetTranslator = object : OffsetMapping {
    override fun originalToTransformed(offset: Int): Int {
      if (offset <= 3) return offset
      if (offset <= 7) return offset + 1
      if (offset <= 11) return offset + 2
      if (offset <= 16) return offset + 3
      return 19
    }

    override fun transformedToOriginal(offset: Int): Int {
      if (offset <= 4) return offset
      if (offset <= 9) return offset - 1
      if (offset <= 14) return offset - 2
      if (offset <= 19) return offset - 3
      return 16
    }
  }

  return TransformedText(annotatedString, bankNumberOffsetTranslator)
}
