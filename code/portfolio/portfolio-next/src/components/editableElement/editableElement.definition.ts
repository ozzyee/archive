import { ReactNode } from "react";

export type TEditableElementProps = {
   className?: string;
   onChange?: any;
   children: ReactNode;
   canEdit?: boolean;
};
