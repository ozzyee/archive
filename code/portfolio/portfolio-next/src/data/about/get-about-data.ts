import { getData } from "../../lib/fetcher_functions/get";
import { TAboutDataObject } from "./about-data.type";
const aboutUrl =
   "https://us-central1-portfolio2022-beb43.cloudfunctions.net/about_section/v1";

export const getAboutData = async () => {
   const aboutSectionData: TAboutDataObject = await getData(aboutUrl);

   return { aboutSectionData };
};
