import { Moment } from "moment";

export type THeaderProps = {
   className?: string;
   currentMonthNameF: () => {};
   currentYearF: () => {};
   previousMonthF: () => void;
   nextMonthF: () => void;
   value: Moment;
};
