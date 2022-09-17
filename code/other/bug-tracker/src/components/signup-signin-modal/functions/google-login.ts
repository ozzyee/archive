import firebase from "firebase";
import { put } from "../../../fetcher-functions/put";

export function loginGoogle() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(async (res) => {

      let firstName = "";
      let lastName = "";
      let newImage = "";
      const userID = res.user?.uid;
      const email = res.user?.email;
      const fullName = res.user?.displayName;
      const nameSplit = fullName?.split(" ");
      const image = res.user?.photoURL;
      const googleEndImgUrl = image?.split("=");

      if (googleEndImgUrl) newImage = googleEndImgUrl[0] + "=s400";

      if (userID == userID) {
        window.location.href = "/dashboard";
      }

      if (nameSplit) {
        firstName = nameSplit[0];
        lastName = nameSplit[1];
      }

      await put(
        `https://us-central1-new-bugtracker.cloudfunctions.net/user/${userID}`,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          userID: userID,
          oauth: true,
          image: newImage,
        }
      );
    })
    .catch(({ message }) => {
      console.log("this is the error => =>", message);
    });
}
