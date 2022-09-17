import * as React from "react";
import { TCollomProps } from "./collom.definition";
import { CollomDiv, CollomBigDiv } from "./collom.style";

export function Collom({ className, children , size}: TCollomProps) {
  if (size === "big") {
    return <CollomBigDiv className={className}>{children}</CollomBigDiv>;
  }

  return <CollomDiv className={className}>{children}</CollomDiv>;
}
