import { useRouter } from "next/dist/client/router";
import React, { constructor, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/async-fetcher";
import { TPlayListBannerProps } from "./play-list-banner.definition";

export function Component({ className }: TPlayListBannerProps) {
  const routerPlaylist = useRouter();
  const playList = routerPlaylist.query?.["platy-list"];

  const { data, error } = useSWR(
    ["/api/playlist-songs/", playList],
    (url, id) => fetcher(url, { id })
  );

  const [playlist, setPlaylist] = useState(data);

  useEffect(() => {
    if (data) {
      setPlaylist(data.aboutPlaylist);
    }
  }, [data]);

  const [totalSongs, setTotalSongs] = useState(data);

  useEffect(() => {
    if (data) {
      setTotalSongs(data.totalSongs);
    }
  }, [data]);

  const [owner, setOwner] = useState(data);

  useEffect(() => {
    if (data) {
      setOwner(data.playListOwner.owner);
    }
  }, [data]);

  if (error) return null;
  if (!data) return null;

  const playListImage = playlist.playListImages;
  const playlistName = playlist.playListName;
  const allSongs = totalSongs.total;
  const ownersName = owner.display_name;

  return (
    <div className={className}>
      <div className="play-list-image-container">
        <div className="container">
          <div className="image-container">
            <img className="playlist-image" src={playListImage} />
          </div>
        </div>

        <div className="play-text">
          <h2>play list</h2>
          <h1 className="dots-end">{playlistName}</h1>
          <h2>
            {ownersName} . {allSongs} songs
          </h2>
        </div>
      </div>
    </div>
  );
}
