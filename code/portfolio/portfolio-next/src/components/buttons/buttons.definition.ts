import react, { MouseEventHandler } from "react";

export type TButtonsProps = {
   className?: string;
   children?: react.ReactChild;
   transparent?: boolean;
   type?: string;

   id?: string | undefined;
   iconType?: string;
   onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};
