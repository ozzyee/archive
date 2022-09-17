import { Moment } from "moment";

export type TDateTimePickerProps = {
   className?: string;
   onClick: () => void;
   hideCalender: boolean;
   onChange: (value: Moment) => void;
};
