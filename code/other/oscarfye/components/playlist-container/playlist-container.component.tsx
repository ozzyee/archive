import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/async-fetcher";
import { PlayListBanner } from "../play-list-banner/play-list-banner.style";
import { PlayListSongList } from "../playlist-song-list/playlist-song-list.style";
import { TPlaylistContainerProps } from "./playlist-container.definition";
import { ListHeader } from "../play-list-header/play-list-header.style"

export function Component({ className }: TPlaylistContainerProps) {
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
    <div className={className}>
      <div className="user-container">
        {/* <User className="HEADER" /> */}
        <ListHeader />
      </div>

      <div className="color-one">
        <PlayListBanner />
      </div>

      <div className="color-two">
        <PlayListSongList />
      </div>
    </div>
  );
}
