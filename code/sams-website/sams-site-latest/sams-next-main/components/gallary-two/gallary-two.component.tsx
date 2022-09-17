import React from "react";
import { Holder, Wrapper } from "../albums/albums.style";
import { ButtonHolder } from "../contact-form/contact-form.style";
import { GallaryPage } from "../gallary-page/gallary-page.component";
import { TGallaryTwoProps } from "./gallary-two.definition";
import {} from "./gallary-two.style";
import { Image } from "../image/image.component";


export function GallaryTwo({ className, images }: TGallaryTwoProps) {

  return (
    <div className={className}>
      <h1>test</h1>
      <ButtonHolder>
        <Holder>
          {" "}
          <Wrapper>
            {/* {images.map((image: any, photo: any) => {
              photo = image.image.url;
              return <Image url={photo} />;
            })} */}
          </Wrapper>
        </Holder>
      </ButtonHolder>
    </div>
  );
}
