import { ReactNode } from "react";
import { Stream } from "stream";

export type TButtonProps = {
  className?: string;
  color?: string;
  children: ReactNode;
  onClick?:() => void
  type?:any
  id?: any;
  style?:any;
};
