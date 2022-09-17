package com.example.pawcket_mobile.Functions

import android.util.Log
import com.example.pawcket_mobile.db
import com.example.pawcket_mobile.viewmodel.PetsViewModel
import com.example.roomapp.model.Pets

@Suppress("UNCHECKED_CAST")
class getPetDataAndSetInLocalDB {

  companion object {

    val TAG = "getPetData"
    fun getAndSetPetData(
      userId: String, localData: List<Pets>, mPetViewModel: PetsViewModel
    ) {
      val petsRefDB = db.collection("pets").document(userId)

      petsRefDB.addSnapshotListener { snapshot, e ->
        if (e != null) {
          Log.e(TAG, "An error occurred the error is: $e")
          return@addSnapshotListener
        }
        if (snapshot != null && snapshot.exists()) {
          val data = snapshot.data
          val firebasePetsData = data?.get("pets")
          val localPetsData = if (localData.isNotEmpty()) localData[0].petsData else ArrayList()

          Log.d(TAG, "the data is this -> $firebasePetsData")

          if (firebasePetsData == null) {
            mPetViewModel.deleteAllPets()
          }

          if (data?.isNotEmpty() == true) {
            Log.d(TAG, "there was data in the db")
            val petsData = data["pets"] as ArrayList<HashMap<String, String>>
            val petData = Pets(0, petsData, userId)

            if (petsData.isEmpty()) {
              mPetViewModel.deleteAllPets()
            } else if (petsData.isNotEmpty() && localData.isEmpty()) {
              mPetViewModel.addPet(petData) { _, _ -> }
            } else if (firebasePetsData != localPetsData) {
              Log.d(TAG, "The data has been updated!")
              mPetViewModel.updatePet(petData)
            }
          }
        } else {
          Log.i(TAG, "there was no data in the db.")
          mPetViewModel.deleteAllPets()
        }
      }
    }
  }
}
