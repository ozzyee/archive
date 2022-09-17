/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { TDateCalendarProps } from "./date-calendar.definition";
import * as S from "./date-calendar.style";
import moment, { Moment } from "moment";
import buildCalender from "./build-calendar";
import dayStyle, { beforeToday } from "./calendar-style";

export function DateCalendar({
  className,
  valueSelectedF,
  prevMonth,
  nextMonth,
}: TDateCalendarProps) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalender(value));
    valueSelectedF(value);
  }, [value]);

  useEffect(() => {
    setValue(prevMonth);
  }, [prevMonth]);

  useEffect(() => {
    setValue(nextMonth);
  }, [nextMonth]);

  return (
    <S.DateCalendarDiv className={className}>
      {calendar.map((week: Moment[], key: number) => {

        return (
          <S.WeekGrid key={key}>
            {week.map((day: Moment, key: number) => {
              return (
                <S.DayHolder
                  onClick={() => !beforeToday(day) && setValue(day)}
                  key={key}
                >
                  <div className={dayStyle(day, value)}>{day.format("D")}</div>
                </S.DayHolder>
              );
            })}
          </S.WeekGrid>
        );
      })}
    </S.DateCalendarDiv>
  );
}
