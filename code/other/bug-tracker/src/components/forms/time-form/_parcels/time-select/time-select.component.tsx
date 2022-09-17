/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { TTimeSelectProps } from "./time-select.definition";
import * as S from "./time-select.style";

// ICONS
import { ArrowIosUpwardOutline } from "@styled-icons/evaicons-outline/ArrowIosUpwardOutline";
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline";

// Functions
import increaseNumber from "./functions/increase-number";
import decreesNumber from "./functions/decrees-number";
import timeChange from "./functions/time-change";

export function TimeSelect({
  className,
  initialTime,
  maxTime,
  id,
  timeOfDay,
  currentTimeState,
  value,
}: TTimeSelectProps) {
  const [newTime, setNewTime] = useState(initialTime);
  const [isNum, setIsNum] = useState(false);
  const [timeSelect, setTimeSelect] = useState(currentTimeState);
  const newTimeNum = Number(newTime);
  const mxTime = maxTime || 0;

  useEffect(() => {
    if (newTime || timeSelect) {
      getValue();
    }
  }, [newTime, timeSelect]);

  function getValue() {
    value(newTime, timeSelect);
  }

  function keyValue(ev: any) {
    // This is ASCII Numbers
    var charCode = ev.which ? ev.which : ev.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      setIsNum(false);
    } else {
      setIsNum(true);
    }
  }

  // TODO fix this this can be done as a turnery
  function changeTimeOfDay() {
    if (timeSelect == "AM") {
      setTimeSelect("PM");
    }
    if (timeSelect == "PM") {
      setTimeSelect("AM");
    }
  }

  if (timeOfDay == "am/pm") {
    return (
      <S.TimeSelectDiv className={className}>
        <S.TimeHolder>
          <S.DayOfTimeHolder>
            <S.TimeSelect id="day-value" onClick={changeTimeOfDay}>
              {timeSelect}
            </S.TimeSelect>
          </S.DayOfTimeHolder>
        </S.TimeHolder>
      </S.TimeSelectDiv>
    );
  }

  return (
    <S.TimeSelectDiv className={className}>
      <S.TimeHolder>
        <S.ArrowHolder
          onClick={() => {
            setNewTime(increaseNumber(mxTime, newTimeNum));
          }}
        >
          <ArrowIosUpwardOutline id="icon" />
        </S.ArrowHolder>

        <S.Time
          type="text"
          value={newTime}
          onChange={(ev) => {
            setNewTime(timeChange(ev, mxTime, isNum));
          }}
          id={id}
          onClick={(e: any) => {
            e?.target.select();
          }}
          autoComplete="off"
          onKeyPress={keyValue}
        />

        <S.ArrowHolder
          onClick={() => {
            setNewTime(decreesNumber(mxTime, newTimeNum));
          }}
        >
          <ArrowIosDownwardOutline id="icon" />
        </S.ArrowHolder>
      </S.TimeHolder>
    </S.TimeSelectDiv>
  );
}
