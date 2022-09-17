/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { getData } from "../../fetcher-functions/get";
import { useAuth } from "../../provider/auth.provider";
import { TImageProps } from "./image.definition";
import * as S from "./image.style";

export function Image({
  className,
  alt,
  width,
  height,
  borderRadius,
  imageUrl,
  overlay,
}: TImageProps) {
  const [showOverlay, setOverlay] = useState(0);
  const [newImageUrl, setImageUrl] = useState(imageUrl);
  const { userObject } = useAuth();
  const image = userObject?.image;

  useEffect(() => {
    if (image) {
      setImageUrl(image);
    }
  }, [userObject]);

  const theme = {
    width: width,
    height: height,
    borderRadius: borderRadius,
    showOverlay: showOverlay,
  };

  const showOverlayFunc = () => {
    if (overlay) {
      setOverlay(1);
    }
  };

  const hideOverlayFunc = () => {
    setOverlay(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <S.ImageDiv
        onMouseEnter={showOverlayFunc}
        onMouseLeave={hideOverlayFunc}
        className={className}
      >
        <img alt={alt} src={newImageUrl} />
      </S.ImageDiv>
    </ThemeProvider>
  );
}
