package com.example.roomapp.model

import android.os.Parcelable
import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.TypeConverter
import com.google.common.reflect.TypeToken
import com.google.gson.Gson
import kotlinx.android.parcel.Parcelize
import java.io.Serializable
import java.util.*
import kotlin.collections.ArrayList
import kotlin.collections.HashMap


@Parcelize
@Entity(tableName = "pets_table")
data class Pets(
  @PrimaryKey(autoGenerate = false)
  val id: Int,
  val petsData: ArrayList<HashMap<String, String>> = ArrayList(),
  val uid: String = "boo123"
) : Parcelable