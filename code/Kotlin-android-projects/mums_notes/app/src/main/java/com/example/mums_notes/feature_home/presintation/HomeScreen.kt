@file:Suppress("OPT_IN_IS_NOT_ENABLED")

package com.example.mums_notes.feature_home.presintation

import android.content.Context
import android.util.Log
import android.widget.Toast
import androidx.activity.compose.BackHandler
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Add
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalLifecycleOwner
import androidx.compose.ui.unit.dp
import androidx.compose.ui.zIndex
import androidx.lifecycle.LifecycleOwner
import androidx.navigation.NavHostController
import com.example.mums_notes.feature_home.presintation.components.Navigation
import com.example.mums_notes.feature_home.presintation.layouts.AllContent
import com.example.mums_notes.feature_home.presintation.layouts.Cards
import com.example.mums_notes.feature_home.presintation.layouts.Notes
import com.example.mums_notes.feature_multi_floating_action_button.MultiFabState
import com.example.mums_notes.feature_multi_floating_action_button.components.MultiFloatingActionButton
import com.google.accompanist.insets.ui.Scaffold
import com.google.accompanist.pager.ExperimentalPagerApi
import com.google.accompanist.pager.HorizontalPager
import com.google.accompanist.pager.rememberPagerState
import java.util.*
import kotlin.concurrent.schedule
import kotlin.system.exitProcess

@OptIn(ExperimentalPagerApi::class)
@Composable
fun HomeScreen(
  navController: NavHostController,
  lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
) {
  val pagerState = rememberPagerState()
  val pages = listOf("All", "Cards", "Notes")
  var isButtonExpanded by remember { mutableStateOf(MultiFabState.COLLAPSED) }
  var showBackground by remember { mutableStateOf(false) }
  val interactionSource = remember { MutableInteractionSource() }


  val cards = listOf<String>(
    "zopa", "zopa", "zopa", "zopa", "zopa"
  )

  var backpressureCount: Int = 0
  fun closeApp(context: Context) {
    backpressureCount += 1
    Log.d("HOME_ACT", "this is working $backpressureCount")

    if (backpressureCount == 2) {
      exitProcess(-1)
    } else {
      Toast.makeText(
        context,
        "Press back again to exit.",
        Toast.LENGTH_SHORT
      ).show()

      Timer("SettingUp", false).schedule(3000) {
        backpressureCount = 0
      }
    }
  }

  val context = LocalContext.current
  BackHandler(enabled = true) {
    closeApp(context)
  }

  Scaffold(
    backgroundColor = MaterialTheme.colorScheme.background,
    floatingActionButton = {
      MultiFloatingActionButton(
        navController = navController,
        state = isButtonExpanded,
        fabIcon = Icons.Outlined.Add,
      ) {
        if (it == MultiFabState.COLLAPSED) {
          isButtonExpanded = MultiFabState.EXPANDED
          showBackground = true
        } else {
          isButtonExpanded = MultiFabState.COLLAPSED
          showBackground = false
        }
      }
    },
  ) {
    Box(modifier = Modifier
      .zIndex(1f)
      .clickable(
        interactionSource = interactionSource, indication = null
      ) {
        if (isButtonExpanded == MultiFabState.EXPANDED) {
          isButtonExpanded = MultiFabState.COLLAPSED
          showBackground = false
        }
      }) {
      AnimatedVisibility(
        enter = fadeIn(),
        exit = fadeOut(),
        visible = showBackground,
      ) {
        Box(
          modifier = Modifier
            .background(Color.Black.copy(alpha = 0.5f))
            .zIndex(1f)
            .fillMaxSize()
        )
      }
    }

    Column(
      modifier = Modifier.fillMaxSize()
    ) {
      Navigation(pagerState, pages)
      HorizontalPager(
        count = pages.size,
        modifier = Modifier.fillMaxSize(),
        state = pagerState,
      ) { page ->
        Column(
          modifier = Modifier
            .padding(start = 16.dp, end = 16.dp)
            .fillMaxSize()
        ) {
          when (page) {
            0 -> AllContent(cards)
            1 -> Cards(cards)
            2 -> Notes()
          }
        }
      }
    }
  }
}