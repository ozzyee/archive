import styled from "styled-components";

export const PageWrapper = styled("div")`
   height: 659px;

   position: fixed;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const HalfOfPage = styled("div")`
   width: 85vw;
   height: 49%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const SchedularHolder = styled("div")`
   width: 75%;
   height: 330px;

   padding: 18px;
   padding-left: 0px;

   position: relative;
   float: left;
`;

export const UserModelHolder = styled("div")`
   height: 100%;
   width: 25%;

   display: flex;
   align-items: center;
   justify-content: right;
   padding-left: 20px;
`;

export const SmallBottomComponent = styled("div")`
   width: 30%;
   height: 100%;
   padding-right: 20px;

   display: flex;
   align-items: center;
`;

export const PriorityJobsHolder = styled("div")`
   height: 100%;
   width: 40%;
`;

export const CenterContentBottom = styled("div")`
   width: 100%;
   height: 100%;

   padding-left: 20px;

   display: flex;
   align-items: center;
`;
