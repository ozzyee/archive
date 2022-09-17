import React from "react";
import { Div, Holder, Wrapper } from "../albums/albums.style";
import { Button } from "../button/button.component";
import { ButtonHolder } from "../contact-form/contact-form.style";
import { SectionHeader } from "../section-header/section-header.component";
import { Sections } from "../sections/sections.component";
import { TGalleryProps } from "./gallary.definition";
import {} from "./gallary.style";
import { Text } from "../text/text.component";
import Link from "next/link";
import { GallaryTwo } from "../gallary-two/gallary-two.component";
import { Image } from "../image/image.component";

export function Gallery({ className, image }: TGalleryProps) {
  if (image === undefined)
    return (
      <section id="galary__section">
        <Sections color="white">
          <SectionHeader>Gallery</SectionHeader>
          <Div>
            <Text color="white">No Images please check back soon !!</Text>
          </Div>
        </Sections>
      </section>
    );

  const images = image;
  const total = image.length;


  return (
    <section id="galary__section">
      <div className={className}>
        <Sections color="white">
          <div className="center__colum">
            <SectionHeader>Gallery</SectionHeader>

            <Holder>
              <Wrapper>
                {images.slice(0, 8).map((image: any, photo: any) => {
                  photo = image.image.url;
                  return <Image url={photo} />;
                })}
              </Wrapper>
            </Holder>

            {total >= 9 && (
                <ButtonHolder>
                  <Link href="/gallary">
                    <Button color="white">see more</Button>
                  </Link>
                </ButtonHolder>
              )}
          </div>
        </Sections>
      </div>
    </section>
  );
}
