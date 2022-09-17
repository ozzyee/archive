package com.example.mums_notes.feature_keyboard.components

import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.spring
import androidx.compose.animation.core.updateTransition
import androidx.compose.foundation.*
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.PressInteraction
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import  androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.input.pointer.pointerInput
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.mums_notes.feature_keyboard.KeyboardViewmodel


enum class BounceState { Pressed, Released }

@Composable
fun BounceButton(
  onClick: () -> Unit = {},
  isIconButton: Boolean = false,
  viewModel: KeyboardViewmodel = hiltViewModel(),
  content: @Composable () -> Unit
) {
  var currentState: BounceState by remember { mutableStateOf(BounceState.Released) }
  val transition = updateTransition(targetState = currentState, label = "animation")
  val interactionSource = remember { MutableInteractionSource() }

  val scale: Float by transition.animateFloat(
    transitionSpec = { spring(stiffness = 2500f) }, label = ""
  ) { state ->
    if (state == BounceState.Pressed) {
      0.75f
    } else {
      1f
    }
  }
  Surface(
    contentColor = Color.Transparent,
    color = Color.Transparent,
    modifier = Modifier.clip(CircleShape)
  ) {
    Box(
      modifier = Modifier
        .fillMaxSize()
        .indication(interactionSource, LocalIndication.current)
        .pointerInput(Unit) {
          detectTapGestures(onPress = {
            currentState = BounceState.Pressed

            if (!viewModel.isDisabled.value.isDisabled && !isIconButton) {
              onClick()
            }

            if (isIconButton) onClick()


            val press = PressInteraction.Press(it)
            interactionSource.emit(press)

            tryAwaitRelease()

            currentState = BounceState.Released
            interactionSource.emit(PressInteraction.Release(press))
          })
        }) {
      Box(
        modifier = Modifier
          .fillMaxSize()
          .graphicsLayer {
            scaleX = scale
            scaleY = scale
          })
      {
        content()
      }
    }
  }
}
