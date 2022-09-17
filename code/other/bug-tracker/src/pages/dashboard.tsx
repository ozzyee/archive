import type { GetServerSidePropsContext } from "next";
import React from "react";
import * as S from "../styles/globals";
import { DashboardLayout } from "./layouts/dashboard-layout/dashboard-layout.component";
import nookies from "nookies";
import { firebaseAdmin } from "../firebase/firebase-admin";
import { userObjectData } from "../provider/auth.provider";
import { TDashboardLayoutProps } from "./layouts/dashboard-layout/dashboard-layout.definition";

const DashBoard = ({ user }: TDashboardLayoutProps) => {
  return (
    <S.DisplayHolder>
      <S.CenterDiv>
        <DashboardLayout user={user} />
      </S.CenterDiv>
    </S.DisplayHolder>
  );
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

export default DashBoard;
