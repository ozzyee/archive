import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { put } from "../../fetcher-functions/put";
import { TFriendsList } from "../../provider/auth.provider";
import { FriendsWidget } from "../friends-widget/friends-widget.component";
import { GlassBackground } from "../glass-background/glass-background.component";
import { TSearchFriendsProps } from "./search-friends.definition";
import * as S from "./search-friends.style";

export function SearchFriends({
  className,
  openSearchList,
  allUsersSearch,
  user,
  loading,
}: TSearchFriendsProps) {
  const userUrl = `https://us-central1-new-bugtracker.cloudfunctions.net/user/${user.userID}`;
  const [_user, setUser] = useState(user);

  const theme = {
    friendsSearchList: openSearchList,
  };

  async function addFriend(selectedFriend: string) {
    const friends: TFriendsList[] = _user.friends ? [..._user.friends] : [];

    friends.push({ uid: selectedFriend });

    const data = {
      ..._user,
      friends,
    };

    setUser(data);

    try {
      await put(userUrl, data);
    } catch (e) {}
  }

  if (!user || loading) {
    return (
      <ThemeProvider theme={theme}>
        <S.SearchFriendsWrapper>
          <S.SearchFriendsDiv className={className}>
            <GlassBackground>
              <S.OverflowScrollDiv>
                {allUsersSearch?.map((item, key) => {
                  return <FriendsWidget key={key} type="loading" />;
                })}
              </S.OverflowScrollDiv>
            </GlassBackground>
          </S.SearchFriendsDiv>
        </S.SearchFriendsWrapper>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <S.SearchFriendsWrapper>
        <S.SearchFriendsDiv className={className}>
          <GlassBackground>
            <S.OverflowScrollDiv>
              {allUsersSearch?.map((items, key) => {
                const firstName =
                  items.firstName.charAt(0).toUpperCase() +
                  items.firstName.slice(1);

                const lastName =
                  items.lastName.charAt(0).toUpperCase() +
                  items.lastName.slice(1);

                return (
                  <FriendsWidget
                    key={key}
                    name={`${firstName} ${lastName}`}
                    image={items.image}
                    userID={items.userID}
                    isFriends={items.userID == "friendsArr"}
                    onClick={addFriend}
                  />
                );
              })}
            </S.OverflowScrollDiv>
          </GlassBackground>
        </S.SearchFriendsDiv>
      </S.SearchFriendsWrapper>
    </ThemeProvider>
  );
}
