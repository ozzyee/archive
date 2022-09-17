import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { TSignInProps } from "../signin-model.definition";

const onSubmit = async ({ email, password }: TSignInProps) => {
   try {
      const res = await firebase
         .auth()
         .createUserWithEmailAndPassword(email, password);

      const uid = res.user?.uid;
      console.log(uid);

      // console.log(e);

      //    if (uid) {
      //       window.location.href = "/";
      //    }
      // todo send data to db
   } catch (err) {
      const _error = err as Error;
      console.error(_error);
   }
};
