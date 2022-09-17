import Link from "next/dist/client/link";
import React, { useEffect, useState } from "react";
import { TSimilarArtistsProps } from "./similar-artists.definition";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { useRouter } from "next/dist/client/router";
import { fetcher } from "../../lib/async-fetcher";
import useSWR from "swr";
import { TArtist } from "../artist-component/artist-component.component";

export function Component({ className }: TSimilarArtistsProps) {
  const router = useRouter();
  const { artistId } = router.query;
  const { data, error } = useSWR(
    ["/api/artist/", artistId],
    (url, id: string) => fetcher(url, { id })
  );

  const [artist, setPopular] = useState(data);

  useEffect(() => {
    if (data) {
      setPopular(data);
    }
  }, [data]);

  if (error) return null;
  if (!data ) return <h1>this is a test on the simila artist</h1>;


  const artists = artist.allSimilar;


  return (
    <div className={className}>
      <h2 className="title">fans also like</h2>
      <div className="padding-left-more">
        {artists &&
          artists.slice(0, 4).map((artist: TArtist, index: number) => {
            return (
              <div key={index} className="padding">
                <Link href={`/artist/${artist.id}`}>
                  <div className="following__box">
                    <div className="image__holder">
                      <PlayCircleFilledIcon
                        style={{ fontSize: 50 }}
                        className="play__hover"
                      />

                      <img className="artist__cover" src={artist.images} />
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
  );
}
