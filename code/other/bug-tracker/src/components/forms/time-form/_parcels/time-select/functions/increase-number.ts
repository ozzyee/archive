export default function increaseNumber(maxTime: number, newTimeNum: number) {
  let newTime;

  // HOURS
  const hourTimeValue = <HTMLInputElement>document.getElementById("hour");
  const hourTimeValueNum = Number(hourTimeValue.value);
  const addHour = hourTimeValueNum + 1;
  const hourNumberToString = addHour.toString();

  // MINS
  const minutesTimeValue = (<HTMLInputElement>(
    document.getElementById("minutes")
  )).value;
  const minutesTimeValueNum = Number(minutesTimeValue);
  const addMin = minutesTimeValueNum + 1;
  const numberToString = addMin.toString();
  const numberLength = numberToString.length;

  // DAY VALUE
  const dayValue = <HTMLInputElement>document.getElementById("day-value");

  if (maxTime == 12) {
    if (hourTimeValueNum == 12) {
      newTime = "1";

      if (dayValue.innerHTML == "PM") {
        dayValue.innerHTML = "AM";
      } else if (dayValue.innerHTML == "AM") {
        dayValue.innerHTML = "PM";
      }
    } else {
      newTime = hourNumberToString;
    }
  }

  if (maxTime == 60) {
    if (minutesTimeValueNum == 59) {
      newTime = "00";

      if (hourTimeValueNum == 12) {
        hourTimeValue.value = "1";

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
        newTime = "0" + numberToString;
      } else {
        newTime = numberToString;
      }
    }
  }

  return newTime;
}
