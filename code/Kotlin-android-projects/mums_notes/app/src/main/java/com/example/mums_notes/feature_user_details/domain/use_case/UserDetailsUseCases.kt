package com.example.mums_notes.feature_user_details.domain.use_case

data class UserDetailsUseCases(
  val getUserDetails: GetUserDetails,
  val deleteUserDetails: DeleteUserDetails,
  val addUserDetails: AddUserDetails,
  val getUserDetailsByUID: GetUsersDetailsByUID,
)