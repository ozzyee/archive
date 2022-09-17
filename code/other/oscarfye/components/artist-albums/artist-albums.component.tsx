import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/async-fetcher";
import { TArtistAlbumsProps } from "./artist-albums.definition";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { TItem } from "../side-bar/side-bar.definition";
import moment from "moment";

export function Component({ className }: TArtistAlbumsProps) {
  const router = useRouter();
  const { artistId } = router.query;
  const { data, error } = useSWR(
    ["/api/artist/", artistId],
    (url, id: string) => fetcher(url, { id })
  );

  const [artistAlbums, setArtistAlbums] = useState(data);

  useEffect(() => {
    if (data) {
      setArtistAlbums(data);
    }
  }, [data]);
  const list = artistAlbums.allAlbums;


  return (
    <div className={className}>
      <h2 className="title">discography</h2>
      <div className="padding-left-more">
        {list &&
          list.slice(0, 4).map((album: TItem, index: number) => {
            return (
              <div key={index} className="padding">
                <div className="following__box">
                  <div className="image__holder">
                    <PlayCircleFilledIcon
                      style={{ fontSize: 50 }}
                      className="play__hover__album"
                    />
                    <img className="playlist__cover" src={album.images} />
                  </div>

                  <div className="playlist__text">
                    <h2>{album.name}</h2>
                    <p>
                      {moment(album.release_date).format("YYYY")} . {album.type}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
