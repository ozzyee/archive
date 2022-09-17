import { createContext, ReactNode, useContext, useState } from "react";
import { getAboutData } from "../data/about/get-about-data";
import { initializeFirebase } from "../lib/firebase/firebase.initialize";

import {
   TAboutInputTypes,
   TSkillsProjectsTypes,
} from "./content.provider.type";

type TContentContext = {
   canEdit: boolean;
   setCanEdit: (_canEdit: boolean) => void;

   aboutData: TAboutInputTypes | null;
   setAboutData: (_aboutData: TAboutInputTypes) => void;

   skillsData: TSkillsProjectsTypes | null;
   setSkillsData: (_skillsData: TSkillsProjectsTypes) => void;

   saveData: boolean;
   setSaveData: (_saveData: boolean) => void;

   projectData: TSkillsProjectsTypes | null;
   setProjectData: (_projectData: TSkillsProjectsTypes) => void;
};

const ContentContext = createContext<TContentContext>({
   canEdit: false,
   setCanEdit: (_canEdit: boolean) => {},

   aboutData: null,
   setAboutData: (_aboutData: object) => {},

   skillsData: null,
   setSkillsData: (_skillsData: object) => {},

   saveData: true,
   setSaveData: (_saveData: boolean) => {},

   projectData: null,
   setProjectData: (_projectData: object) => {},
});

export const useContent = () => useContext(ContentContext);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
   const [canEdit, _setCanEdit] = useState(false);
   const [saveData, _setSaveData] = useState(false);
   const [aboutData, _setAboutData] = useState<TAboutInputTypes | null>(null);
   const [skillsData, _setSkillsData] = useState<TSkillsProjectsTypes | null>(
      null
   );
   const [projectData, _setProjectData] = useState<TSkillsProjectsTypes | null>(
      null
   );

   const setCanEdit = (_canEdit: boolean) => {
      _setCanEdit(_canEdit);
   };

   const setAboutData = (_aboutData: TAboutInputTypes | null) => {
      _setAboutData(_aboutData);
   };

   const setSkillsData = (_SkillsData: TSkillsProjectsTypes | null) => {
      _setSkillsData(_SkillsData);
   };

   const setSaveData = (_saveData: boolean) => {
      _setSaveData(_saveData);
   };

   const setProjectData = (_projectData: TSkillsProjectsTypes | null) => {
      _setProjectData(_projectData);
   };

   initializeFirebase;

   return (
      <ContentContext.Provider
         value={{
            canEdit,
            setCanEdit,
            aboutData,
            setAboutData,
            skillsData,
            setSkillsData,
            setSaveData,
            saveData,
            setProjectData,
            projectData,
         }}
      >
         {children}
      </ContentContext.Provider>
   );
};
