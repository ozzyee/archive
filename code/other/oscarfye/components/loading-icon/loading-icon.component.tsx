import React from "react";
import { TLoadingIconProps } from "./loading-icon.definition";

export function Component({ className }: TLoadingIconProps) {
  return (
    <div className={className}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
