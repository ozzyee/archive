import React from "react";
import { accessUrl } from "../../lib/spotify-login";
import { THomeContainerProps } from "../home-container/home-container.definition";

export function Component({ className }: THomeContainerProps) {
  return (
    <div className={className}>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}
