package com.example.mums_notes.Components

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Visibility
import androidx.compose.material.icons.filled.VisibilityOff
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusDirection
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.TransformedText
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.example.mums_notes.feature_cards.presentation.cards.HelperFunctions.bankCardNumber
import com.example.mums_notes.feature_cards.presentation.cards.HelperFunctions.dateFilter

@Composable
fun TextField(
  label: String,
  modifier: Modifier,
  onChange: (String) -> Unit,
  text: String = "",
  isSingleLine: Boolean = true,
  keyboardType: KeyboardType = KeyboardType.Text,
  translation: String = "default",
  isError: Boolean = false,
  errorMessage: String = "",
  secureInput: Boolean = false,
) {
  val focusManager = LocalFocusManager.current
  var limit = 10000
  if (translation == "date" || translation == "pin") limit = 4
  if (translation == "cvv") limit = 3
  if (translation == "bank") limit = 16

  var passwordVisible by rememberSaveable { mutableStateOf(false) }


  fun filterType(annotatedString: AnnotatedString): TransformedText {
    return when (translation) {
      "date" -> dateFilter(annotatedString)
      else -> {
        bankCardNumber(annotatedString)
      }
    }
  }

  if (secureInput) {
    Column(modifier = modifier) {
      OutlinedTextField(value = text,
        onValueChange = {
          if (it.length > limit) {
            focusManager.moveFocus(FocusDirection.Down)
          } else {
            onChange.invoke(it)
          }
        },
        label = { Text(label) },
        modifier = modifier,
        singleLine = isSingleLine,
        visualTransformation = if (passwordVisible) VisualTransformation.None else PasswordVisualTransformation(),
        keyboardOptions = KeyboardOptions(
          keyboardType = keyboardType,
        ),
        isError = isError,
        colors = TextFieldDefaults.outlinedTextFieldColors(
          focusedTrailingIconColor = MaterialTheme.colorScheme.onBackground,
          unfocusedTrailingIconColor = MaterialTheme.colorScheme.onBackground,
          unfocusedBorderColor = MaterialTheme.colorScheme.onSurface,
          textColor = MaterialTheme.colorScheme.secondary,
          unfocusedLabelColor = MaterialTheme.colorScheme.onBackground,
        ),
        trailingIcon = {
          val image = if (passwordVisible) Icons.Filled.Visibility
          else Icons.Filled.VisibilityOff
          val description = if (passwordVisible) "Hide password" else "Show password"

          IconButton(onClick = { passwordVisible = !passwordVisible }) {
            Icon(imageVector = image, description)
          }
        })

      Row(
        modifier = Modifier
          .fillMaxWidth()
          .height(20.dp)
      ) {
        Text(
          text = errorMessage,
          color = MaterialTheme.colorScheme.error,
          style = MaterialTheme.typography.bodySmall,
          textAlign = TextAlign.Start,
          modifier = Modifier
            .weight(3f)
            .padding(start = 16.dp, top = 4.dp),
        )

        if (limit != 10000) {
          Text(
            text = "${text.length}/$limit",
            color = Color.Gray,
            style = MaterialTheme.typography.bodySmall,
            modifier = Modifier
              .weight(0.8f)
              .padding(end = 16.dp, top = 4.dp),
            textAlign = TextAlign.End,
          )
        }
      }
    }
  } else if (translation != "default" && translation != "pin" && translation != "cvv") {
    Column(modifier = modifier) {
      OutlinedTextField(
        value = text,
        onValueChange = {
          if (it.length > limit) {
            focusManager.moveFocus(FocusDirection.Down)
          } else {
            onChange.invoke(it)
          }
        },
        label = { Text(label) },
        modifier = modifier,
        singleLine = isSingleLine,
        keyboardOptions = KeyboardOptions(
          keyboardType = keyboardType,
        ),
        colors = TextFieldDefaults.outlinedTextFieldColors(
          unfocusedBorderColor = MaterialTheme.colorScheme.onSurface,
          textColor = MaterialTheme.colorScheme.secondary,
          unfocusedLabelColor = MaterialTheme.colorScheme.onBackground,
        ),
        visualTransformation = {
          filterType(it)
        },
        isError = isError
      )
      Row(
        modifier = Modifier
          .fillMaxWidth()
          .height(20.dp)

      ) {
        Text(
          text = errorMessage,
          color = MaterialTheme.colorScheme.error,
          style = MaterialTheme.typography.bodySmall,
          textAlign = TextAlign.Start,
          modifier = Modifier
            .weight(1f)
            .padding(start = 16.dp, top = 4.dp),
        )

        Text(
          text = "${text.length}/$limit",
          color = Color.Gray,
          style = MaterialTheme.typography.bodySmall,
          modifier = Modifier
            .weight(1f)
            .padding(end = 16.dp, top = 4.dp),
          textAlign = TextAlign.End,
        )
      }
    }
  } else {
    Column(modifier = modifier) {
      OutlinedTextField(
        value = text,
        onValueChange = {
          if (it.length > limit) {
            focusManager.moveFocus(FocusDirection.Down)
          } else {
            onChange.invoke(it)
          }
        },
        colors = TextFieldDefaults.outlinedTextFieldColors(
          unfocusedBorderColor = MaterialTheme.colorScheme.onSurface,
          textColor = MaterialTheme.colorScheme.secondary,
          unfocusedLabelColor = MaterialTheme.colorScheme.onBackground,
        ),
        label = { Text(label) },
        modifier = modifier,
        singleLine = isSingleLine,
        keyboardOptions = KeyboardOptions(
          keyboardType = keyboardType,
        ),
        isError = isError
      )

      Row(
        modifier = Modifier
          .fillMaxWidth()
          .height(20.dp)

      ) {
        Text(
          text = errorMessage,
          color = MaterialTheme.colorScheme.error,
          style = MaterialTheme.typography.bodySmall,
          textAlign = TextAlign.Start,
          modifier = Modifier
            .weight(3f)
            .padding(start = 16.dp, top = 4.dp),
        )

        if (limit != 10000) {
          Text(
            text = "${text.length}/$limit",
            color = Color.Gray,
            style = MaterialTheme.typography.bodySmall,
            modifier = Modifier
              .weight(0.8f)
              .padding(end = 16.dp, top = 4.dp),
            textAlign = TextAlign.End,
          )
        }
      }
    }
  }
}

