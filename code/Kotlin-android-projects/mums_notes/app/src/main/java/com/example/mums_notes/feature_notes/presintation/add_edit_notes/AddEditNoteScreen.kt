@file:Suppress("NAME_SHADOWING")

package com.example.mums_notes.feature_notes.presintation.add_edit_notes

import android.annotation.SuppressLint
import android.util.Log
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.FloatingActionButton
import androidx.compose.material.Icon
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Done
import androidx.compose.material.rememberScaffoldState
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.example.mums_notes.feature_notes.data_class.NoteData
import com.example.mums_notes.feature_notes.domain.model.Note
import com.example.mums_notes.feature_notes.presintation.add_edit_notes.components.ColorSelector
import com.example.mums_notes.feature_notes.presintation.add_edit_notes.components.TransparentHintTextField
import com.google.accompanist.insets.ui.Scaffold
import kotlinx.coroutines.flow.collectLatest


@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@Composable
fun AddEditNoteScreen(
//  ROUTE Arguments
  noteColor: String?,
  noteTitle: String?,
  noteContent: String?,
//  OTHER Arguments
  viewModel: AddEditNoteViewModel = hiltViewModel(),
  navController: NavHostController,
  callback: (AddEditNoteViewModel) -> Unit,
) {
  callback.invoke(viewModel)
  val scaffoldState = rememberScaffoldState()
  val titleState = viewModel.noteTitle.value
  val contentState = viewModel.noteContent.value

  val noteData = NoteData(
    Color = if (noteColor?.isNotEmpty() == true) noteColor.toInt() else Note.noteColors.random()
      .toArgb(),
    Title = if (noteTitle?.isNotEmpty() == true) noteTitle else "",
    Content = if (noteContent?.isNotEmpty() == true) noteContent else ""
  )

  Log.d("AddEditNoteScreen", "noteColor -> $noteColor")

  var noteColor by remember { mutableStateOf(noteData.Color!!) }
  viewModel.onEvent(AddEditNoteEvent.ChangeColor(noteColor))

  var noteTitle by remember { mutableStateOf("${noteData.Title}") }
  viewModel.onEvent(AddEditNoteEvent.EnteredTitle(noteTitle))

  var noteContent by remember { mutableStateOf("${noteData.Content}") }
  viewModel.onEvent(AddEditNoteEvent.EnteredContent(noteContent))

  LaunchedEffect(key1 = true) {
    viewModel.eventFlow.collectLatest { event ->
      Log.d("NOTES", "the event is -> $event")
      when (event) {
        is AddEditNoteViewModel.UiEvent.ShowSnackbar -> {
          scaffoldState.snackbarHostState.showSnackbar(
            message = event.message
          )
        }
        is AddEditNoteViewModel.UiEvent.SaveNote -> {
          navController.navigateUp()
        }
      }
    }
  }

  Scaffold(
    scaffoldState = scaffoldState,
    floatingActionButton = {
      FloatingActionButton(
        onClick = {
          viewModel.onEvent(AddEditNoteEvent.SaveNote)
        },
      ) {
        Icon(imageVector = Icons.Default.Done, contentDescription = "Save note")
      }
    },
  ) {
    Column(Modifier.background(Color(noteColor))) {

      Column(
        modifier = Modifier.padding(16.dp)
      ) {
        ColorSelector(Color(noteColor)) {
          noteColor = it
        }

        Spacer(modifier = Modifier.height(16.dp))

        TransparentHintTextField(
          text = noteTitle,
          hint = titleState.hint,
          onValueChange = {
            noteTitle = it
//            viewModel.onEvent(AddEditNoteEvent.EnteredTitle(it))
          },
          onFocusChange = {
            viewModel.onEvent(AddEditNoteEvent.ChangeTitleFocus(it))
          },
          isHintVisible = titleState.isHintVisible,
          singleLine = true,
          textStyle = MaterialTheme.typography.headlineSmall,
          modifier = Modifier.height(30.dp)
        )

        Spacer(modifier = Modifier.height(16.dp))

        TransparentHintTextField(
          text = noteContent,
          hint = contentState.hint,
          onValueChange = {
            noteContent = it
          },
          onFocusChange = {
            viewModel.onEvent(AddEditNoteEvent.ChangeContentFocus(it))
          },
          isHintVisible = contentState.isHintVisible,
          singleLine = false,
          textStyle = MaterialTheme.typography.bodyLarge,
          modifier = Modifier
            .fillMaxHeight()
            .padding(3.dp)
        )
      }
    }
  }
}
