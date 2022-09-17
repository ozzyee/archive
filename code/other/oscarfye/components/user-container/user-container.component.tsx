import React from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import { ArtistComponent } from "../artist-component/artist-component.style";
import { LoaderPage } from "../loader-page/loader-page.style";
import { PublicPlaylistComponent } from "../Public-Playlists-component/Public-Playlists-component.style";
import { TItem } from "../side-bar/side-bar.definition";
import { UserBanner } from "../user-banner/user-banner.style";
import { User } from "../user/user.style";
import { TUserContainerProps } from "./user-container.definition";

export function Component({ className }: TUserContainerProps) {
  return (
    <div className={className}>
      <div className='user-container'>
        <User className="HEADER" />
      </div>
      <div className="banner">
        <UserBanner />
      </div>
      <div className="next__collor">
        <PublicPlaylistComponent />
        <ArtistComponent />
      </div>
    </div>
  );
}
