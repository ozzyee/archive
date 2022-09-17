package com.example.roomapp.data

import android.content.Context
import androidx.room.*
import com.example.roomapp.model.FriendsTypeConverter
import com.example.roomapp.model.Pets
import com.example.roomapp.model.User

@Database(entities = [User::class, Pets::class], version = 1, exportSchema = false)
@TypeConverters(FriendsTypeConverter::class)
abstract class UserDatabase : RoomDatabase() {

  abstract fun userDao(): UserDao
  abstract fun petsDao(): petsDao

  companion object {
    @Volatile
    private var INSTANCE: UserDatabase? = null

    fun getDatabase(context: Context): UserDatabase {
      val tempInstance = INSTANCE
      if (tempInstance != null) {
        return tempInstance
      }
      synchronized(this) {
        val instance = Room.databaseBuilder(
          context.applicationContext,
          UserDatabase::class.java,
          "user_database"
        ).build()
        INSTANCE = instance
        return instance
      }
    }
  }

}