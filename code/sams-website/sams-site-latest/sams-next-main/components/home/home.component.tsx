import React, { useEffect, useState } from "react";
import { SectionHeader } from "../section-header/section-header.component";
import { Sections } from "../sections/sections.component";
import { THomeProps } from "./home.definition";
import { Container, ImageHolder } from "./home.style";

export default function Scroll() {
  useEffect(function onFirstMount() {
    function onScroll() {
      const imageOpacity:any = document.getElementById("image__scroll");
      const textOpacity:any =  document.getElementById("text__opacity");

      var scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
        imageOpacity.style.opacity = Math.max(0, Math.min(1, -scroll / 100 + 2));
        textOpacity.style.opacity = Math.max(0, Math.min(1, -scroll / 100 + 2));

    }

    window.addEventListener("scroll", onScroll);
  }, []);

  return null;
}

export function HomeSection({ className }: THomeProps) {
  return (
    <div className={className}>
      <Scroll />
      <Sections>
        <Container>
          <ImageHolder>
            <div id="text__opacity"  className="text">
              <div className="center__content">
                <SectionHeader>Sam Ostler</SectionHeader>
                <div className="icons">
                  <a target="blank" href="https://www.facebook.com/sam.ostler1">
                    <span className="size icon-facebook"></span>
                  </a>

                  <a
                    target="blank"
                    href="https://www.instagram.com/samostlermusic/?fbclid=IwAR0o3Kmm11Kjg3S8G4ZtK7lnSgOX6IvdEBtpjbcuwPz5lOYRsXBNFfF2OA8"
                  >
                    <span className="size icon-instagram"></span>
                  </a>

                  <a
                    target="blank"
                    href="spotify:artist:5qtesdiEh8vInfJkZfZXCH"
                  >
                    <span className="size icon-spotify"></span>
                  </a>

                  <a
                    target="blank"
                    href="https://www.youtube.com/user/samostler"
                  >
                    <span className="size icon-youtube"></span>
                  </a>
                </div>
              </div>
            </div>
            <div id="image__scroll" className="crop">
              <img src="/home.png" />
            </div>
          </ImageHolder>
        </Container>
      </Sections>
    </div>
  );
}
