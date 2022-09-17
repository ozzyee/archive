import React from "react";
import { Icons } from "../../atoms/icons/icons.component";
import { TOauthFromProps } from "./oauth-form.definition";
import * as S from "./oauth-form.style";
import { Text } from "../../atoms/text/text.component";

export function OauthFrom({ signup }: TOauthFromProps) {
   return (
      <S.OauthFromView>
         <Text type="auth-text">
            {signup ? "social media signup" : "social media signin"}
         </Text>

         <S.OauthLoginIcons>
            <Icons type="google" />
            <Icons type="facebook" />
         </S.OauthLoginIcons>
      </S.OauthFromView>
   );
}
