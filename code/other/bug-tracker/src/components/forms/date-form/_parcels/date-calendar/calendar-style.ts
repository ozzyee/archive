import { Moment } from "moment";

function isSelected(value: Moment, day: Moment) {
   return value.isSame(day, "day");
}

export function beforeToday(day: Moment) {
   return day.isBefore(new Date(), "day");
}

function isToday(day: Moment) {
   return day.isSame(new Date(), "days");
}

export default function dayStyle(day: Moment, value: Moment) {
   if (beforeToday(day)) return "before";
   if (isSelected(day, value)) return "selected";
   if (isToday(day)) return "today";
   return "";
}
