import * as React from "react";
import { TSectionHeaderProps } from "./section-header.definition";
import { HeadersPadding, Headers } from "./section-header.style";

export function SectionHeader({ className, children }: TSectionHeaderProps) {
  return (
    <HeadersPadding className={className}>
      <Headers>{children}</Headers>
    </HeadersPadding>
  );
}
