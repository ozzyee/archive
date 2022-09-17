package com.example.mums_notes.feature_notes.domain.use_case

import com.example.mums_notes.feature_notes.domain.model.Note
import com.example.mums_notes.feature_notes.domain.repository.NoteRepository

class GetNote(
  private val repository: NoteRepository
) {

  suspend operator fun invoke(id: Int): Note? {
    return repository.getNoteById(id)
  }
}