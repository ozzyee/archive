import React from "react";
import { TSidebaLinksProps } from "./sidebar-links.definition";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { Grid } from "@material-ui/core";

export function Component({ className }: TSidebaLinksProps) {
  return (
    <div className={className}>
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <Grid
        className="icon__holder"
        container
        direction="row"
        alignItems="center"
      >
        <Grid className="icon" item>
          <HomeIcon />
        </Grid>
        <Grid className="text" item>
          Home
        </Grid>
      </Grid>

      <Grid
        className="icon__holder"
        container
        direction="row"
        alignItems="center"
      >
        <Grid className="icon" item>
          <SearchIcon />
        </Grid>
        <Grid className="text" item>
          Search
        </Grid>
      </Grid>

      <Grid
        className="icon__holder"
        container
        direction="row"
        alignItems="center"
      >
        <Grid className="icon" item>
          <LibraryMusicIcon />
        </Grid>
        <Grid className="text" item>
          Your Library
        </Grid>
      </Grid>
    </div>
  );
}
