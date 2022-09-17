import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/async-fetcher";
import { TItem } from "../side-bar/side-bar.definition";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ExplicitIcon from "@material-ui/icons/Explicit";
import { TPlayListSongListProps } from "./playlist-song-list.definition";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { TTimeItem } from "../artist-songs/artist-songs.definition";
import moment from "moment";
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export function Component({ className }: TPlayListSongListProps) {
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

  const playlists = playlist.playListItems;

  let totalPlayListTime = 0;

  return (
    <div className={className}>
      <div className="play-icon-big-container">
        <PlayCircleFilledWhiteIcon className="big-play-icon" />
        <MoreHorizIcon className="big-more-icon" />
      </div>

      <div id="overflow" className="hide-content">
        <div className="text-holder">
          <p className="song-number">#</p>
          <div className="image-holder"></div>
          <p className="song-title">title</p>
          <p className="album-title">album</p>
          <p className="date-added-date">date added</p>
          <div className="time-holder">
            <AccessTimeIcon />
          </div>
        </div>
        <hr />

        {playlists &&
          playlists.map((list: TTimeItem, index: number) => {
            //test if content is explicit if so print logo
            const isExplicit = list.track.explicit;
            const artistName = list.track.artists[0].name;
            const albumName = list.track.album.name;
            const dateAdded = list.added_at;
            moment(dateAdded).format("MMM Do YY");

            //this is the conversion for the running time of a song
            const msSeconds: number = list.track.duration_ms;
            const seconds: number = msSeconds / 1000;
            const minute: number = seconds / 60;
            const total: any = minute;
            const totalRuntime = parseFloat(total).toFixed(2);
            totalPlayListTime = totalPlayListTime + msSeconds;

            return (
              <div key={index} className="scroll">
                <div className="song-list">
                  <div className="number text">
                    <p className="number-count">{index + 1}</p>
                    <PlayArrowIcon className="play-button" />
                  </div>

                  <div className="album-cover">
                    <img src={list.track.album.images[0].url} />
                  </div>

                  <div className="name">
                    <p className="name-text-artist">{list.track.name}</p>
                    <div className="artist-explicit ">
                      {isExplicit && <ExplicitIcon className="explicit" />}
                      <p className="artist-name">{artistName}</p>
                    </div>
                  </div>

                  <div className="album">
                    <p className="album-name center">{albumName}</p>
                  </div>

                  <div className="date-added">
                    <p className="date-added-text center">
                      {moment(dateAdded).format("MMM Do YY")}
                    </p>
                  </div>

                  <div className="time">
                    <p className="time-text center">{totalRuntime}</p>
                  </div>
                </div>
              </div>
            );
          })}
        <p>{totalPlayListTime}</p>
      </div>
    </div>
  );
}
