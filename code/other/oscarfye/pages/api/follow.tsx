import { NextApiResponse } from "next";
import { getFollowing, getPlaylist } from "../../lib/spotify";
import { TItem } from "../../components/side-bar/side-bar.definition";
import { totalmem } from "os";

export default async (_: any, res: NextApiResponse) => {
  const response = await getFollowing();
  const dataResponse = await getPlaylist();

  const data = await response.json();
  const playData = await dataResponse.json();
  const items = data.artists.items;

  const playList = playData.items;
  
  
  const privatePlaylist = playList.filter(function (privet: any) {
    return privet.public == true;
  });
  const playlist = privatePlaylist.slice(0, 30).map((item: TItem) => ({
    name: item.name,
    uri: item.uri,
    href: item.href,
    photo: item.images[0].url,
    id: item.id

  }));
  
  const artists = items.slice(0, 30).map((item: TItem) => ({
    name: item.name,
    genres: item.genres,
    href: item.href,
    photo: item.images[0].url,
    popularity: item.popularity,
    type: item.type,
    id: item.id
  }));
  
  return res.status(200).json({ playlist, artists });
};
