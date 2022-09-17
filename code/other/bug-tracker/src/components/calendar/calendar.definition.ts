import { SetStateAction } from "react";
import { Dispatch } from "react";

export type TCalendarProps = {
   className?: string;
   value: Date;
   onChange: Dispatch<SetStateAction<Date>>;
};
