import React, { useState } from "react";
import { TScheduleFormProps } from "./schedule-form.definition";
import * as S from "./schedule-form.style";
import { GlassBackground } from "../../glass-background/glass-background.component";
import { Font } from "../../font/font.component";

import { DateTimeSelect } from "../date-time-select/date-time-select.component";
import { Buttons } from "../../buttons/buttons.component";

export function ScheduleForm({ className }: TScheduleFormProps) {
   const [startTime, setStartTime] = useState("");
   const [endTime, setEndTime] = useState("");

   return (
      <S.ScheduleFormDiv className={className}>
         <GlassBackground>
            {/* Header */}
            <S.HeaderHolder>
               <Font font="header">Add Event</Font>
            </S.HeaderHolder>

            {/*Task Title */}
            <S.FormHolder>
               <S.FormInput type="text" placeholder="Event Title" />
            </S.FormHolder>

            {/* Start Time */}
            <S.FormHolder>
               <DateTimeSelect
                  placeHolder="Enter Start Time"
                  value={(value: string) => {
                     setStartTime(value);
                  }}
               />
            </S.FormHolder>

            {/* End Time */}
            <S.FormHolder>
               <DateTimeSelect
                  placeHolder="Enter End Time"
                  value={(value: string) => {
                     setEndTime(value);
                  }}
               />
            </S.FormHolder>

            {/* Submit Button */}
            <S.FormHolder>
               <Buttons
                  Btn="formButton"
                  text="Submit Button"
                  width="250px"
                  height="30px"
               />
            </S.FormHolder>
         </GlassBackground>
      </S.ScheduleFormDiv>
   );
}
