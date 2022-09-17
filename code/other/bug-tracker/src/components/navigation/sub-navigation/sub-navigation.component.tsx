/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { TSubNavigationProps } from "./sub-navigation.definition";
import * as S from "./sub-navigation.style";
import { NavItems } from "./_parches/nav-items/nav-items.component";

export function SubNavigation({
  className,
  data,
  typeOfNav,
  onClick,
  onChange,
}: TSubNavigationProps) {
  const router = useRouter();
  const pathUrl = router.pathname;
  const url = pathUrl + "?";

  useEffect(() => {
    router.push(url + "All", undefined, { shallow: true });
  }, [url]);

  function ChangeUrl(ev: React.MouseEvent) {
    const target = ev.target as HTMLButtonElement;
    const linkValue = target.dataset.name;

    router.push(url + linkValue, url + linkValue, {
      shallow: true,
    });
  }

  type TNavData = {
    name: string;
    id: string;
  };

  if (typeOfNav == "friends-link") {
    return (
      <S.SubNavigationDiv className={className}>
        <S.GlassBackground>
          {data.map((data: TNavData, key: number) => {
            return (
              <NavItems
                linkType="friends"
                key={key}
                onClick={ChangeUrl}
                dataSet={data.name}
              >
                {data.name}
              </NavItems>
            );
          })}
          <S.Search>
            <S.Input
              onChange={(e) => {
                const target = e.target.value;
                if (onChange) onChange(target);
              }}
              type="text"
              placeholder="Search for a friend"
            />
            <S.SearchBtn onClick={onClick}>Search</S.SearchBtn>
          </S.Search>
        </S.GlassBackground>
      </S.SubNavigationDiv>
    );
  }

  return (
    <S.SubNavigationDiv className={className}>
      <S.GlassBackground>
        {data.map((data: TNavData, key: number) => {
          return (
            <NavItems key={key} onClick={ChangeUrl} dataSet={data.name}>
              {data.name}
            </NavItems>
          );
        })}
      </S.GlassBackground>
    </S.SubNavigationDiv>
  );
}
