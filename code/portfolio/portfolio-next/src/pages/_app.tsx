import React, { useState } from "react";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../../styles/globalStyle-styles";
import { AppLayout } from "../layouts/app-layout/app-layout.component";

import { ContextProvider } from "../provider/content.provider";

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <ContextProvider>
            <GlobalStyle />
            <AppLayout>
               <Component {...pageProps} />
            </AppLayout>
         </ContextProvider>
      </>
   );
}

export default MyApp;
