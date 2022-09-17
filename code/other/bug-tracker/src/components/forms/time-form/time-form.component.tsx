/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { TTimeProps } from "./time-form.definition";
import * as S from "./time-form.style";
import { TimeSelect } from "./_parcels/time-select/time-select.component";
import moment from "moment";
import { ThemeProvider } from "styled-components";

export function Time({ className, showTime, getTime }: TTimeProps) {
   const currentTime = moment().format("LT").split(":");
   const currentHour = currentTime[0];
   const currentMinute = currentTime[1].split(" ")[0];
   const currentTimeState = currentTime[1].split(" ")[1];
   const [marginHeight, setMarginHeight] = useState("0px");
   const [zIndex, setZIndex] = useState("0");

   const [hour, setHour] = useState("");
   const [minutes, setMinutes] = useState("");
   const [timeOfDay, setTimeOfDay] = useState("");

   const time = hour + ":" + minutes + " " + timeOfDay;

   const style = {
      marginHeight: marginHeight,
      zIndex: zIndex,
   };

   useEffect(() => {
      if (showTime) {
         setMarginHeight("-250px");
         setZIndex("1000");
      } else {
         setMarginHeight("0px");
         setZIndex("0");
      }
   }, [showTime]);

   useEffect(() => {
      getTime(time);
   }, [time]);

   return (
      <ThemeProvider theme={style}>
         <S.TimeDiv className={className}>
            <S.wrapperDiv>
               <S.TimeWrapper>
                  <S.DisplayFlex>
                     <TimeSelect
                        id="hour"
                        maxTime={12}
                        initialTime={currentHour}
                        value={(hour: string) => {
                           setHour(hour);
                        }}
                     />

                     <TimeSelect
                        id="minutes"
                        maxTime={60}
                        initialTime={currentMinute}
                        value={(minutes: string) => {
                           setMinutes(minutes);
                        }}
                     />

                     <TimeSelect
                        timeOfDay="am/pm"
                        currentTimeState={currentTimeState}
                        value={(_: string, timeSelect: string) => {
                           setTimeOfDay(timeSelect);
                        }}
                     />
                  </S.DisplayFlex>
               </S.TimeWrapper>
            </S.wrapperDiv>
         </S.TimeDiv>
      </ThemeProvider>
   );
}
