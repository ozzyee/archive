import React from "react";
import { TProjectInfoFormProps } from "./project-info-form.definition";
import * as S from "./project-info-form.style";
import { GlassBackground } from "../../glass-background/glass-background.component";

export function ProjectInfoForm({ className }: TProjectInfoFormProps) {
   return (
      <S.ProjectInfoFormDiv className={className}>
         <GlassBackground>
            <S.CenterFormInputs>
               <S.TitleInputHolder>
                  <S.FormInput type="text" placeholder="Enter Project Name" />
               </S.TitleInputHolder>

               <S.DescriptionHolder>
                  <S.TextArea placeholder="Enter Project Description" />
               </S.DescriptionHolder>
               
            </S.CenterFormInputs>
         </GlassBackground>
      </S.ProjectInfoFormDiv>
   );
}
