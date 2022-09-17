import React from "react";
import { TPriorityJobsLayoutProps } from "./priority-jobs-layout.definition";
import * as S from "./priority-jobs-layout.style";
import { GlassBackground } from "../../glass-background/glass-background.component";
import { Font } from "../../font/font.component";
import { Tickets } from "../../tickets/tickets.component";
import { TicketHolder } from "../../ticket-holder/ticket-holder.component";

export function PriorityJobsLayout({ className }: TPriorityJobsLayoutProps) {
   return (
      <S.PriorityJobsLayoutDiv className={className}>
         <GlassBackground>
            <S.TitleWrapper>
               <Font font="header"> Priority Jobs</Font>
            </S.TitleWrapper>

            <S.CenterContent>
               <S.LineBreak />
            </S.CenterContent>

            <S.CenterContent>
               <S.TicketInfoWrapper>
                  <Tickets
                     deadline={true}
                     status={true}
                     width="350px"
                     fontSize="14px"
                     titleCell="40%"
                     deadlineCell="40%"
                     progressCell="20%"
                     hideGlass={true}
                  />
               </S.TicketInfoWrapper>
            </S.CenterContent>

            <S.CenterContent>
               <S.TicketHolderWrapper>
                  <TicketHolder width="100%" height="150px">
                     <>
                        <Tickets
                           ticket="small-ticket"
                           height="40px"
                           deadline={true}
                           status={true}
                           width="100%"
                           fontSize="14px"
                           titleCell="40%"
                           deadlineCell="40%"
                           progressCell="20%"
                           titleInput="this is "
                           deadlineInput="22nd sept"
                           statusInput="process"
                           paddingLeft="0px"
                        />
                        <Tickets
                           ticket="small-ticket"
                           height="40px"
                           deadline={true}
                           status={true}
                           width="100%"
                           fontSize="14px"
                           titleCell="40%"
                           deadlineCell="40%"
                           progressCell="20%"
                           titleInput="this is "
                           deadlineInput="22nd sept"
                           statusInput="process"
                           paddingLeft="0px"
                        />
                        <Tickets
                           ticket="small-ticket"
                           height="40px"
                           deadline={true}
                           status={true}
                           width="100%"
                           fontSize="14px"
                           titleCell="40%"
                           deadlineCell="40%"
                           progressCell="20%"
                           titleInput="this is "
                           deadlineInput="22nd sept"
                           statusInput="process"
                           paddingLeft="0px"
                        />
                        <Tickets
                           ticket="small-ticket"
                           height="40px"
                           deadline={true}
                           status={true}
                           width="100%"
                           fontSize="14px"
                           titleCell="40%"
                           deadlineCell="40%"
                           progressCell="20%"
                           titleInput="this is "
                           deadlineInput="22nd sept"
                           statusInput="process"
                           paddingLeft="0px"
                        />
                     </>
                  </TicketHolder>
               </S.TicketHolderWrapper>
            </S.CenterContent>
         </GlassBackground>
      </S.PriorityJobsLayoutDiv>
   );
}
