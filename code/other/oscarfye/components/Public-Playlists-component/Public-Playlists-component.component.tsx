import React from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import { TPublicPlaylistComponentProps } from "./Public-Playlists-component.definition";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { TItem } from "../side-bar/side-bar.definition";
import { LoadingPlaylist } from "../loadingh-playlist/loadingh-playlist.style";
import Link from "next/link";

export function Component({ className }: TPublicPlaylistComponentProps) {
  const { data, error } = useSWR("/api/follow", fetcher);
  if (error) return null;
  if (!data) return <LoadingPlaylist />;
  const playlists = data.playlist;

  return (
    <div className={className}>
      <section className="playlist__public">
        <div className="title">
          <h2 className="title__text">Public Playlists</h2>
        </div>
        <div className="padding-left-more">
          <div className="playlist__map">
            {playlists &&
              playlists.map((playlist: TItem, index: number) => {
                return (
                  <div key={index} className="padding">
                    <Link href={`/play-list/${playlist.id}`}>
                      <div className="following__box">
                        <div className="image__holder">
                          <PlayCircleFilledIcon
                            style={{ fontSize: 50 }}
                            className="play__hover__playlist"
                          />
                          <img
                            className="playlist__cover"
                            src={playlist.photo}
                          />
                        </div>

                        <div className="playlist__text ">
                          <h2>{playlist.name}</h2>
                          <p>Artist</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
