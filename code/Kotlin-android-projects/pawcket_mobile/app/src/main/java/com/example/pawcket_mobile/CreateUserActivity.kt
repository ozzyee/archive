package com.example.pawcket_mobile

import android.annotation.SuppressLint
import android.app.Activity
import android.app.DatePickerDialog
import android.content.Intent
import android.graphics.Color
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.provider.MediaStore
import android.util.Log
import android.widget.DatePicker
import android.widget.ImageView
import android.widget.Toast
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider
import com.bumptech.glide.Glide
import com.example.pawcket_mobile.databinding.CreateUserBinding
import com.example.roomapp.model.User
import com.example.roomapp.model.UserDataFB
import com.example.roomapp.viewmodel.UserViewModel
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.firestore.ktx.toObject
import com.google.firebase.ktx.Firebase
import com.google.firebase.storage.FirebaseStorage
import com.theartofdev.edmodo.cropper.CropImage
import com.theartofdev.edmodo.cropper.CropImageView
import java.text.SimpleDateFormat
import java.util.*


class CreateUserActivity : AppCompatActivity() {
  //  Initializing firebase auth
  private lateinit var auth: FirebaseAuth

  //  user data
  private val user = Firebase.auth.currentUser
  val name = user?.displayName
  private val uid = user?.uid
  var cal: Calendar = Calendar.getInstance()
  var dobAsGMT: String = ""

  //  user data form firebase this is set later on
  private var userDATA: UserDataFB? = null

  //  this is for the img
  private lateinit var imgID: ImageView
  private val GALLERY_REQUEST_CODE = 1234
  private var photoUrl = user?.photoUrl.toString()

  private lateinit var mUserViewModel: UserViewModel
  val userInDB = db.collection("users").document(user!!.uid)

  @RequiresApi(Build.VERSION_CODES.O)
  @SuppressLint("SetTextI18n")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    // GET THE USER DATA AND SAVE IN VARIABLE
    getUserData()
    mUserViewModel = ViewModelProvider(this).get(UserViewModel::class.java)


    //  initialize firebase
    auth = Firebase.auth


    val binding = CreateUserBinding.inflate(layoutInflater)
    setContentView(binding.root)

    binding.bgImg.setImageResource(R.drawable.pawcket_img)
    binding.frame.setImageResource(R.drawable.frame)
    binding.frameImg.setImageResource(R.drawable.ic_add)
    imgID = binding.frameImg

    if (user?.photoUrl != null) {
      setImage(user.photoUrl!!, true)
    }

    val dateSetListener = object : DatePickerDialog.OnDateSetListener {
      override fun onDateSet(
        view: DatePicker, year: Int, monthOfYear: Int,
        dayOfMonth: Int
      ) {
        cal.set(Calendar.YEAR, year)
        cal.set(Calendar.MONTH, monthOfYear)
        cal.set(Calendar.DAY_OF_MONTH, dayOfMonth)
        updateDateInView()
      }

      @SuppressLint("SimpleDateFormat")
      private fun updateDateInView() {
        val myFormat = "dd/MM/yyyy" // mention the format you need
        val sdf = SimpleDateFormat(myFormat, Locale.UK)
        val df = SimpleDateFormat("dd MMM yyyy HH:mm:ss")

        dobAsGMT = df.format(cal.time) + " GMT"
        binding.dobText.setTextColor(Color.parseColor("#FF000000"))
        binding.dobText.text = sdf.format(cal.time)
      }

    }

