import React from "react";
import { User } from "../user/user.style";
import { THomeContainerProps } from "./home-container.definition";

export function Component({ className }: THomeContainerProps) {
  return (
    <div className={className}>
      <User />
    </div>
  );
}
