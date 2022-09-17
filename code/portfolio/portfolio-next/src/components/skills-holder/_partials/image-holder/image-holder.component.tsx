import React from "react";
import { UploadImgPlaceholder } from "../upload-img-placeholder/upload-img-placeholder.component";
import { TImageHolderProps } from "./image-holder.definition";
import * as S from "./image-holder.style";

export function ImageHolder({
   className,
   src,
   alt,
   canEdit,
   createLayout,
   onUpload,
}: TImageHolderProps) {
   return (
      <S.ImageHolderDiv className={className}>
         <S.Img src={src} alt={alt} />
         {canEdit && (
            <UploadImgPlaceholder
               edit={!createLayout || src}
               onUpload={onUpload}
            />
         )}
      </S.ImageHolderDiv>
   );
}
