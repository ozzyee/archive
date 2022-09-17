import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

//endpoints
const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";
const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
const USER_ENDPOINT = "https://api.spotify.com/v1/me";
const RECOMOMENDED_ENDPOINT = "https://api.spotify.com/v1/recommendations";
const FOLLW_ENDPOINT =
  "https://api.spotify.com/v1/me/following?type=artist&limit=4";

//Artsit page api end points
const ARTIST_NAME = "https://api.spotify.com/v1/artists/";
const ARTIST_POPULAR_SONGS = "/top-tracks?market=es";
const ARTIST_ALBUMS = "/albums?market=ES";
const RELATES_ARTISTS = "/related-artists";

//playlist api end points
const GET_PLAYLIST = "https://api.spotify.com/v1/playlists/";

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },

    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getFollowing = async () => {
  const { access_token } = await getAccessToken();

  return fetch(FOLLW_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getPlaylist = async () => {
  const { access_token } = await getAccessToken();

  return fetch(PLAYLIST_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getUser = async () => {
  const { access_token } = await getAccessToken();

  return fetch(USER_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getRecomended = async () => {
  const { access_token } = await getAccessToken();

  return fetch(RECOMOMENDED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
export const getArtist = async (id: string) => {
  const { access_token } = await getAccessToken();

  return fetch(ARTIST_NAME + id, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getArtistTopSongs = async (id: string) => {
  const { access_token } = await getAccessToken();

  return fetch(ARTIST_NAME + id + ARTIST_POPULAR_SONGS, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getArtistAlbums = async (id: string) => {
  const { access_token } = await getAccessToken();

  return fetch(ARTIST_NAME + id + ARTIST_ALBUMS, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getArtistSimilar = async (id: string) => {
  const { access_token } = await getAccessToken();

  return fetch(ARTIST_NAME + id + RELATES_ARTISTS, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};


export const getPlaylistSongs = async (id: string) => {
  const { access_token } = await getAccessToken();

  return fetch(GET_PLAYLIST + id, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};