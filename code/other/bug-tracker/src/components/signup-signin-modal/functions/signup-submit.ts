import firebase from "firebase";
import { post } from "../../../fetcher-functions/post";

export async function signUpFunc(
  e: React.MouseEvent<Element, globalThis.MouseEvent>,
  email: string,
  password: string,
  name: string,
  lastName: string
) {
  let error = "";
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (e) => {
        const uid = e.user?.uid;
        if (uid == uid) {
          window.location.href = "/dashboard";
        }
        await post(
          `https://us-central1-new-bugtracker.cloudfunctions.net/user`,
          {
            firstName: name,
            lastName: lastName,
            email: email,
            userID: uid,
            oauth: false,
          }
        );
      });
  } catch (e: any) {
    console.log("this is the e", e);
    error = e.message;
  }

  return error;
}
