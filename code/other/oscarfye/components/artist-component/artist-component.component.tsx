import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import { TArtistComponentProps } from "./artist-component.definition";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { LoadingPage } from "../loading-page/loading-page.style";
import { LoadingArtists } from "../loadingh-artist/loadingh-artist.style";

export type TArtist = {
  id: string;
  name: string;
  photo: string;
  images: string;
};

export function Component({ className }: TArtistComponentProps) {
  const { data, error } = useSWR("/api/follow", fetcher);
  if (error) return null;
  if (!data) return <LoadingArtists />;

  const artists = data.artists;

  return (
    <div className={className}>
      <section className="playlist__public">
        <div className="title">
          <h2 className="title__text">Following</h2>
        </div>
        <div className="padding-left-more">
          <div className="playlist__map">
            {artists &&
              artists.map((artist: TArtist, index: number) => {
                return (
                  <div key={index} className="padding">
                    <Link href={`/artist/${artist.id}`}>
                      <div className="following__box">
                        <div className="image__holder">
                          <PlayCircleFilledIcon
                            style={{ fontSize: 50 }}
                            className="play__hover"
                          />

                          <img className="artist__cover" src={artist.photo} />
                        </div>

                        <div className="follow__text">
                          <h2>{artist.name}</h2>
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
