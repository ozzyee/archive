import React from "react";
import { TUserModalLayoutProps } from "./user-modal-layout.definition";
import * as S from "./user-modal-layout.style";
import { GlassBackground } from "../../glass-background/glass-background.component";
import { Image } from "../../image/image.component";
import { Buttons } from "../../buttons/buttons.component";
import { useAuth } from "../../../provider/auth.provider";
import { signOut } from "../../signup-signin-modal/functions/sign-out";
import { useRouter } from "next/router";

export function UserModalLayout({ className }: TUserModalLayoutProps) {
  const router = useRouter();
  const { userObject } = useAuth();
  const fName = userObject?.firstName;
  const lName = userObject?.lastName;
  const name = fName + " " + lName;

  return (
    <S.UserModalLayoutDiv className={className}>
      <GlassBackground>
        <>
          <S.ImageHolder>
            <Image
              width="140px"
              height="140px"
              borderRadius="120px"
              alt="No Image"
              // @ts-ignore
              imageUrl={"/blank-img.jpeg"}
            />
          </S.ImageHolder>

          <S.NameHolder>
            <S.NameText>{name}</S.NameText>
          </S.NameHolder>

          <S.ButtonHolder>
            <S.Btn>
              <Buttons Btn="signOut" onClick={signOut} />
            </S.Btn>

            <S.Btn>
              <Buttons
                Btn="settings"
                onClick={() => router.push("/settings")}
              />
            </S.Btn>
          </S.ButtonHolder>
        </>
      </GlassBackground>
    </S.UserModalLayoutDiv>
  );
}
