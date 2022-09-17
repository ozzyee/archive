package com.example.roomapp.data

import androidx.lifecycle.LiveData
import androidx.room.*
import com.example.roomapp.model.Pets

@Dao
interface petsDao {

  @Insert(onConflict = OnConflictStrategy.IGNORE)
  suspend fun addPets(user: Pets)
//  @Update
//  suspend fun updatePets(user: Pets)

  @Delete
  suspend fun deletePet(user: Pets)

  @Query("DELETE FROM pets_table")
  suspend fun deleteAllPets()

  @Query("SELECT * FROM pets_table ORDER BY id ASC")
  fun readAllData(): LiveData<List<Pets>>

  @Update(onConflict = OnConflictStrategy.REPLACE)
  fun updatePets(pets: Pets)


  @Query("SELECT * FROM pets_table WHERE uid=:userID")
  fun getUserByID(userID: String): LiveData<List<Pets>>
}