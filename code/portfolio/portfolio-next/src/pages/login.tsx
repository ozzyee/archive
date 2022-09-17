import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import React, { useState } from "react";

import { SignInLayout } from "../layouts/signin-layout/signin-layout.component";
import { firebaseAdmin } from "../lib/firebase/firebase.admin";

const LoginScreen: NextPage = () => {
   return (
      <>
         <SignInLayout />
      </>
   );
};

export async function getServerSideProps({
   req,
   res,
}: {
   req: NextApiRequest;
   res: NextApiResponse;
}) {
   try {
      const { uid } = await firebaseAdmin
         .auth()
         .verifyIdToken(req.cookies.token);

      if (uid) {
         return {
            redirect: {
               destination: "/",
            },
         };
      }

      return { props: {} };
   } catch (err) {
      console.log("this is the err > => => => ", err);
      return { props: {} };
   }
}

export default LoginScreen;
