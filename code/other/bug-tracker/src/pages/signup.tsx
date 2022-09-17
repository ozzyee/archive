import type { NextPage } from "next";

import * as S from "../styles/globals";
import { SignupSigninModal } from "../components/signup-signin-modal/signup-signin-modal.component";
import React from "react";

const Signup: NextPage = () => {
  return (
    <S.DisplayHolder className="auth-form">
      <S.CenterDiv>
        <SignupSigninModal from="signup" />
      </S.CenterDiv>
    </S.DisplayHolder>
  );
};

export default Signup;
