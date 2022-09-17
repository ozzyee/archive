import React from "react";
import { SignInModel } from "../../components/signin-model/signin-model.component";
import { TSignInLayoutProps } from "./signin-layout.definition";
import * as S from "./signin-layout.style";
import Image from "next/image";

export function SignInLayout({ className }: TSignInLayoutProps) {
   return (
      <S.SignInLayoutDiv className={className}>
         <Image
            src="/background_auto_x2.jpeg"
            layout="fill"
            priority
         />
         <S.Overlay />

         <SignInModel />
      </S.SignInLayoutDiv>
   );
}
