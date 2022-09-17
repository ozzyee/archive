import React from "react";
import { TSignupSigninModalProps } from "./signup-signin-modal.definition";
import * as S from "./signup-signin-modal.style";
import { GlassBackground } from "../glass-background/glass-background.component";
import { Font } from "../font/font.component";
import { SignupFrom } from "./_partials/signup-form/signup-form.component";
import { SigninFrom } from "./_partials/signin-form/signin-form.component";

export function SignupSigninModal({
  className,
  from,
}: TSignupSigninModalProps) {
  if (from == "signup") {
    return (
      <S.SignUpForm className={className}>
        <GlassBackground>
          <S.CenterContent>
            <S.HeaderHolder>
              <Font>Sign Up</Font>
            </S.HeaderHolder>
            <SignupFrom />
          </S.CenterContent>
        </GlassBackground>
      </S.SignUpForm>
    );
  }

  if (from == "signin") {
    return (
      <S.SignInDiv>
        <GlassBackground>
          <S.CenterContent>
            <S.HeaderHolder>
              <Font>Sign In</Font>
            </S.HeaderHolder>
            <SigninFrom />
          </S.CenterContent>
        </GlassBackground>
      </S.SignInDiv>
    );
  }

  return null;
}
