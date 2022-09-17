export default function decreesNumber(maxTime: number, newTimeNum: number) {
   let time;

   const hourTimeValue = <HTMLInputElement>document.getElementById("hour");
   const hourTimeValueNum = Number(hourTimeValue.value);
   const subtractHour = hourTimeValueNum - 1;
   const hourNumberToString = subtractHour.toString();

   // MINS
   const minutesTimeValue = <HTMLInputElement>(
      document.getElementById("minutes")
   );
   const minutesTimeValueNum = Number(minutesTimeValue.value);
   const subtract = minutesTimeValueNum - 1;
   const numberToString = subtract.toString();
   const numberLength = numberToString.length;

   // DAY VALUE
   const dayValue = <HTMLInputElement>document.getElementById("day-value");

   if (maxTime == 12) {
      if (hourTimeValueNum == 1) {
         time = "12";

         if (dayValue.innerHTML == "PM") {
            dayValue.innerHTML = "AM";
         } else if (dayValue.innerHTML == "AM") {
            dayValue.innerHTML = "PM";
         }
      } else {
         time = hourNumberToString;
      }
   }

   if (maxTime == 60) {
      if (minutesTimeValueNum == 0) {
         time = "59";

         if (hourTimeValueNum == 1) {
            hourTimeValue.value = "12";

            if (dayValue.innerHTML == "PM") {
               dayValue.innerHTML = "AM";
            } else if (dayValue.innerHTML == "AM") {
               dayValue.innerHTML = "PM";
            }
         } else {
            hourTimeValue.value = hourNumberToString;
         }
      } else {
         if (numberLength <= 1) {
            time = "0" + numberToString;
         } else {
            time = numberToString;
         }
      }
   }

   return time;
}
