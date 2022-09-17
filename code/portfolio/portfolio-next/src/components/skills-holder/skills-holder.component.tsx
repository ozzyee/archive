import React, { useEffect, useState } from "react";
import { TSkillsHolderProps } from "./skills-holder.definition";
import * as S from "./skills-holder.style";

import { useContent } from "../../provider/content.provider";
import { deleteData } from "../../lib/fetcher_functions/delete";
import { ButtonsHolder } from "./_partials/buttons-holder/buttons-holder.component";
import { ImageHolder } from "./_partials/image-holder/image-holder.component";
import { Text } from "../text/text.component";

export function SkillsHolder({
   className,
   alt,
   src,
   text,
   addOnClick,
   deleteOnClick,
   id,
   createLayout,
   updateContent,
}: TSkillsHolderProps) {
   const [skillsText, setSkillsText] = useState<string | undefined>(text);
   const [uploadedImg, setUploadedImg] = useState<string | undefined>(src);

   const { canEdit } = useContent();

   const deleteContent = () => {
      if (createLayout) {
         setSkillsText("");
         deleteData(uploadedImg);
         setUploadedImg("");
      }
      if (id) deleteOnClick(id);
   };

   const createContent = () => {
      setSkillsText("");
      setUploadedImg("");
      if (addOnClick && skillsText && uploadedImg)
         addOnClick({ skillsText, uploadedImg });
   };

   useEffect(() => {
      setUploadedImg(src);
      setSkillsText(text);
   }, [src, text]);

   return (
      <S.SkillsHolderDiv className={className}>
         {canEdit && (
            <ButtonsHolder
               deleteFunction={deleteContent}
               createButtons={createLayout}
               addFunction={createContent}
            />
         )}

         <ImageHolder
            src={uploadedImg}
            alt={alt}
            canEdit={canEdit}
            createLayout={createLayout}
            onUpload={(evt) => {
               setUploadedImg(evt);

               if (updateContent && skillsText && id) {
                  const uid: any = id;
                  updateContent({ uploadedImg: evt, skillsText, id: uid });
               }
            }}
         />

         <S.TextHolder>
            <S.TextInput
               placeholder="enter a discretion"
               className="main-text"
               disabled={!canEdit}
               onChange={(evt) => {
                  setSkillsText(evt.target.value);

                  if (updateContent && skillsText && uploadedImg && id) {
                     const uid: any = id;
                     updateContent({
                        uploadedImg,
                        skillsText: evt.target.value,
                        id: uid,
                     });
                  }
               }}
               defaultValue={skillsText}
               value={skillsText}
            />
         </S.TextHolder>
      </S.SkillsHolderDiv>
   );
}
