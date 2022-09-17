import React, { useState } from "react";
import { TButtonsProps } from "./buttons.definition";
import * as S from "./buttons.style";
import { Icons } from "../icons/icons.component";
import { SmallBtn } from "./_partial/small-btn";
import { ThemeProvider } from "styled-components";
import { GlassBackground } from "../glass-background/glass-background.component";
import { useRouter } from "next/router";

export function Buttons({
  Btn,
  width,
  height,
  text,
  onClick,
  className,
}: TButtonsProps) {
  const [login, setLogin] = useState(true);
  const router = useRouter();

  const theme = {
    width: width,
    height: height,
  };

  if (Btn == "signOut") {
    return (
      <SmallBtn className={className} onClick={onClick}>
        <Icons className="log-out" Icon="logOut" />
      </SmallBtn>
    );
  }

  if (Btn == "settings") {
    return (
      <SmallBtn className={className} onClick={onClick}>
        <Icons Icon="settings" />
      </SmallBtn>
    );
  }

  if (Btn == "home") {
    return (
      <S.NavigationBtnHolder className={className} onClick={onClick}>
        <S.NavIconHolder>
          <Icons Icon="home" />
        </S.NavIconHolder>
      </S.NavigationBtnHolder>
    );
  }

  if (Btn == "friends") {
    return (
      <S.NavigationBtnHolder className={className} onClick={onClick}>
        <S.NavIconHolder>
          <Icons Icon="friends" />
        </S.NavIconHolder>
      </S.NavigationBtnHolder>
    );
  }

  if (Btn == "ticket") {
    return (
      <S.NavigationBtnHolder className={className} onClick={onClick}>
        <S.NavIconHolder>
          <Icons Icon="ticket" />
        </S.NavIconHolder>
      </S.NavigationBtnHolder>
    );
  }

  if (Btn == "projects") {
    return (
      <S.NavigationBtnHolder className={className} onClick={onClick}>
        <S.NavIconHolder>
          <Icons Icon="library" />
        </S.NavIconHolder>
      </S.NavigationBtnHolder>
    );
  }

  if (Btn == "nav-settings") {
    return (
      <S.NavigationBtnHolder className={className} onClick={onClick}>
        <S.NavIconHolder>
          <Icons Icon="settings" className={className} />
        </S.NavIconHolder>
      </S.NavigationBtnHolder>
    );
  }

  if (Btn == "add") {
    return (
      <S.AddBtnHolder className={className} onClick={onClick}>
        <Icons Icon="add" />
      </S.AddBtnHolder>
    );
  }

  if (Btn == "addImage") {
    return (
      <ThemeProvider theme={theme}>
        <S.AddImg className={className}>
          <Icons Icon="addImage" onClick={onClick} />
        </S.AddImg>
      </ThemeProvider>
    );
  }

  if (Btn == "timeFormBtn") {
    return (
      <ThemeProvider theme={theme}>
        <S.FormButton className={className} onClick={onClick}>
          <S.BtnText>{text}</S.BtnText>
        </S.FormButton>
      </ThemeProvider>
    );
  }

  if (Btn == "formButton") {
    return (
      <ThemeProvider theme={theme}>
        <S.SubmitButton className={className} onClick={onClick}>
          <S.BtnText>{text}</S.BtnText>
        </S.SubmitButton>
      </ThemeProvider>
    );
  }

  if (router.pathname == "/signin" || router.pathname == "/signup")
    if (Btn == "signin/signup") {
      return (
        <S.TopOfPage className={className}>
          <S.LoginSwitch>
            <S.LoginSwitchHolder className={className} onClick={onClick}>
              <GlassBackground>
                <S.CenterText>
                  <S.TextHolder
                    onClick={() => {
                      router.push("/signin");
                      setLogin(true);
                    }}
                  >
                    <S.TextOverlay className="float-right">
                      <S.Overlay
                        className={`left-side ${login && "login-toggle-true"}`}
                      />
                    </S.TextOverlay>

                    <S.Text className={`${login && "change-color"}`}>
                      Login
                    </S.Text>
                  </S.TextHolder>

                  <S.TextHolder
                    onClick={() => {
                      router.push("/signup");
                      setLogin(false);
                    }}
                  >
                    <S.TextOverlay>
                      <S.Overlay
                        className={`right-side ${
                          !login && "login-toggle-true"
                        }`}
                      />
                    </S.TextOverlay>

                    <S.Text className={`${!login && "change-color"}`}>
                      Sign Up
                    </S.Text>
                  </S.TextHolder>
                </S.CenterText>
              </GlassBackground>
            </S.LoginSwitchHolder>
          </S.LoginSwitch>
        </S.TopOfPage>
      );
    }

  return null;
}
