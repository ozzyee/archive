import React from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import { TSideBarProps } from "./side-bar.definition";
//icons

import { PlaylistSidebar } from "../playlist-sidebat/playlist-sidebat.style";
import { SidebaLinks } from "../sidebar-links/sidebar-links.style";
import { LoadingSidebar } from "../loading-side-bar/loading-side-bar.style";

export function Component({ className }: TSideBarProps) {
  const { data, error } = useSWR("/api/play-list", fetcher);

  if (error) return null;
  if (!data) return <LoadingSidebar />;
  return (
    <div className={className}>
      <SidebaLinks />
      <hr />
      <PlaylistSidebar />
    </div>
  );
}
