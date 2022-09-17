import React from "react";
import { Holder, Wrapper } from "../albums/albums.style";
import { TGallaryPageProps } from "./gallary-page.definition";
import {} from "./gallary-page.style";
import { Image } from "../image/image.component";
import { SectionHeader } from "../section-header/section-header.component";

export function GallaryPage({ className, images, image }: TGallaryPageProps) {

  return (
    <div className={className}>
      {" "}
      <Holder>

        <Wrapper>
          {image.map((image: any, photo: any) => {
            photo = image.image.url;
            return <Image url={photo} />;
          })}
        </Wrapper>
      </Holder>
    </div>
  );
}
