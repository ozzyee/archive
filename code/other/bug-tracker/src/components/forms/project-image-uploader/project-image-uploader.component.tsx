import React from "react";
import { TProjectImageUploaderProps } from "./project-image-uploader.definition";
import * as S from "./project-image-uploader.style";
import { GlassBackground } from "../../glass-background/glass-background.component";
import { ImageAdd } from "@styled-icons/boxicons-regular/ImageAdd";

export function ProjectImageUploader({
   className,
}: TProjectImageUploaderProps) {
   return (
      <S.ProjectImageUploaderDiv className={className}>
         <GlassBackground>
            <S.TittleHolder>
               <S.Title>Upload Images Of Your Project</S.Title>
            </S.TittleHolder>

            <S.ImageUploadedWrapper>
               <S.ImageUploaderIcon>
                  <ImageAdd />
               </S.ImageUploaderIcon>
            </S.ImageUploadedWrapper>
         </GlassBackground>
      </S.ProjectImageUploaderDiv>
   );
}
