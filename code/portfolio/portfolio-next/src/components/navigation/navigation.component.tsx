import React, { useState } from "react";
import { TNavigationProps } from "./navigation.definition";
import * as S from "./navigation.style";
import { SignOut } from "@styled-icons/fluentui-system-regular/SignOut";
import { useContent } from "../../provider/content.provider";
import { post } from "../../lib/fetcher_functions/post";

export function Navigation({ className }: TNavigationProps) {
   const { canEdit, setSaveData } = useContent();
   const [save, setSave] = useState(true);

   const signOut = async () => {
      setSaveData(true);
      // await post("/api/sign-out");
      // window.location.href = "/";
   };

   return (
      <>
         <S.NavigationDiv className={className}>
            {canEdit && (
               <S.LoggedInUserModalWrapper>
                  <S.UserImage>
                     <S.Img src="user.jpeg" />
                  </S.UserImage>

                  <S.UserName>Oscar Earle</S.UserName>
               </S.LoggedInUserModalWrapper>
            )}

            <S.List>
               <S.ListItem>Home</S.ListItem>
               <S.ListItem>About</S.ListItem>
               <S.ListItem>Skills</S.ListItem>
               <S.ListItem>Projects</S.ListItem>
               <S.ListItem>Contact</S.ListItem>
            </S.List>

            {canEdit && (
               <S.SignOutButton onClick={signOut}>
                  <SignOut id="sign-out-icon" />
                  <S.ButtonText>Sign out</S.ButtonText>
               </S.SignOutButton>
            )}
         </S.NavigationDiv>
      </>
   );
}
