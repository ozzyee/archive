/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainNavigation } from "../components/navigation/main-navigation/main-navigation.component";
import { AuthProvider } from "../provider/auth.provider";

import { Buttons } from "../components/buttons/buttons.component";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <img src={"background.jpeg"} alt="" className="background-img" />

      <Buttons Btn="signin/signup" />

      <MainNavigation />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
