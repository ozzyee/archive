import type { GetServerSidePropsContext, NextPage } from "next";
import * as S from "../styles/globals";
import React from "react";
import nookies from "nookies";
import { firebaseAdmin } from "../firebase/firebase-admin";
import { userObjectData } from "../provider/auth.provider";

const Settings: NextPage = () => {
  return <S.DisplayHolder>setting page</S.DisplayHolder>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const redirectTo = {
    redirect: {
      destination: "/signin",
      permanent: false,
    },
  };

  try {
    const cookies = nookies.get(ctx);
    const { uid } = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    if (!uid) {
      return redirectTo;
    }

    const user = await userObjectData(uid);
    return {
      props: {
        user,
      },
    };
  } catch (err) {
    return redirectTo;
  }
}

export default Settings;
