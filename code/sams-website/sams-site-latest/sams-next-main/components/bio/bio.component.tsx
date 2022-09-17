import * as React from "react";
import { TBioProps } from "./bio.definition";
import { Div, Image } from "./bio.style";

//components
import { Sections } from "../sections/sections.component";
import { Text } from "../text/text.component";
import { Button } from "../button/button.component";

export function Bio({ className, text, more, image }: TBioProps) {
  const [showMoreHeight, setShowMoreHeight] = React.useState(0);
  const img = image.url;

  function seeMoreHandler() {
    const showMoreText = document.getElementById("show-more-text");
    const height = showMoreHeight === 0 ? showMoreText?.offsetHeight : 0;
    setShowMoreHeight(height || 0);
  }

  return (
    <section id="bio__section">
      <section className="padding__top">
        <Sections color="white">
          <div className="center__colum">
            <Div className={className}>
              <div className="image__holder">
                <img src={img} />
              </div>

              <div className="text__div">
                <div className="text">
                  <Text>{text}</Text>

                  <div
                    className="show__more__wrapper"
                    style={{ height: showMoreHeight }}
                  >
                    <div className="hidden" id="show__more">
                      {more && <Text id="show-more-text">{more}</Text>}
                    </div>
                  </div>
                </div>

                <div className="button__container">
                  <Button onClick={seeMoreHandler}>
                    {showMoreHeight === 0 ? "see more" : "see less"}
                  </Button>
                </div>
              </div>
            </Div>
          </div>
        </Sections>
      </section>
    </section>
  );
}
