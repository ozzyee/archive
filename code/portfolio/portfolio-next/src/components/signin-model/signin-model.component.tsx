import React, { useState } from "react";
import { TSignInModelProps } from "./signin-model.definition";
import * as S from "./signin-model.style";
import { SignInInputs } from "./_partials/inputs";
import { signIn } from "./functions/signin";

export function SignInModel({ className }: TSignInModelProps) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const onClickSignIn = () => {
      signIn({ email, password });
   };

   return (
      <S.SignInModelDiv className={className}>
         <S.Title>Login</S.Title>

         <S.inputHolder>
            <SignInInputs
               id="email"
               type="email"
               onChange={(evt) => setEmail(evt.target.value)}
            >
               Email
            </SignInInputs>

            <SignInInputs
               id="password"
               type="password"
               onChange={(evt) => setPassword(evt.target.value)}
            >
               Password
            </SignInInputs>

            <S.SubmitBtn onClick={onClickSignIn}>Login</S.SubmitBtn>
         </S.inputHolder>
      </S.SignInModelDiv>
   );
}
