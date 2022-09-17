import * as React from "react";
import { TImageProps } from "./image.definition";
import { ImageHolder, ImageStyled } from "./image.style";

export function Image({ className, url, altText }: TImageProps) {
  return (
    <ImageHolder className={className}>
      <ImageStyled src={url} alt={altText} />
    </ImageHolder>
  );
}
