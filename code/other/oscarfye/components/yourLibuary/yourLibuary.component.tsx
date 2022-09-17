import React from "react";
import { TYourLibuaryProps } from "./yourLibuary.definition";

export function Component({ className }: TYourLibuaryProps) {
  return (
    <div className={className}>
      <h1>your libuary</h1>
    </div>
  );
}
