export type TAboutData = {
   id: string;
   subTitle: string;
   email: string;
   homeTown: string;
   mainContentTitle: string;
   imageUrl: string;
   mainText: string;
   cvDownloadUrl: string;
   mainContentTitleDescription: string;
   title: string;
   name: string;
};

export type TAboutDataObject = {
   status: string;
   message: string;
   _data: TAboutData;
};

