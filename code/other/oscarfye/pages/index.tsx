import React from "react";
import { Footer } from "../components/footer/footer.style";
import { HomeContainer } from "../components/home-container/home-container.style";
import { LoadingPage } from "../components/loading-page/loading-page.style";
import { LogIn } from "../components/log-in/log-in.style";
import { SideBar } from "../components/side-bar/side-bar.style";

export default function Home() {
  return (
    <div className="home">
      <div className="home__body">
        <SideBar name="some album" />
        <HomeContainer />
      </div>
      <Footer />
      {/* <LogIn /> */}
    </div>
  );
}
