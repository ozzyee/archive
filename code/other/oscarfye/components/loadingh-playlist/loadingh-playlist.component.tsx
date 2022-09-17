import React from "react";
import { TLoadingPlaylistProps } from "./loadingh-playlist.definition";

export function Component({ className }: TLoadingPlaylistProps) {
  return (
    <div className={className}>
      <section className="playlist__public">
        <div className="title">
          <h2 className="title__text">Public Playlists</h2>
        </div>
        <div className="padding-left-more">
          <div className="playlist__map">
            <div className="padding">
              <div className="following__box-loading">
                <div className="image__holder">
                  <img className="playlist__cover image-load" />
                </div>

                <div className="playlist__text">
                  <h2>.............</h2>
                  <p>play list</p>
                </div>
              </div>
            </div>

            <div className="padding">
              <div className="following__box-loading">
                <div className="image__holder">
                  <img className="playlist__cover image-load" />
                </div>

                <div className="playlist__text">
                  <h2>__________</h2>

                  <p>play list</p>
                </div>
              </div>
            </div>

            <div className="padding">
              <div className="following__box-loading">
                <div className="image__holder">
                  <img className="playlist__cover image-load" />
                </div>

                <div className="playlist__text">
                  <h2>__________</h2>
                  <p>play list</p>
                </div>
              </div>
            </div>

            <div className="padding">
              <div className="following__box-loading">
                <div className="image__holder">
                  <img className="playlist__cover image-load" />
                </div>

                <div className="playlist__text">
                  <h2>__________</h2>
                  <p>Artist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
