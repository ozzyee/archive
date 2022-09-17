package com.example.roomapp.repository

import androidx.lifecycle.LiveData
import com.example.roomapp.data.petsDao
import com.example.roomapp.model.Pets
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase
import com.google.gson.Gson

class PetsRepository(private val PetsDaoDao: petsDao) {
  private val user = Firebase.auth.currentUser

  val readAllData: LiveData<List<Pets>> = PetsDaoDao.readAllData()
  val getPetByID: LiveData<List<Pets>> = PetsDaoDao.getUserByID(user!!.uid)


  suspend fun addPet(
    pet: Pets, callback: (error: Boolean, errMsg: String) -> Unit
  ) {
    PetsDaoDao.addPets(pet)
  }

   fun updatePet(pet: Pets) {
    PetsDaoDao.updatePets(pet)
  }

  suspend fun deletePet(pet: Pets) {
    PetsDaoDao.deletePet(pet)
  }

  suspend fun deleteAllPets() {
    PetsDaoDao.deleteAllPets()
  }
}
