import React from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import { User } from "../user/user.style";
import { TUserBannerProps } from "./user-banner.definition";

export function Component({ className }: TUserBannerProps) {
  const { data, error } = useSWR("/api/user", fetcher);
  if (error) return null;
  if (!data ) return <h1>this is a test on users comp</h1>;


  const image = data.image;
  const userName = data.user.name;

  return (
    <div className={className}>
      <div className="container">
        <div className="user__banner__container">
          <div className="user__banner__image__container">
            <img className="user__banner__large__image" src={image} />
          </div>

          <div className="use__banner__text">
            <h2>PROFILE</h2>
            <h1>{userName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
