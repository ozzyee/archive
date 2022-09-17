import React, { useEffect, useState } from "react";
import { TDateTimePickerProps } from "./date-form.definition";
import * as S from "./date-form.style";
import moment, { Moment } from "moment";

import { Header } from "./_parcels/header/header.component";
import { WeekdayShortNames } from "./_parcels/weekday-short-names/weekday-short-names.component";
import { DateCalendar } from "./_parcels/date-calendar/date-calendar.component";
import { Buttons } from "../../buttons/buttons.component";

import { Clock } from "@styled-icons/bootstrap/Clock";
import { ThemeProvider } from "styled-components";

export function DatePicker({
   className,
   onClick,
   hideCalender,
   onChange,
}: TDateTimePickerProps) {
   const [value, setValue] = useState(moment);
   const [prevMonth, setPrevMonth] = useState(value);
   const [nextMonth, setNextMonth] = useState(value);

   const [opacity, setOpacity] = useState("1");
   const [hide, setHide] = useState("block");
   const [animateCal, setAnimateCal] = useState(false);

   const style = {
      opacity: opacity,
      hide: hide,
   };

   useEffect(() => {
      if (hideCalender) {
         setAnimateCal(false);
         setOpacity("0");
         setTimeout(() => {
            setHide("none");
         }, 300);
      } else {
         setOpacity("1");
         setHide("block");
         setAnimateCal(true);
      }
   }, [hideCalender]);

   function valueSelectedF(value: Moment) {
      setValue(value);
      onChange(value);
   }

   function currentMonthNameF() {
      return value.format("MMMM");
   }

   function currentYearF() {
      return value.format("YYYY");
   }

   function previousMonthF() {
      setPrevMonth(value.clone().subtract(1, "month"));
   }

   function nextMonthF() {
      setNextMonth(value.clone().add(1, "month"));
   }

   return (
      <ThemeProvider theme={style}>
         <S.DateTimePickerDiv className={className}>
            <Header
               currentMonthNameF={currentMonthNameF}
               currentYearF={currentYearF}
               previousMonthF={previousMonthF}
               nextMonthF={nextMonthF}
               value={value}
            />

            <S.DateTimeHolder>
               <S.DateHolder
                  className={`${
                     animateCal ? "scale-cal-up" : "scale-cal-down"
                  }`}
               >
                  <WeekdayShortNames />

                  <DateCalendar
                     valueSelectedF={valueSelectedF}
                     prevMonth={prevMonth}
                     nextMonth={nextMonth}
                  />
               </S.DateHolder>
            </S.DateTimeHolder>

            <S.TimeButtonHolder>
               <Buttons
                  Btn="timeFormBtn"
                  width="100%"
                  height="30px"
                  text={<Clock className="icon" />}
                  onClick={onClick}
               />
            </S.TimeButtonHolder>
         </S.DateTimePickerDiv>
      </ThemeProvider>
   );
}
