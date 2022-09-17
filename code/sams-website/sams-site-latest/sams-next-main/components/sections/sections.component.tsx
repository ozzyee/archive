import * as React from "react";
import { TSectionsProps } from "./sections.definition";
import {
  LightBlackSection,
  WhiteSection,
  BlackSection,
} from "./sections.style";

export function Sections({ className, color, children, id  }: TSectionsProps) {
  if (color === "white") {
    return <WhiteSection id="id" className={className}>{children}</WhiteSection>;
  }

  if (color === "LightBlack") {
    return (
      <LightBlackSection id="id" className={className}>{children}</LightBlackSection>
    );
  }
  return <BlackSection className={className}>{children}</BlackSection>;
}
