import { NextApiResponse } from "next";
import { getUser } from "../../lib/spotify";
import { TItem } from "../../components/side-bar/side-bar.definition";

export default async (_: any, res: NextApiResponse) => {
  const response = await getUser();
  const data = await response.json();

  const user = {
    name: data.display_name,
    url: data.external_urls.spotify,
    href: data.href,
    id: data.id,
  };

  const images = data.images.slice(0, 30).map((item: TItem) => ({
    url: item.url,
  }));

  return res.status(200).json({ image: images[0].url, user });
};
