import { put } from "../../lib/fetcher_functions/put";
import { TSkillsTypes } from "../../provider/content.provider.type";

export const saveSkillsData = async (data: TSkillsTypes | null) => {
   if (!data) return null;
   const { mainText, titleValue, _skillsWidgetData } = data;
   let message = "";

   try {
      const aboutUrl =
         "https://us-central1-portfolio2022-beb43.cloudfunctions.net/skills_section/v1";

      const res = await put(aboutUrl, {
         title: titleValue,
          mainText,
          skills: _skillsWidgetData,
      });

      if (res.status) message = "The data was saved successfully";
   } catch (err) {
      const error = err as Error;
      message = error.message;
   }
   return message;
};
