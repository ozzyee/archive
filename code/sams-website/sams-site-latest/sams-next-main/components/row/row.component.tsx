import * as React from "react";
import { TRowProps } from "./row.definition";
import { RowDiv } from "./row.style" ;

export function Row ({ className, children }: TRowProps) {
  return (
    <RowDiv className={className}>
      { children }
    </RowDiv>
  );
}
