import React, { useState, useEffect } from "react";
import { TLogoutAndSaveModal } from "./logout-and-save-modal.definition";
import * as S from "./logout-and-save-modal.style";

import { saveSkillsData } from "../../data/skills/save-skills-data";

import { useContent } from "../../provider/content.provider";
import { post } from "../../lib/fetcher_functions/post";

import { Cross } from "@styled-icons/entypo/Cross";
import {
   TAboutInputTypes,
   TSkillsTypes,
} from "../../provider/content.provider.type";
import { saveAboutData } from "../../data/about/save-about-data";

export function LogoutAndSaveModal({ className }: TLogoutAndSaveModal) {
   const { setSaveData, aboutData, skillsData } = useContent();
   const [_aboutData, setAboutData] = useState<TAboutInputTypes | null>(null);
   const [_skillsData, setSkillsData] = useState<TSkillsTypes | null>(null);
   const [saveMessage, setSaveMessage] = useState("");

   useEffect(() => {
      aboutData !== null && setAboutData(aboutData);
      skillsData !== null && setSkillsData(skillsData);
   }, [aboutData, skillsData]);

   const closeModal = () => {
      setSaveData(false);
      document.body.style.overflow = "scroll";
   };

   const signOut = async () => {
      await post("/api/signin");
      window.location.href = "/";
   };

   const saveData = async () => {
      let message: string | null;
      message = await saveAboutData(_aboutData);
      message = await saveSkillsData(_skillsData);

      if (!message) return null;
      setSaveMessage(message);
   };

   return (
      <S.SaveModalDiv className={className}>
         <S.ModalWrapper>
            <S.Modal>
               <S.Title>Sign Out</S.Title>
               <S.NoteText>Would you like to save your changes</S.NoteText>
               <Cross id="close-icon" onClick={closeModal} />
               <S.ButtonsWrapper>
                  <S.EditBtn color="#143056" onClick={saveData}>
                     Save Edit
                  </S.EditBtn>
                  <S.EditBtn color="#e56b6f" onClick={signOut}>
                     Sign Out
                  </S.EditBtn>
               </S.ButtonsWrapper>
               {saveMessage && (
                  <S.NoteText fontSize="12px">
                     Message: <span>{saveMessage}</span>
                  </S.NoteText>
               )}
            </S.Modal>
         </S.ModalWrapper>
      </S.SaveModalDiv>
   );
}
