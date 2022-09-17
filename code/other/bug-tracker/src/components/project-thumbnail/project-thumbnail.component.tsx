/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { TProjectThumbnailProps } from "./project-thumbnail.definition";
import * as S from "./project-thumbnail.style";
import { GlassBackground } from "../glass-background/glass-background.component";

export function ProjectThumbnail({
   className,
   imageUrl,
}: TProjectThumbnailProps) {
   const [hasImage, setHasImage] = useState(false);

   useEffect(() => {
      if (imageUrl) {
         if (imageUrl?.length > 0) {
            setHasImage(true);
         }
      }
   }, [imageUrl]);

   return (
      <S.ProjectThumbnailDiv className={className}>
         <GlassBackground>
            <S.ProjectContents>
               {hasImage && (
                  <S.ProjectImage>
                     <img src={imageUrl} />
                  </S.ProjectImage>
               )}

               <S.TitleHolder>
                  <S.Title>THIS IS A TEST PROJECT</S.Title>
               </S.TitleHolder>
            </S.ProjectContents>
         </GlassBackground>
      </S.ProjectThumbnailDiv>
   );
}
