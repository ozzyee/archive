import { FocusEvent } from "react";

export default function timeOnBlur(
   ev: FocusEvent<HTMLInputElement>,
   maxTime: number,
   initialTime: string | undefined
) {
   let time;
   const event = ev.target.value;
   const valueToNum = Number(event);
   const valueChange = event.split("");
   const valueChangeLength = valueChange.length;

   //Number caricature's
   const firstChar = valueChange[0];
   const secondChar = valueChange[1];

   if (maxTime == 12) {
      if (valueChangeLength >= 2) {
         if (firstChar == "0") {
            time = secondChar;
         }
      }

      if (valueChangeLength >= 1) {
         if (firstChar == "0") time = "1";
      }

      if (valueToNum >= 13) {
         time = secondChar;
      }

      if (event == "") {
         time = initialTime;
      }
   }

   if (maxTime == 60) {
      if (valueChangeLength >= 1) {
         if (valueToNum < 10) {
            time = "0" + firstChar;
         }

         if (valueToNum >= 10) {
            time = firstChar + secondChar;
         }
      }

      if (valueChangeLength == 1) {
         if (firstChar == "0") {
            ev.target.value = "00";
         }
      }

      if (valueToNum >= 60) {
         time = "0" + secondChar;
      }

      if (valueToNum <= 0) {
         time = event;
      }

      if (event == "") {
         time = initialTime;
      }
   }
   // return time;
}
