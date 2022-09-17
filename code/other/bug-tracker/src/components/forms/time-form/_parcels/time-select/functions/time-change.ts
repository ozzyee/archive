import { ChangeEvent } from "react";

export default function timeChange(
   ev: ChangeEvent<HTMLInputElement>,
   maxTime: number,
   isNum: boolean
) {
   let input = ev.target.value;
   const value = <HTMLInputElement>(<unknown>ev.target);
   const valueToNum = Number(value.value);
   const valueChange = input.split("");

   // Numbers
   const firstNum = valueChange[0];
   const secondNum = valueChange[1];

   // IF THE INPUT IS A LETTER THIS IF STATEMENT WILL FIRE OFF
   if (!isNum) {
      if (input.length <= 1) {
         input = "";
      }

      if (input.length <= 2) {
         const asciiCar = secondNum.charCodeAt(0);
         if (asciiCar > 31 && (asciiCar < 48 || asciiCar > 57)) {
            if (maxTime == 12) {
               input = firstNum;
            }

            if (maxTime == 60) {
               input = firstNum;
            }
         }
      }
   }

   if (input.length >= 2) {
      ev.target.select();
      input = firstNum + secondNum;
   }

   if (maxTime == 12) {
      if (valueToNum >= 13) {
         input = secondNum;
      }
   }

   if (maxTime == 60) {
      if (valueToNum >= 60) {
         input = "0" + secondNum;
      }
   }

   return input;
}
