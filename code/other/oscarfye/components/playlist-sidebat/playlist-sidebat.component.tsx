import React from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import { TItem } from "../side-bar/side-bar.definition";
import { TPlaylistSidebarProps } from "./playlist-sidebat.definition";

export function Component({ className }: TPlaylistSidebarProps) {
  const { data, error } = useSWR("/api/play-list", fetcher);

  if (!data) return <h1>test</h1>;

  if (error) return null;

  const playlists = data.list;
  return (
    <div className={className}>
      <div className="center">
        <div className="ex1">
          {playlists &&
            playlists.map((playlist: TItem, index: number) => {
              return (
                <div key={index} className="scroll">
                  <p  className="list">
                    {playlist.name}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
