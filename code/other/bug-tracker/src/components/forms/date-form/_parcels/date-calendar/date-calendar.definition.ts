import { Moment } from "moment";

export type TDateCalendarProps = {
   className?: string;
   valueSelectedF: (value: Moment) => void;
   prevMonth: Moment;
   nextMonth:Moment
};
