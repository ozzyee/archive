/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { TDateTimeSelectProps } from "./date-time-select.definition";
import * as S from "./date-time-select.style";

// COMPONENTS
import { DatePicker } from "../date-form/date-form.component";
import { Time } from "../time-form/time-form.component";

import moment, { Moment } from "moment";
import { ThemeProvider } from "styled-components";
import { CalendarPlus } from "@styled-icons/bootstrap/CalendarPlus";

export function DateTimeSelect({
   className,
   placeHolder,
   value
}: TDateTimeSelectProps) {
   const [hideCalender, setHideCalender] = useState(false);
   const [showTime, setShowTime] = useState(false);
   const [showCalender, setShowCalender] = useState("0");
   const [zIndex, setZIndex] = useState("-10");
   const [showForm, setShowForm] = useState("0px");

   const currentDate = moment().format("MMM Do YY");

   const [date, setDate] = useState("");
   const [time, setTime] = useState("");

   const style = {
      showCalender: showCalender,
      zIndex: zIndex,
      showForm: showForm,
   };

   useEffect(() => {
      if (showTime) {
         setShowCalender("1");
         setZIndex("1000");
      } else {
         setShowCalender("0");
         setZIndex("-10");
      }
   }, [showTime]);

   useEffect(() => {
      if (currentDate == date) {
         if (showForm == "295px") {
            enterDateTime();
         }
      }

      if (currentDate != date) {
         if (showForm == "295px") {
            enterDateTime();
         }
      }
   }, [date, time]);

   function openClock() {
      setHideCalender(true);
      setShowTime(true);
   }

   function closeClock() {
      setHideCalender(false);
      setShowTime(false);
   }

   function enterDateTime() {
      const target: any = document.getElementById("form-input");
      target.value = date + ",  " + " " + time;

      value(date + ",  " + " " + time)
   }

   function getDate(value: Moment) {
      const dateValue = moment(value).format("MMM Do YY");
      setDate(dateValue);
   }

   function getTime(time: string) {
      setTime(time);
   }

   function openForm() {
      if (showForm == "0px") {
         setShowForm("295px");
         enterDateTime();
      } else {
         setShowForm("0px");
      }
   }

   return (
      <ThemeProvider theme={style}>
         <S.FormInputHolder>
            <S.FormInput
               type="text"
               placeholder={placeHolder}
               onClick={openForm}
               id="form-input"
               autoComplete="off"
            />
         </S.FormInputHolder>

         <S.FormWrapper>
            <S.DateTimeSelectDiv className={className}>
               <S.GlassBackground>
                  <S.HeaderHolder>
                     <S.CalendarButtonHolder onClick={closeClock}>
                        <CalendarPlus className="cal-icon" />
                     </S.CalendarButtonHolder>
                  </S.HeaderHolder>

                  <DatePicker
                     onChange={getDate}
                     hideCalender={hideCalender}
                     onClick={openClock}
                  />
                  <Time showTime={showTime} getTime={getTime} />
               </S.GlassBackground>
            </S.DateTimeSelectDiv>
         </S.FormWrapper>
      </ThemeProvider>
   );
}
