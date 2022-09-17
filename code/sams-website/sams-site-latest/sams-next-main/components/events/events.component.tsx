import * as React from "react";
import moment from "moment";
import { Headers } from "../section-header/section-header.style";
import { TEventsProps } from "./events.definition";
import Link from "next/link";
import {
  DateContainer,
  DateHolder,
  Location,
  Date,
  ButtonSmall,
  BuyMe,
  Div,
  DateDiv,
  DivHolder,
  LocationDiv,
  NoData,
  TextDiv,
} from "./events.style";
import { Button } from "../button/button.component";
import { AnyCnameRecord } from "dns";

export function Events({ className, events }: TEventsProps) {
  const [showMoreHeight, setShowMoreHeight] = React.useState(0);

  function seeMoreHandler() {
    const showMoreText = document.getElementById("show-more-text");
    const height = showMoreHeight === 0 ? showMoreText?.offsetHeight : 0;
    setShowMoreHeight(height || 0);
  }

  if (events == null) {
    return (
      <TextDiv>
        <div className="padding__bottom">
          <NoData>No Dates check back soon!!</NoData>
        </div>
      </TextDiv>
    );
  }

  return (
    <DivHolder>
      <div className="map__holder">
        {events.map((events: any) => {
          const date = events.date;

          const month = moment(date).format("MMM");
          const number = moment(date).format("do");
          const location = events.location;
          const urlData = events.buy_url;

          const url = "https://" + urlData;

          return (
            <Div>
              <DateDiv>
                <DateContainer className={className}>
                  <DateHolder>
                    <Date>
                      <p>{month}</p>
                      <p>{number}</p>
                    </Date>
                  </DateHolder>

                  <Location>
                    <LocationDiv>
                      <p>{location}</p>
                    </LocationDiv>
                  </Location>

                  <ButtonSmall>
                    <BuyMe>
                      <a href={url} target="_blank">
                        Buy Now
                      </a>
                    </BuyMe>
                  </ButtonSmall>
                </DateContainer>
              </DateDiv>
            </Div>
          );
        })}
      </div>
    </DivHolder>
  );
}
