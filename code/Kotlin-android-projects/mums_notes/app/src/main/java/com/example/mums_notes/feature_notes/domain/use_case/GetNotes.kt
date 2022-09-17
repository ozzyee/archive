package com.example.mums_notes.feature_notes.domain.use_case

import com.example.mums_notes.feature_notes.domain.model.Note
import com.example.mums_notes.feature_notes.domain.repository.NoteRepository
import kotlinx.coroutines.flow.Flow

class GetNotes(
  private val repository: NoteRepository
) {

  operator fun invoke(
  ): Flow<List<Note>> {
    return repository.getNotes()
//      .map { notes ->
//      when (noteOrder.orderType) {
//        is OrderType.Ascending -> {
//          when (noteOrder) {
//            is NoteOrder.Title -> notes.sortedBy { it.title.lowercase() }
//            is NoteOrder.Date -> notes.sortedBy { it.timestamp }
//            is NoteOrder.Color -> notes.sortedBy { it.color }
//          }
//        }
//        is OrderType.Descending -> {
//          when (noteOrder) {
//            is NoteOrder.Title -> notes.sortedByDescending { it.title.lowercase() }
//            is NoteOrder.Date -> notes.sortedByDescending { it.timestamp }
//            is NoteOrder.Color -> notes.sortedByDescending { it.color }
//          }
//        }
//      }
//    }
  }
}