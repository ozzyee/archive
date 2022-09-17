/* eslint-disable react-hooks/rules-of-hooks */
import { TMainNavigationProps } from "./main-navigation.definition";
import * as S from "./main-navigation.style";
import Link from "next/link";

// Components
import { GlassBackground } from "../../glass-background/glass-background.component";
import { Buttons } from "../../buttons/buttons.component";
import { useRouter } from "next/router";

export function MainNavigation({ className }: TMainNavigationProps) {
  const router = useRouter();
  const pathNames = [
    "/dashboard",
    "/tickets",
    "/project",
    "/settings",
    "/friends",
  ];

  if (!pathNames.includes(router.pathname)) return null;

  return (
    <S.MainNavigationDiv className={className}>
      <S.GlassHolder>
        <GlassBackground>
          <S.CenterIcons>
            <Link href="/code/other/bug-tracker/src/pages/dashboard">
              <Buttons
                className={router.pathname == "/dashboard" ? "active" : ""}
                Btn="home"
              />
            </Link>

            <Link href="/code/other/bug-tracker/src/pages/tickets">
              <Buttons
                className={router.pathname == "/tickets" ? "active" : ""}
                Btn="ticket"
              />
            </Link>

            <Link href="/code/other/bug-tracker/src/pages/project">
              <Buttons
                className={router.pathname == "/project" ? "active" : ""}
                Btn="projects"
              />
            </Link>

            <Link href="/code/other/bug-tracker/src/pages/friends">
              <Buttons
                className={router.pathname == "/friends" ? "active" : ""}
                Btn="friends"
              />
            </Link>

            <Link href="/code/other/bug-tracker/src/pages/settings">
              <Buttons
                className={router.pathname == "/settings" ? "active" : ""}
                Btn="nav-settings"
              />
            </Link>
          </S.CenterIcons>
        </GlassBackground>
      </S.GlassHolder>
    </S.MainNavigationDiv>
  );
}
