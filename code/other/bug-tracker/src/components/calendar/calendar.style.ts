import styled from "styled-components";
import Colors from "../../configs/colors.json";
import Fonts from "../../configs/fonts.json";

export const CalendarDiv = styled("div")`
   width: 100%;
   height: 100%;
   margin-top: auto;

   .react-calendar {
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 20px;

      background-color: transparent;
      border: 1px solid transparent;
   }
   /* this is the header  */
   .react-calendar__navigation {
      height: 35px;
   }

   /* these are the dates  */
   .react-calendar__tile {
      width: 20px;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
   }

   .react-calendar__month-view__days__day {
      font-size: 12px;
      color: ${Colors.primary};
      font-family: ${Fonts.primary};
   }

   /* Arrows */
   .react-calendar__navigation__prev2-button {
      border: 2px solid green;
      display: none;
   }

   .react-calendar__navigation__next2-button {
      display: none;
   }

   .react-calendar__month-view__weekdays__weekday abbr {
      font-size: 10px;
      color: ${Colors.primary};
      font-family: ${Fonts.primary};
   }

   .react-calendar__navigation__label {
      color: ${Colors.primary};
      font-family: ${Fonts.primary};
   }

   .react-calendar__navigation__arrow {
      color: ${Colors.primary};
      font-size: 16px;
   }

   .react-calendar__tile--now {
      color: ${Colors.offsetWhite};
      background-color: transparent;
      border-radius: 100%;
   }

   .react-calendar__tile--active {
      color: ${Colors.offsetWhite};
      background-color: ${Colors.primary};
      border-radius: 100%;
      border: 1px solid ${Colors.offsetWhite};
   }

   .react-calendar__month-view {
      margin-top: -15px;
      cursor: default;
   }

   .react-calendar__tile:enabled:hover,
   .react-calendar__tile:enabled:focus {
      background-color: transparent;
      border: 1px solid ${Colors.offsetWhite};
      border-radius: 100px;
   }

   .react-calendar__navigation button:enabled:hover,
   .react-calendar__navigation button:enabled:focus {
      background-color: transparent;
      border: 1px solid ${Colors.primary};
      border-radius: 20px;
   }

   .react-calendar__year-view__months__month {
      color: ${Colors.primary};
   }

   .CXhdH {
      border: 2px solid red;
   }
`;
