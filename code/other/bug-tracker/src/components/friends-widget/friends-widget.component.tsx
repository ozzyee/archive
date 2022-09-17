import React, { useEffect, useState } from "react";
import { TFriendsWidgetProps } from "./friends-widget.definition";
import * as S from "./friends-widget.style";
import { GlassBackground } from "../glass-background/glass-background.component";
import { UserAdd } from "@styled-icons/remix-line/UserAdd";
import { useAuth } from "../../provider/auth.provider";
import { SkeletonLoader } from "../skeleton-loader/skeleton-loader.component";

export function FriendsWidget({
  className,
  name,
  image,
  userID,
  isFriends,
  onClick,
  type,
}: TFriendsWidgetProps) {
  const [showAdd, setShowAdd] = useState(false);
  const userObject = useAuth().userObject;
  const currUserUid = userObject?.userID;
  const listHasUser = currUserUid == userID;

  useEffect(() => {
    if (!isFriends) {
      setShowAdd(true);
    }
    if (listHasUser) {
      setShowAdd(false);
    }
  }, []);

  if (type == "loading") {
    return (
      <S.FriendsWidgetDiv className={className}>
        <GlassBackground>
          <S.CenterContent>
            <S.UsersImageWrapper>
              <SkeletonLoader width="35px" height="35px" borderRadius="50%" />
            </S.UsersImageWrapper>

            <S.UsersNameWrapper>
              <SkeletonLoader width="170px" height="10px" borderRadius="22px" />
              <SkeletonLoader width="150px" height="10px" borderRadius="22px" />
            </S.UsersNameWrapper>
          </S.CenterContent>
        </GlassBackground>
      </S.FriendsWidgetDiv>
    );
  }

  return (
    <S.FriendsWidgetDiv className={className}>
      <GlassBackground>
        <S.CenterContent>
          <S.UsersImageWrapper>
            <S.UsersImage src={image} />
          </S.UsersImageWrapper>

          <S.UsersNameWrapper>
            <S.UsersName>{name}</S.UsersName>
            {isFriends && <S.Friends>Friends</S.Friends>}
            {listHasUser && <S.Friends>You</S.Friends>}
          </S.UsersNameWrapper>

          {showAdd && (
            <S.AddBtnWrapper onClick={() => onClick(userID)}>
              <UserAdd />
            </S.AddBtnWrapper>
          )}
        </S.CenterContent>
      </GlassBackground>
    </S.FriendsWidgetDiv>
  );
}
