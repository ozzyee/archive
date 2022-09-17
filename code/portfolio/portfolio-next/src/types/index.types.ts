import { TAboutData, TAboutDataObject } from "../data/about/about-data.type";
import { TSkillsDataObject } from "../data/skills/skills-data.types";

export type TProps = {
   access: boolean;
   aboutSectionData: TAboutDataObject;
   skillsSectionData: TSkillsDataObject;
};
