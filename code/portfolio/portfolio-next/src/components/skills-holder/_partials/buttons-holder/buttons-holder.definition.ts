import React, { MouseEventHandler } from "react";

export type TButtonsHolderProps = {
   className?: string;
   addFunction?: MouseEventHandler<HTMLButtonElement> | undefined;
   deleteFunction: () => void;
   createButtons?: boolean;
};
