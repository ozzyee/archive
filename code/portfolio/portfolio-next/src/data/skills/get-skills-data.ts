import { getData } from "../../lib/fetcher_functions/get";
import { TSkillsData } from "./skills-data.types";

const skillsUrl =
   "https://us-central1-portfolio2022-beb43.cloudfunctions.net/skills_section/v1";

export const getSkillsData = async () => {
   const skillsSectionData: TSkillsData = await getData(skillsUrl);

   return { skillsSectionData };
};
