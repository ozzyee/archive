import firebase from "firebase";
import nookies from "nookies";

export function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = "/signin";
      nookies.set(undefined, "token", "");
    })
    .catch((error) => {
      console.log("this is the error => =>", error);
    });
}
