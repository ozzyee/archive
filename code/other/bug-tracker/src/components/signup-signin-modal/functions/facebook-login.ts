import firebase from "firebase";
import { getData } from "../../../fetcher-functions/get";
import { put } from "../../../fetcher-functions/put";

export function loginFacebook() {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(facebookProvider)
    .then(async (res) => {
      let firstName = "";
      let lastName = "";
      const userID = res.user?.uid;
      const email = res.user?.email;
      const fullName = res.user?.displayName;
      const nameSplit = fullName?.split(" ");
      // @ts-ignore
      const facebookToken = res?.credential?.accessToken;
      const fbImgURL = `https://graph.facebook.com/me/picture?height=400&width=400&access_token=${facebookToken}`;

      if (userID == userID) window.location.href = "/dashboard";

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
          image: fbImgURL,
        }
      );
    })
    .catch(({ message }) => {
      console.log("this is the error", message);
    });
}
