import React from "react";
import useSWR from "swr";
import { Footer } from "../../components/footer/footer.style";
import { LoadingPage } from "../../components/loading-page/loading-page.style";
import { SideBar } from "../../components/side-bar/side-bar.style";
import { UserContainer } from "../../components/user-container/user-container.style";
import { fetcher } from "../../lib/fetcher";

export default function Search() {
  const { data, error } = useSWR("/api/user", fetcher);
  if (error) return null;
  if (!data ) return <LoadingPage />;

  return (
    <div className="home">
      <div className="home__body">
        <SideBar name="some album" />
        <UserContainer />
      </div>
      <Footer />
    </div>
  );
}
