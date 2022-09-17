import type { GetServerSidePropsContext, NextPage } from "next";
import * as S from "../styles/globals";
import { LinkData } from "../components/navigation/sub-navigation/nav-links/nav-links";
import React from "react";
import { SubNavigation } from "../components/navigation/sub-navigation/sub-navigation.component";
import { CreateProject } from "./layouts/projects/create-project/create-project.component";
import nookies from "nookies";
import { firebaseAdmin } from "../firebase/firebase-admin";
import { userObjectData } from "../provider/auth.provider";

const Projects: NextPage = () => {
  return (
    <S.DisplayHolder>
      <S.SubNavHolder>
        <SubNavigation data={LinkData} />
      </S.SubNavHolder>

      <S.ContentHolder>
        <CreateProject />
      </S.ContentHolder>
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

export default Projects;
