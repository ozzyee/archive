import react, { MouseEventHandler } from "react";

export type TTextProps = {
   className?: string;
   child?: react.ReactChild;
   children?: react.ReactNode;
   color?: string;
   onChange?: any;
   fontSize?: string;
   type?: string | undefined;
   margin?: string;
   padding?: string;
   fontWeight?: string;
   textAlign?: string;
   editable?: boolean | undefined;
   width?: string;
   placeholder?: string;
   height?: string;
};
