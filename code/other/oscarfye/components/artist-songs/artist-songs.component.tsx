import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { TArtistSongsProps, TTimeItem } from "./artist-songs.definition";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ExplicitIcon from "@material-ui/icons/Explicit";
import { fetcher } from "../../lib/async-fetcher";
import { Loader } from "../loader/loader.style";
import { LoaderPage } from "../loader-page/loader-page.style";

export function Component({ className }: TArtistSongsProps) {
  const router = useRouter();
  const { artistId } = router.query;
  const { data, error } = useSWR(
    ["/api/artist/", artistId],
    (url, id: string) => fetcher(url, { id })
  );

  const [artist, setArtist] = useState(data);

  useEffect(() => {
    if (data) {
      setArtist(data.popSongs);
    }
  }, [data]);

  // if (!data) return <Loading />;
  if (!data) return  null;

  if (error) return null;
  const list = data.popSongs;

  function pressed(_: any) {
    const show = document.getElementById("artist-songs-button");
    const hide = document.getElementById("artist-songs-button-hide");
    const overflow = document.getElementById("overflow");

    if (show && hide && overflow) {
      if (show.style.display === "block") {
        show.style.display = "none";
        hide.style.display = "block";
        overflow.style.height = "600px";
      } else {
        show.style.display = "block";
        hide.style.display = "none";
        overflow.style.height = "300px";
      }
    }
  }

  if (!artist || error) return null;
  return (
    <div className={className}>
      <h2>popular</h2>

      <div id="overflow" className="hide-content">
        {list &&
          list.map((list: TTimeItem, index: number) => {
            //test if content is explicit if so print logo
            const isExplicit = list.explicit;

            //this is the conversion for the running time of a song
            const msSeconds: number = list.time;
            const seconds: number = msSeconds / 1000;
            const minute: number = seconds / 60;
            const total: any = minute;
            const totalRuntime = parseFloat(total).toFixed(2);

            return (
              <div key={index} className="scroll">
                <div className="song-list">
                  <div className="number text">
                    <p className="number-count">{index + 1}</p>
                    <PlayArrowIcon className="play-button" />
                  </div>

                  <div className="album-cover">
                    <img src={list.photo.url} />
                  </div>

                  <div className="name">
                    <p className="name-text">{list.name}</p>
                    {isExplicit && <ExplicitIcon className="explicit-icon" />}
                  </div>

                  <div className="popularity">
                    <p className="name-text center">{list.popularity}%</p>
                  </div>

                  <div className="time">
                    <div className="time-text">
                      <p className="name-text center">{totalRuntime}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <button
        id="artist-songs-button"
        onClick={pressed}
        style={{ display: "block" }}
        className="button"
      >
        show more
      </button>
      <button
        id="artist-songs-button-hide"
        onClick={pressed}
        style={{ display: "none" }}
        className="button"
      >
        show less
      </button>
    </div>
  );
}
