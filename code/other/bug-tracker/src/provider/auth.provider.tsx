/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  ReactNode,
  Component,
} from "react";
import nookies from "nookies";
import firebaseClient from "../firebase/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import { getData } from "../fetcher-functions/get";
import { useRouter } from "next/router";

type TAuthContext = {
  user: firebase.User | null;
  userObject: TUserObject | null;
};

export type TUserObject = {
  email: string;
  firstName: string;
  lastName: string;
  userID: string;
  oauth?: boolean;
  image?: string;
  fbToken?: string;
  friends: TFriendsList[];
};

export type TFriendsList = {
  uid: string;
};

const AuthContext = createContext<TAuthContext>({
  user: null,
  userObject: null,
});

export async function userObjectData(uid: string) {
  const userURL = `https://us-central1-new-bugtracker.cloudfunctions.net/user/${uid}`;
  const userData = await getData(userURL);
  return userData;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathName = router.pathname;
  const [user, setUser] = useState<firebase.User | null>(null);
  const [userObject, setUserObject] = useState(null);
  const [componentMounted, setComponentMounted] = useState(false);
  const uid = user?.uid;

  firebaseClient();

  useEffect(() => {
    (async () => {
      if (uid) {
        if (!userObject) {
          setUserObject(await userObjectData(uid));
        }
      }
    })();
  }, [user, pathName]);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", {
          path: "/signin",
        });
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, "token", token, { maxAge: 60 * 60 * 8 });
      setComponentMounted(true);
    });
  }, [userObject]);

  useEffect(() => {
    (async () => {
      uid && setUserObject(await userObjectData(uid));
    })();
  }, [componentMounted]);

  return (
    <AuthContext.Provider value={{ user, userObject }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
