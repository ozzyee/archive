import { Router, useRouter } from "next/dist/client/router";
// import { fetcher } from "../../lib/fetcher";
import useSWR from "swr";
import { RouterTwoTone } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { fetcher } from "../../lib/async-fetcher";
import { ArtistContainer } from "../../components/artist-container/artist-container.style";
import { SideBar } from "../../components/side-bar/side-bar.style";
import { Footer } from "../../components/footer/footer.style";
import { LoadingPage } from "../../components/loading-page/loading-page.style";

export default function ArtistPage() {
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

  if (error) return null;
  if (!data ) return <LoadingPage/>;

  return (   
    <div>
      <div className="home__body">
        <SideBar name="side-bar" />
        <ArtistContainer />
      </div>
      <Footer />
    </div>
  );
}

// useSWR takes two arguments (data and a function)
// If passing multiple - the first argument is an array (like below)
// The second argument is an unnamed/anonymous function that calls our fetcher
// and passes the first argument of useSWR to fetcher
