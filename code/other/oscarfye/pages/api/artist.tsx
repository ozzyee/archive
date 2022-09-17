import { NextApiRequest, NextApiResponse } from "next";
import {
  getArtist,
  getArtistAlbums,
  getArtistSimilar,
  getArtistTopSongs,
} from "../../lib/spotify";
import { TItem } from "../../components/side-bar/side-bar.definition";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.body.id;

  if (!id) {
    return res.status(400).json({ message: "id not found" });
    // NOTE: No code after a return is run
  }

  //similar artists 
  const similar = await getArtistSimilar(id);
  const similarData = await similar.json();

  const allSimilar = similarData.artists.slice(0, 30).map((item: TItem) => ({
    name:item.name,
    id:item.id,
    popularity:item.popularity,
    images:item.images[0].url,
    followers:item.followers.total,
    genres:item.genres
  }));

  //artists


  //artist albums
  const albums = await getArtistAlbums(id);
  const albumsData = await albums.json();

  const allAlbums = albumsData.items.slice(0, 30).map((item: TItem) => ({
    name: item.name,
    type: item.type,
    release_date: item.release_date,
    album_type: item.album_type,
    images: item.images[0].url,
    id: item.id,
  }));

  

  //this is the popular songs data
  const popular = await getArtistTopSongs(id);
  const popdata = await popular.json();

  const popSongs = popdata.tracks.slice(0, 30).map((item: TItem) => ({
    name: item.name,
    popularity: item.popularity,
    id: item.id,
    photo: item.album.images[0],
    time: item.duration_ms,
    explicit: item.explicit,
  }));

  // NOTE: So this is the same as "else"
  const result = await getArtist(id);
  const data = await result.json();

  const artist = {
    name: data.name,
    image: data.images[0].url,
  };
 
  return res.status(200).json({ artist, data, popSongs, allAlbums, allSimilar });
};
