import { TSignInProps } from "../signin-model.definition";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { post } from "../../../lib/fetcher_functions/post";

export async function signIn({ email, password }: TSignInProps) {
   try {
      await firebase.auth().signInWithEmailAndPassword(email, password);

      firebase.auth().onIdTokenChanged(async (user) => {
         const token = await user?.getIdToken();
         await post("/api/signin", { token });

         window.location.href = "/";
      });
   } catch (e) {
      const error = e as Error;
      console.log(error);
   }
}
