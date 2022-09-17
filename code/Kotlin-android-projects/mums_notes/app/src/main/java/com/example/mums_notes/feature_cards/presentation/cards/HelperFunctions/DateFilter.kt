package com.example.mums_notes.feature_cards.presentation.cards.HelperFunctions

import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.input.OffsetMapping
import androidx.compose.ui.text.input.TransformedText


fun dateFilter(text: AnnotatedString): TransformedText {
  val trimmed = if (text.text.length >= 8) text.text.substring(0..7) else text.text
  var out = ""
  for (i in trimmed.indices) {
    out += trimmed[i]
    if (i == 1) out += "/"
  }

  val numberOffsetTranslator = object : OffsetMapping {
    override fun originalToTransformed(offset: Int): Int {
      if (offset <= 1) return offset
      if (offset <= 4) return offset + 1
      return 9

    }

    override fun transformedToOriginal(offset: Int): Int {
      if (offset <= 2) return offset
      if (offset <= 6) return offset - 1
      return 8
    }
  }

  return TransformedText(AnnotatedString(out), numberOffsetTranslator)
}