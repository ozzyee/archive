export type TImageHolderProps = {
   className?: string;
   src: string | undefined;
   alt: string | undefined;
   canEdit: boolean;
   createLayout?: boolean;
   onUpload: (evt: string) => void;
};
