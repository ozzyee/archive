import type { GetServerSidePropsContext } from "next";
import React, { useState } from "react";
import * as S from "../styles/globals";
import { SubNavigation } from "../components/navigation/sub-navigation/sub-navigation.component";
import { FriendsLinkData } from "../components/navigation/sub-navigation/nav-links/friends-links";
import { SearchFriends } from "../components/search-friends/search-friends.component";
import { TUserObject, userObjectData } from "../provider/auth.provider";
import nookies from "nookies";
import { firebaseAdmin } from "../firebase/firebase-admin";
import { post } from "../fetcher-functions/post";

const Friends = ({ user }: { user: TUserObject }) => {
  const [allUsersSearch, setAllUsersSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  async function searchFriends(name: string) {
    let res;
    setLoading(true);
    const nameStrSplit = name.split(" ").join("-");
    const url = `https://us-central1-new-bugtracker.cloudfunctions.net/user/${nameStrSplit}`;

    if (name.length > 0) res = await post(url, {});

    setTimeout(() => setLoading(false), 500);

    setAllUsersSearch(res);
  }

  return (
    <S.DisplayHolder>
      <S.SubNavHolder>
        <SubNavigation
          onChange={(e) => {
            setSearchValue(e);
            searchFriends(e);
          }}
          typeOfNav="friends-link"
          data={FriendsLinkData}
        />
        <SearchFriends
          allUsersSearch={allUsersSearch}
          openSearchList={searchValue.length > 0 ? "100%" : "0%"}
          currentUserId={user.userID}
          usersFriendsList={user.friends}
          loading={loading}
          user={user}
        />
      </S.SubNavHolder>

      <S.ContentHolder></S.ContentHolder>
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

export default Friends;