    // check data for any errors if no err then send data to db
    binding.createUserBtn.setOnClickListener {
      //  all text fields
      val dobValue = binding.dobText.text
      val fnameValue = binding.etFname.text
      val lnameValue = binding.etLname.text
      val userNameValue = binding.etUserName.text
      val telValue = binding.etPhone.text
      val addressValue = binding.etAddress.text
      val postCodeValue = binding.etPostCode.text
      val extraInfoValue = binding.etExtraInfo.text

      // Check if the user data is valid
      val isValidData = createUserValidation.checkUser(
        binding,
        fnameValue,
        lnameValue,
        dobValue
      )

      // get the data form the and put it into a new array for room db
      val friendsRequests = (userDATA?.friendsRequests ?: ArrayList())
      val friendsReq = ArrayList<HashMap<String, String>>()

      if (friendsRequests.size > 1) {
        friendsRequests.drop(1).forEach {
          @Suppress("UNCHECKED_CAST")
          friendsReq.add(it as HashMap<String, String>)
        }
      }

      val firends = (userDATA?.friends ?: ArrayList())
      val _friends = ArrayList<HashMap<String, String>>()

      if (firends.size > 1) {
        firends.drop(1).forEach {
          @Suppress("UNCHECKED_CAST")
          _friends.add(it as HashMap<String, String>)
        }
      }

      if (isValidData) {
        val user = User(
          0,
          "$fnameValue",
          "$lnameValue",
          "$userNameValue",
          "day $dobAsGMT",
          "$telValue",
          "$addressValue",
          "$postCodeValue",
          "$extraInfoValue",
          photoUrl,
          userDATA?.email ?: "no email",
          user!!.uid,
          friendsReq,
          _friends
        )

        mUserViewModel.addUser(user) { error, errorMsg ->
          if (error) {
            showSnackBar(
              binding.snackBarErr,
              errorMsg,
            )
          } else {
            val intent = Intent(this, DashboardActivity::class.java)
            overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
            startActivity(intent)
          }
        }
      }
    }


    binding.frameImg.setOnClickListener {
      chooseImage()
    }

    // open date picker on click of input
    binding.dobText.setOnClickListener {
      DatePickerDialog(
        this@CreateUserActivity,
        dateSetListener,
        // set DatePickerDialog to point to today's date when it loads up
        cal.get(Calendar.YEAR),
        cal.get(Calendar.MONTH),
        cal.get(Calendar.DAY_OF_MONTH)
      ).show()
    }
  }

  private fun chooseImage() {
    val intent = Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI)
    intent.type = "image/*"
    val mimeTypes = arrayOf("image/jpeg", "image/png", "image/jpg")
    intent.putExtra(Intent.EXTRA_MIME_TYPES, mimeTypes)
    intent.flags = Intent.FLAG_GRANT_READ_URI_PERMISSION
    startActivityForResult(intent, GALLERY_REQUEST_CODE)
  }

  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    super.onActivityResult(requestCode, resultCode, data)

    when (requestCode) {
      GALLERY_REQUEST_CODE -> {
        if (resultCode == Activity.RESULT_OK) {
          data?.data?.let { uri ->
            launchImageCrop(uri)
          }
        } else {
          Log.d("err", "the was an err with img selection!")
        }
      }
      CropImage.CROP_IMAGE_ACTIVITY_REQUEST_CODE -> {
        val result = CropImage.getActivityResult(data)
        if (resultCode == Activity.RESULT_OK) {
          result.uri?.let { uri ->
            setImage(uri)
          }
        } else if (resultCode == CropImage.CROP_IMAGE_ACTIVITY_RESULT_ERROR_CODE) {
          Log.e("Err", "The err was: ${result.error}")
        }
      }
    }
  }

  private fun getUserData() {
    userInDB.get().addOnSuccessListener { documentSnapshot ->
      userDATA = documentSnapshot.toObject<UserDataFB>()
    }

  }

  private fun setImage(uri: Uri, authImg: Boolean = false) {
    Glide.with(this).load(uri).into(imgID)

    if (!authImg) {
      uploadImage(uri)
    }
  }

  private fun launchImageCrop(uri: Uri) {
    CropImage.activity(uri)
      .setGuidelines(CropImageView.Guidelines.ON)
      .setAspectRatio(1, 1)
      .setCropShape(CropImageView.CropShape.OVAL) // default is rectangle
      .start(this)
  }

  private fun uploadImage(uri: Uri) {
    val profileImageRef = FirebaseStorage.getInstance()
      .getReference("$uid/" + UUID.randomUUID().toString())

    profileImageRef.putFile(uri)
      .addOnSuccessListener {
        profileImageRef.downloadUrl
          .addOnCompleteListener { task ->
            photoUrl = task.result.toString()
          }
      }
      .addOnFailureListener { e ->
        Toast.makeText(this@CreateUserActivity, "aaa " + e.message, Toast.LENGTH_SHORT).show()
      }
  }

  override fun onBackPressed() {
    moveTaskToBack(true)
  }

  override fun onStart() {
    super.onStart()

    mUserViewModel.getUserByID.observe(this) {
      if (it.size > 0) {
        val user = it[0]
        val fName = user.firstName
        val lName = user.lastName
        val DOB = user.DOB

        if (fName.isNotEmpty() && lName.isNotEmpty() && DOB.isNotEmpty()) {
          Log.d("DATA", "the room db data is this -> ")
        }
      }
    }
  }
}


