import React from "react";
import { ProjectThumbnail } from "../../../../components/project-thumbnail/project-thumbnail.component";
import { TAllProjectsProps } from "./all-projects.definition";
import * as S from "./all-projects.style";

export function AllProjects({ className }: TAllProjectsProps) {
   return (
      <S.AllProjectsDiv className={className}>
         <ProjectThumbnail />
      </S.AllProjectsDiv>
   );
}
