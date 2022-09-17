package com.example.pawcket_mobile.viewmodel

import androidx.lifecycle.AndroidViewModel
import android.app.Application
import androidx.lifecycle.LiveData
import androidx.lifecycle.viewModelScope
import com.example.roomapp.data.UserDatabase
import com.example.roomapp.model.Pets
import com.example.roomapp.model.User
import com.example.roomapp.repository.PetsRepository
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch


class PetsViewModel(application: Application) : AndroidViewModel(application) {
  val readAllData: LiveData<List<Pets>>
  val getPetsByID: LiveData<List<Pets>>
  val repository: PetsRepository

  init {
    val petsDao = UserDatabase.getDatabase(
      application
    ).petsDao()

    repository = PetsRepository(petsDao)
    readAllData = repository.readAllData
    getPetsByID = repository.getPetByID
  }

  fun addPet(pet: Pets, callback: (error:Boolean, errMsg:String) -> Unit) {
    viewModelScope.launch(Dispatchers.IO) {
      repository.addPet(pet) { error, errMsg ->
        callback.invoke(error, errMsg)
      }
    }
  }

  fun updatePet(pet: Pets) {
    viewModelScope.launch(Dispatchers.IO) {
      repository.updatePet(pet)
    }
  }

  fun deletePet(pet: Pets) {
    viewModelScope.launch(Dispatchers.IO) {
      repository.deletePet(pet)
    }
  }

  fun deleteAllPets() {
    viewModelScope.launch(Dispatchers.IO) {
      repository.deleteAllPets()
    }
  }
}
