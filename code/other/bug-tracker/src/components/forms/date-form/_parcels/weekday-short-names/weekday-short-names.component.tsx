import React from "react";
import { TWeekdayShortNamesProps } from "./weekday-short-names.definition";
import * as S from "./weekday-short-names.style";
import moment from "moment";

export function WeekdayShortNames({ className }: TWeekdayShortNamesProps) {
   const weekDayShort = moment.weekdaysShort();

   return (
      <S.WeekdayShortNamesDiv className={className}>
         {weekDayShort.map((day) => {
            return (
               <S.DayName key={day} className="week-day">
                  {day}
               </S.DayName>
            );
         })}
      </S.WeekdayShortNamesDiv>
   );
}
