import { put } from "../../lib/fetcher_functions/put";
import { TAboutInputTypes } from "../../provider/content.provider.type";

export const saveAboutData = async (data: TAboutInputTypes | null) => {
   if (!data) return null;
   const {
      titleValue,
      titleDescriptionValue,
      aboutMeTitleHeadline,
      aboutMeTitle,
      _mainText,
      _name,
      _email,
      placeOfWork,
      aboutImg,
   }: TAboutInputTypes = data;

   let message = "";
   try {
      const aboutUrl =
         "https://us-central1-portfolio2022-beb43.cloudfunctions.net/about_section/v1";

      const res = await put(aboutUrl, {
         title: titleValue,
         subTitle: titleDescriptionValue,
         mainContentTitle: aboutMeTitleHeadline,
         mainContentTitleDescription: aboutMeTitle,
         mainText: _mainText,
         name: _name,
         email: _email,
         homeTown: placeOfWork,
         cvDownloadUrl: "",
         imageUrl: aboutImg,
      });

      if (res.status) message = "The data was saved successfully";
   } catch (err) {
      const error = err as Error;
      message = error.message;
   }

   return message;
};
