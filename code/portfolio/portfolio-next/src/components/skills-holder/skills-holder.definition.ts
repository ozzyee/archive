export type TSkillsHolderProps = {
   className?: string;
   src?: string;
   alt?: string;
   text?: string;
   type?: string;
   createLayout?: boolean;
   placeholder?: string;
   addOnClick?: ({
      uploadedImg,
      skillsText,
   }: {
      uploadedImg: string;
      skillsText: string;
   }) => void | undefined;

   deleteOnClick: (event: number) => void;
   id: any;

   updateContent?:
      | (({
           uploadedImg,
           skillsText,
           id,
        }: {
           uploadedImg: string;
           skillsText: string;
           id: number;
        }) => void | undefined)
      | undefined;
};

export type TStyleOverlay = {
   opacity?: number;
   backgroundColor?: string;
};
