import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/async-fetcher";
import { ArtistAlbums } from "../artist-albums/artist-albums.style";
import { ArtistSongs } from "../artist-songs/artist-songs.style";
import { SimilarArtists } from "../similar-artists/similar-artists.style";
import { TArtistContainerProps } from "./artist-container.definition";

export function Component({ className }: TArtistContainerProps) {
  const router = useRouter();
  const { artistId } = router.query;

  const { data, error } = useSWR(["/api/artist/", artistId], (url, id) =>
    fetcher(url, { id })
  );

  const [artist, setArtist] = useState(data);

  useEffect(() => {
    if (data) {
      setArtist(data.artist);
    }
  }, [data]);

  if (!artist || error) return <Loader />;


  return (
    <div className={className}>
      <div className="artist-background">
        <div className="overlay"></div>
        <img className="banner-image" src={artist.image} />
      </div>

      <div className="box">
        <div className="artist-name">
          <div className="text">
            <h1>{artist.name}</h1>
          </div>
        </div>

        <div className="artist-data">
          <ArtistSongs />
          <ArtistAlbums />
          <SimilarArtists />
        </div>
      </div>
    </div>
  );
}
