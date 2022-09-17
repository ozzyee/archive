import React, { useState } from "react";
import {
   LayoutWrapper,
   SkillsProjectsHolders,
   TitleWrapper,
} from "../../../styles/globalStyle-styles";
import { TProjectsSectionProps } from "./projects-section.definition";
import * as S from "./projects-section.style";
import { Text } from "../../components/text/text.component";
import { useContent } from "../../provider/content.provider";
import { SkillsHolder } from "../../components/skills-holder/skills-holder.component";

export function ProjectsSection({ className }: TProjectsSectionProps) {
   const [titleValue, setTitleValue] = useState("projects");
   const [_mainText, setMainText] = useState("coming soon....");
   const [_skills, setSkills] = useState([]);

   const { setSkillsData, canEdit } = useContent();

   const addNewSkill = ({
      uploadedImg,
      skillsText,
   }: {
      uploadedImg: string;
      skillsText: string;
   }) => {
      const newObject = {
         id: _skills.length + 1,
         src: uploadedImg,
         alt: "my-skills",
         text: skillsText,
      };

      setSkills([..._skills, newObject]);
   };

   const deleteSkill = (id: number) => {
      const index = _skills.findIndex((item) => item.id === id);
      if (index > -1) {
         _skills.splice(index, 1);
      }
      setSkills([..._skills]);
   };

   const update = ({
      uploadedImg,
      skillsText,
      id,
   }: {
      uploadedImg: string;
      skillsText: string;
      id: number;
   }) => {
      const objectIndex = _skills.findIndex((x) => x.id === id);
      const newObject = {
         id,
         src: uploadedImg,
         alt: "image of html css and javascript 111",
         text: skillsText,
      };

      setSkills([
         ..._skills.slice(0, objectIndex),
         newObject,
         ..._skills.slice(objectIndex + 1),
      ]);
   };

   return (
      <S.ProjectsSectionDiv className={className}>
         <LayoutWrapper>
            <TitleWrapper>
               <Text type="h2" onChange={(evt: string) => setTitleValue(evt)}>
                  {titleValue}
               </Text>

               <Text
                  margin="7px 0"
                  onChange={(evt: string) => {
                     setMainText(evt);
                  }}
                  className="main-text"
               >
                  {_mainText}
               </Text>
            </TitleWrapper>

            <SkillsProjectsHolders>
               {_skills.map(({ src, alt, text, id }) => {
                  return (
                     <SkillsHolder
                        id={id}
                        key={id}
                        src={src}
                        alt={alt}
                        text={text}
                        updateContent={update}
                        deleteOnClick={deleteSkill}
                     />
                  );
               })}

               {canEdit && (
                  <SkillsHolder
                     createLayout={true}
                     addOnClick={addNewSkill}
                     deleteOnClick={deleteSkill}
                     id="edit-placeholder"
                     placeholder="enter a description"
                  />
               )}
            </SkillsProjectsHolders>
         </LayoutWrapper>
      </S.ProjectsSectionDiv>
   );
}
