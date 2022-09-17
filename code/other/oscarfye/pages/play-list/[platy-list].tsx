import { Router, useRouter } from "next/dist/client/router";
import useSWR from "swr";
import React, { useEffect, useState } from "react";
import { fetcher } from "../../lib/async-fetcher";
import { LoadingPage } from "../../components/loading-page/loading-page.style";
import { SideBar } from "../../components/side-bar/side-bar.style";
import { ArtistContainer } from "../../components/artist-container/artist-container.style";
import { Footer } from "../../components/footer/footer.style";
import { PlaylistContainer } from "../../components/playlist-container/playlist-container.style";

export default function ArtistPage() {
  const routerPlaylist = useRouter();
  const playList = routerPlaylist.query?.["platy-list"];

  const { data, error } = useSWR(
    ["/api/playlist-songs/", playList],
    (url, id) => fetcher(url, { id })
  );

  const [playlist, setPlaylist] = useState(data);

  useEffect(() => {
    if (data) {
      setPlaylist(data);
    }
  }, [data]);

  if (error) return null;
  if (!data) return null;

  return (
    <div>
      <div className="home__body">
        <SideBar name="side-bar" />
        <PlaylistContainer />
      </div>
      <Footer />
    </div>
  );
}
