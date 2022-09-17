package com.example.pawcket_mobile
import android.graphics.Color
import android.view.Gravity
import android.view.View
import android.widget.FrameLayout
import android.widget.LinearLayout
import android.widget.TextView
import com.google.android.material.snackbar.BaseTransientBottomBar
import com.google.android.material.snackbar.Snackbar

fun showSnackBar(scvreenLocatin: LinearLayout, message: String) {
  val snackBarView =
    Snackbar.make(scvreenLocatin, message, Snackbar.LENGTH_LONG).apply {
      view.setBackgroundColor(Color.parseColor("#FF3D33"))
    }

  val view = snackBarView.view
  val params = view.layoutParams as FrameLayout.LayoutParams
  params.gravity = Gravity.TOP
  view.layoutParams = params
  snackBarView.animationMode = BaseTransientBottomBar.ANIMATION_MODE_FADE

  val tv = view.findViewById<View>(R.id.snackbar_text) as TextView
  tv.setTextColor(Color.parseColor("#FFFFFF"))
  snackBarView.show()
}


