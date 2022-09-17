import styled from "styled-components";
import Colors from "../../../../../configs/colors.json";

export const TimeSelectDiv = styled("div")`
   width: 90%;
   height: 80%;
`;

export const TimeHolder = styled("div")`
   width: 70px;
   height: 100%;
   float: left;

   display: flex;
   flex-direction: column;

   margin-right: 6px;
`;

export const DayOfTimeHolder = styled("div")`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
`;

export const TimeSelect = styled("div")`
   width: 100%;
   height: 40px;
   border-radius: 10px;
   background-color: ${Colors.primary};

   cursor: pointer;
   user-select: none;

   display: flex;
   align-items: center;
   justify-content: center;

   :active {
      transform: scale(0.96);
   }

   :hover {
      border: 1px solid white;
   }

   display: flex;
   align-items: center;
   justify-content: center;

   color: white;
   font-size: 13px;
`;

export const ArrowHolder = styled("div")`
   height: 33%;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;

   #icon {
      height: 35px;
      color: ${Colors.primary};
   }
`;

export const Time = styled("input")`
   width: 60%;
   border-radius: 5px;
   height: 33%;
   text-align: center;

   margin: auto;

   color: ${Colors.primary};
   font-weight: bold;

   background-color: transparent;
   border: 2px solid transparent;

   transition: border 30ms ease-in-out;

   display: flex;
   align-items: center;
   justify-content: center;

   &:hover {
      border: 2px solid ${Colors.primary};
   }
`;

export const TimeSplitter = styled("div")`
   width: 28px;
   height: 100%;
   float: left;

   display: flex;
   align-items: center;
   justify-content: center;
`;

export const TimeOfDay = styled("div")`
   width: 50px;
   height: 100%;
   float: right;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 13px;

   cursor: pointer;
   user-select: none;

   .time {
      width: 90%;
      height: 30px;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;

      background-color: ${Colors.primary};
      color: white;
   }
`;
