@file:Suppress("NAME_SHADOWING", "OPT_IN_IS_NOT_ENABLED")

package com.example.mums_notes.feature_multi_floating_action_button.components

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.updateTransition
import androidx.compose.animation.scaleIn
import androidx.compose.animation.scaleOut
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.material.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp
import androidx.compose.ui.zIndex
import androidx.navigation.NavHostController
import com.example.mums_notes.feature_multi_floating_action_button.MultiFabState
import com.example.mums_notes.navigation.Screen

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun MultiFloatingActionButton(
  navController: NavHostController,
  fabIcon: ImageVector,
  state: MultiFabState,
  stateChanged: (fabState: MultiFabState) -> Unit
) {
  val transition = updateTransition(targetState = state, label = "")
  val rotation: Float by transition.animateFloat(label = "") { state ->
    if (state == MultiFabState.EXPANDED) 45f else 0f
  }

  var showList by remember { mutableStateOf(false) }
  showList = state == MultiFabState.EXPANDED



  Box(
    modifier = Modifier
      .height(190.dp)
      .zIndex(2f)
  ) {
    AnimatedVisibility(
      enter = scaleIn(),
      visible = showList,
      exit = scaleOut()
    ) {
      Column(
        modifier = Modifier
      ) {
        MultiFabItem(
          name = "Add Card",
          onClick = {
            navController.navigate(Screen.CreateCardScreen.router)
          }
        )
        MultiFabItem(
          name = "Add Note",
          onClick = {
            navController.navigate(Screen.NoteScreen.router)
          }
        )
      }
    }

    FloatingActionButton(
      modifier = Modifier
        .align(Alignment.BottomEnd)
        .size(65.dp),
      backgroundColor = MaterialTheme.colorScheme.primary,
      onClick = { stateChanged(state) }) {
      Icon(
        fabIcon,
        contentDescription = "Add Content",
        tint = Color.White,
        modifier = Modifier
          .size(26.dp)
          .rotate(rotation)
      )
    }
  }

}
