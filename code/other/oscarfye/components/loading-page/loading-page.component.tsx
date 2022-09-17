import React from "react";
import { Footer } from "../footer/footer.style";
import { LoadingIcon } from "../loading-icon/loading-icon.style";
import { LoadingSidebar } from "../loading-side-bar/loading-side-bar.style";
import { LoadingArtists } from "../loadingh-artist/loadingh-artist.style";
import { LoadingPlaylist } from "../loadingh-playlist/loadingh-playlist.style";
import { TLoadingPageProps } from "./loading-page.definition";


export function  Component({ className }: TLoadingPageProps) {
  return (
    <div className={className}>
      <div className="home">
        <div className="home__body">
          <LoadingSidebar />
          <LoadingIcon /> 
        </div>
        <Footer />
      </div>
    </div>
  );
}
