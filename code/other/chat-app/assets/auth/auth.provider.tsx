import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
   createUserWithEmailAndPassword,
   UserCredential,
   signInWithEmailAndPassword,
} from "firebase/auth";
import { authentication } from "../stores/services/firebase";

type TProps = {
   email: string;
   password: string;
};

type TContext = {
   signInFunc: ({ email, password }: TProps) => void;
   signUpFunc: ({ email, password }: TProps) => void;
   signOut: () => void;
   loading: (_loading: boolean) => void;
   authData: null | UserCredential;
   _loading: boolean;
};

export const AuthContext = createContext<TContext>({
   signInFunc: ({ email, password }: TProps) => {},
   signUpFunc: ({ email, password }: TProps) => {},
   signOut: () => {},
   loading: (_loading: boolean) => {},
   authData: null,
   _loading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
   const [authData, setAuthData] = useState<UserCredential | null>(null);
   const [_loading, setLoading] = useState(true);

   useEffect(() => {
      loadStorageData();
   }, []);

   async function loadStorageData(): Promise<void> {}

   const signIn = async ({ email, password }: TProps) => {
      const userData = await signInWithEmailAndPassword(
         authentication,
         email,
         password
      );
      setAuthData(userData);
   };

   const signUp = async ({ email, password }: TProps) => {
      const userData = await createUserWithEmailAndPassword(
         authentication,
         email,
         password
      );
      setAuthData(userData);
   };

   const signOut = async () => {
      setAuthData(null);
   };

   const loading = (_loading: boolean) => {
      setLoading(_loading);
   };

   return (
      <AuthContext.Provider
         value={{ authData, _loading, signInFunc: signIn, signUpFunc: signUp, signOut, loading }}
      >
         {children}
      </AuthContext.Provider>
   );
};
