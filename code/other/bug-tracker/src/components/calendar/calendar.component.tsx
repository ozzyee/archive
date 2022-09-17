import React from "react";
import { TCalendarProps } from "./calendar.definition";
import * as S from "./calendar.style";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function Calendar({ className, value, onChange }: TCalendarProps) {
   return (
      <S.CalendarDiv className={className}>
         <ReactCalendar onChange={onChange} value={value} />
      </S.CalendarDiv>
   );
}
