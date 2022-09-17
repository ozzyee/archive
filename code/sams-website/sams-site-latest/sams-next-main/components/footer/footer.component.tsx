import React from "react";
import { TFooterProps } from "./footer.definition";
import { FooterP } from "./footer.style";

export function Footer({ className }: TFooterProps) {
  return (
    <div className={className}>
      <a href="https://oscarearle.co.uk" target="blank">
        <FooterP>Created by Oscar Earl ©</FooterP>
      </a>
    </div>
  );
}
