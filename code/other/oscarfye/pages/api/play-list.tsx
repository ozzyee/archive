import { NextApiResponse } from "next";
import { getPlaylist } from "../../lib/spotify";
import { TItem } from "../../components/side-bar/side-bar.definition";

export default async (_: any, res: NextApiResponse) => {
  const response = await getPlaylist();
  const { items } = await response.json();  

  const list = items.slice(0, 30).map((item: TItem) => ({
    name: item.name,
    uri: item.uri,
    href: item.href,
    url: item.url,
    public:item.public
  }));

  return res.status(200).json({ list });
};
