import { ReactNode } from "react";

export type TSignInModelProps = {
   className?: string;
   children?: ReactNode;
   id?: string;
   type?: string;
};

export type TInputStyledProps = {
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TSignInInputsProps = TSignInModelProps & TInputStyledProps;

export type TLableStyledProps = {
   height: string;
   textSize: string;
};

export type TSignInProps = {
   email: string;
   password: string;
};
