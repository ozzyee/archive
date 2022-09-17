package com.example.mums_notes.feature_home.presintation.components

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.google.accompanist.pager.ExperimentalPagerApi
import com.google.accompanist.pager.PagerState
import kotlinx.coroutines.launch

@Suppress("OPT_IN_IS_NOT_ENABLED")
@OptIn(ExperimentalPagerApi::class)
@Composable
fun Navigation(pagerState: PagerState, pages: List<String>) {
  val scope = rememberCoroutineScope()

  Row(modifier = Modifier.padding(16.dp)) {
    pages.forEachIndexed() { index, name ->
      Text(
        text = name,
        fontSize = 18.sp,
        modifier = Modifier.clickable {
          scope.launch {
            pagerState.animateScrollToPage(index)
          }
        },
        color = if (pagerState.currentPage == index) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.onBackground
      )
      Spacer(modifier = Modifier.width(16.dp))
    }
  }
}