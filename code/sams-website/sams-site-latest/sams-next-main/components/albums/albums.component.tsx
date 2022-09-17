import * as React from "react";
import { SectionHeader } from "../section-header/section-header.component";
import { Sections } from "../sections/sections.component";
import { TAlbumsProps } from "./albums.definition";
import { Wrapper, Holder, Div } from "./albums.style";
import { Image } from "../image/image.component";
import { Text } from "../text/text.component";

//icons
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

export function Albums({ className, album }: TAlbumsProps) {
  const albumData = album;

  if (albumData === undefined)
    return (
      <section id="albums__section">
        <Sections color="LightBlack">
          <div className="center__colum">
            <SectionHeader>Albums</SectionHeader>
            <Div>
              <Text>No Albums please check back soon !!</Text>
            </Div>
          </div>
        </Sections>
      </section>
    );

  return (
    <div id="albums__section" className={className}>
      <Sections color="LightBlack">
        <div className="center__colum">
          <SectionHeader>Albums</SectionHeader>

          <Holder>
            <Wrapper>
              {albumData.map((data: any, image: string, url: string, key:any) => {
                image = data.cover.url;
                url = data.url;

                return (
                    <a target="blank" href={url}>
                      <Image url={image} />
                    </a>
                );
              })}
            </Wrapper>
          </Holder>
        </div>
      </Sections>
    </div>
  );
}
