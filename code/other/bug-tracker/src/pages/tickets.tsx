import type { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { SubNavigation } from "../components/navigation/sub-navigation/sub-navigation.component";
import * as S from "../styles/globals";
import { LinkData } from "../components/navigation/sub-navigation/nav-links/nav-links";
import nookies from "nookies";
import { firebaseAdmin } from "../firebase/firebase-admin";

// Ticket Components
import { AllTicketsLayout } from "./layouts/tickets/all-tickets-layout/all-tickets-layout.component";
import lowerCaseFirstLetter from "../helper-functions/change-char";
import React, { ReactElement, useEffect, useState } from "react";
import { DoneTicketsLayout } from "./layouts/tickets/done-tickets-layout/done-tickets-layout.component";
import { FixedTicketsLayout } from "./layouts/tickets/fixed-tickets-layout/fixed-tickets-layout.component";
import { MyTicketsLayout } from "./layouts/tickets/my-tickets-layout/my-tickets-layout.component";
import { UnassignedTicketsLayout } from "./layouts/tickets/unassigned-tickets-layout/unassigned-tickets-layout.component";
import { FailedTicketsLayout } from "./layouts/tickets/failed-tickets-layout/failed-tickets-layout.component";
import { userObjectData } from "../provider/auth.provider";

const Tickets: NextPage = () => {
  const [urlLocation, setUrlLocation] = useState("all");
  // URL
  const router = useRouter();
  const urlRoute = Object.keys(router.query)[0];
  const urlLowercase = lowerCaseFirstLetter(urlRoute);

  useEffect(() => {
    if (urlLowercase) setUrlLocation(urlLowercase);
  }, [urlLowercase]);

  return (
    <>
      <S.DisplayHolder>
        <S.SubNavHolder>
          <SubNavigation data={LinkData} />
        </S.SubNavHolder>

        <S.ContentHolder>
          <TicketComponents first={urlLocation} />
        </S.ContentHolder>
      </S.DisplayHolder>
    </>
  );
};

function TicketComponents({ first }: { first: string }): ReactElement | null {
  switch (first) {
    case "all":
      return <AllTicketsLayout />;
    case "my":
      return <MyTicketsLayout />;
    case "fixed":
      return <FixedTicketsLayout />;
    case "done":
      return <DoneTicketsLayout />;
    case "unassigned":
      return <UnassignedTicketsLayout />;
    case "failed":
      return <FailedTicketsLayout />;
    default:
      return null;
  }
}

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

export default Tickets;
