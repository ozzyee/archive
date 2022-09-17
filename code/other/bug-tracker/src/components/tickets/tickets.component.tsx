import React from "react";
import { TTicketsProps } from "./tickets.definition";
import * as S from "./tickets.style";
import { GlassBackground } from "../glass-background/glass-background.component";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { ProgressBar } from "../progress-bar/progress-bar.component";
import { Icons } from "../icons/icons.component";

export function Tickets({
   groupe,
   deadline,
   status,
   progress,
   width,
   fontSize,
   titleCell,
   deadlineCell,
   progressCell,
   hideGlass,
   groupeCell,
   statusCell,
   startTime,
   timeCell,
   endTime,
   height,
   titleInput,
   inputGroupe,
   deadlineInput,
   statusInput,
   progressInput,
   startTimeInput,
   endTimeInput,
   ticket,
   marginLeft,
   messageTitle,
   from,
   message,
   paddingLeft,
   projectName,
   Project,
   projectCell,
}: TTicketsProps) {
   const [newHeight, setHeight] = useState("30px");
   const [title, setTitle] = useState("Title");
   const [newGroupe, setGroupe] = useState("Groupe");
   const [newDeadline, setDeadline] = useState("Dead Line");
   const [newStatus, setStatus] = useState(<>Status</>);
   const [newProgress, setProgress] = useState(<>Progress</>);
   const [newStartTime, setStartTime] = useState("Start");
   const [newEndTime, setEndTime] = useState("End");
   const [showMoreTitle, setShowMore] = useState(false);
   const [newMarginLeft, setMarginLeft] = useState("0px");
   const [inboxTicket, setInboxTicket] = useState(false);
   const [padding, setPadding] = useState("8px");
   const [projectCellSize, setProjectCell] = useState("30%");

   useEffect(() => {
      if (projectCell) setProjectCell(projectCell);
   }, [projectCell]);

   useEffect(() => {
      if (paddingLeft) setPadding(paddingLeft);
   }, [paddingLeft]);

   useEffect(() => {
      if (messageTitle) setInboxTicket(messageTitle);
   }, [messageTitle]);

   useEffect(() => {
      if (marginLeft) setMarginLeft(marginLeft);
   }, [marginLeft]);

   useEffect(() => {
      if (progressInput) {
         setProgress(<ProgressBar percentageDone={progressInput} />);
      }
   }, [progressInput]);

   useEffect(() => {
      if (titleInput) setTitle(titleInput);
   }, [titleInput]);

   useEffect(() => {
      if (height) setHeight(height);
   }, [height]);

   useEffect(() => {
      if (inputGroupe) setGroupe(inputGroupe);
   }, [inputGroupe]);

   useEffect(() => {
      if (deadlineInput) setDeadline(deadlineInput);
   }, [deadlineInput]);

   useEffect(() => {
      if (statusInput) {
         setStatus(<Icons Icon="process" status={statusInput} />);
      }
   }, [statusInput]);

   useEffect(() => {
      if (startTimeInput) setStartTime(startTimeInput);
   }, [startTimeInput]);

   useEffect(() => {
      if (endTimeInput) setEndTime(endTimeInput);
   }, [endTimeInput]);

   const theme = {
      width: width,
      fontSize: fontSize,
      titleCell: titleCell,
      groupeCell: groupeCell,
      deadlineCell: deadlineCell,
      statusCell: statusCell,
      progressCell: progressCell,
      timeCell: timeCell,
      height: newHeight,
      newMarginLeft: newMarginLeft,
      padding: padding,
      projectCellSize: projectCellSize,
   };

   const showMore = () => {
      if (ticket == "small-ticket") {
         if (title.length >= 24) setShowMore(true);
      }

      if (ticket == "time-ticket") {
         if (title.length >= 28) setShowMore(true);
      }

      if (ticket == "big-ticket") {
         if (title.length >= 43) setShowMore(true);
      }
   };

   const showLess = () => {
      setShowMore(false);
   };

   if (ticket == "message") {
      return (
         <ThemeProvider theme={theme}>
            <S.MessageWrapper>
               <GlassBackground>
                  <S.MessageTitleWrapper>
                     <S.Text>From :</S.Text>
                     <S.Text className="small">{from}</S.Text>
                  </S.MessageTitleWrapper>

                  <S.LineBreakWrapper>
                     <div className="line" />
                  </S.LineBreakWrapper>

                  <S.MessageTextWrapper>{message}</S.MessageTextWrapper>
               </GlassBackground>
            </S.MessageWrapper>
         </ThemeProvider>
      );
   }

   return (
      <ThemeProvider theme={theme}>
         <S.InfoTicketHolder>
            <GlassBackground
               className={`position-glass ${hideGlass && "show-glass"}`}
            />

            <S.CenterContent>
               {!inboxTicket && (
                  <S.InfoTitle
                     onMouseEnter={showMore}
                     onMouseLeave={showLess}
                     className={`${showMoreTitle && "show-more-title"}`}
                  >
                     <p className="info-text">{title}</p>
                  </S.InfoTitle>
               )}

               {Project && (
                  <S.ProjectTitle>
                     <div className="title-text">{projectName}</div>
                  </S.ProjectTitle>
               )}
               {startTime && <S.TimeInfo>{newStartTime}</S.TimeInfo>}
               {endTime && <S.TimeInfo>{newEndTime}</S.TimeInfo>}
               {groupe && <S.InfoGroupe>{newGroupe}</S.InfoGroupe>}
               {deadline && <S.InfoDeadLine>{newDeadline}</S.InfoDeadLine>}
               {status && <S.InfoStatus>{newStatus}</S.InfoStatus>}
               {progress && <S.InfoProgress>{newProgress}</S.InfoProgress>}
            </S.CenterContent>
         </S.InfoTicketHolder>
      </ThemeProvider>
   );
}
