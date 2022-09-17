import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/async-fetcher";
import { TPlayListNameProps } from "./play-list-name.definition";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

export function Component({ className }: TPlayListNameProps) {
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

  const playListName = playlist.aboutPlaylist.playListName;

  return (
    <div className={className}>
      <div className="name">
        <PlayCircleFilledWhiteIcon className="play-icon" />
        <h2 className="play-name">{playListName}</h2>
      </div>
    </div>
  );
}
