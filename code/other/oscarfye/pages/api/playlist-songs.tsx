import { NextApiRequest, NextApiResponse } from "next";

import { TItem } from "../../components/side-bar/side-bar.definition";
import { getPlaylistSongs } from "../../lib/spotify";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.body.id;

  if (!id) {
    return res.status(400).json({ message: "id not found" });
    // NOTE: No code after a return is run
  }

  // NOTE: So this is the same as "else"
  const result = await getPlaylistSongs(id);
  const playlistData = await result.json();

  //this is the break down of data

  //this is about the playlist
  const about = playlistData;
  const aboutPlaylist = {
    playListCollaborative: about.collaborative,
    playListDescription: about.description,
    playListExternal_urls: about.external_urls.spotify,
    playListFollowers: about.followers.total,
    playListHref: about.href,
    playListId: about.id,
    playListImages: about.images[0].url,
    playListName: about.name,
    public: about.public,
  };

  //play list owner
  const owner = playlistData;
  const playListOwner = {
    owner: owner.owner,
  };

  //play list items
  const playListItems = playlistData.tracks.items;
  const playListItemsMap = playListItems.map((item: TItem) => ({
    added_at: item.added_at,
    added_by: item.added_by,
    is_local: item.is_local,
    track: item.track,
  }));

  const totalSongs = {
    total: playlistData.tracks.total,
  };

  return res
    .status(200)
    .json({ totalSongs, playListItems, playListOwner, aboutPlaylist, playListItemsMap });
};

//playListItems, playListOwner, aboutPlaylist,
