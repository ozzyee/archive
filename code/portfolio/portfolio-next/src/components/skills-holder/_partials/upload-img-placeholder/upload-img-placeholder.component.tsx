import React, { useRef, useState } from "react";
import { TUploadImgPlaceholderProps } from "./upload-img-placeholder.definition";
import * as S from "./upload-img-placeholder.style";
import { Buttons } from "../../../buttons/buttons.component";
import { FileUploader } from "../../../file-uploader/file-uploader.component";

export function UploadImgPlaceholder({
   className,
   edit,
   onUpload,
}: TUploadImgPlaceholderProps) {
   const hiddenFileInput = useRef(null);

   const openUploader = () => {
      // @ts-ignore
      hiddenFileInput.current?.click() as React.MutableRefObject<null>;
   };

   return (
      <S.UploadImgPlaceholderDiv
         position={edit ? "absolute" : "relative"}
         className={className}
      >
         <S.Overlay id={edit ? "overlay" : ""} />

         <Buttons
            id={edit ? "upload-edit-btn" : ""}
            iconType="add-image"
            type="icons-button"
            onClick={openUploader}
            className="upload-btn"
         />

         <FileUploader
            _ref={hiddenFileInput}
            onChange={(evt) => {
               onUpload(evt);
            }}
         />
      </S.UploadImgPlaceholderDiv>
   );
}
