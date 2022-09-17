import React from "react";
import { TDoneTicketsLayoutProps } from "./done-tickets-layout.definition";
import * as S from "../ticket-layout-style";
import { TicketHolder } from "../../../../components/ticket-holder/ticket-holder.component";
import { Tickets } from "../../../../components/tickets/tickets.component";

export function DoneTicketsLayout({ className }: TDoneTicketsLayoutProps) {
   return (
      <S.TicketsLayoutDiv className={className}>
         <S.TicketHolder>
            <Tickets
               width="100%"
               projectName="Project"
               titleCell="50%"
               groupeCell="40%"
               projectCell="40%"
               Project={true}
               groupe={true}
            />
         </S.TicketHolder>

         <TicketHolder width="100%" height="89%">
            <Tickets
               height="50px"
               ticket="big-ticket"
               projectCell="40%"
               titleCell="50%"
               groupeCell="40%"
               Project={true}
               groupe={true}
               // this is the text
               titleInput="this is a big ticket with a overflow text q"
               projectName="Bug Tracker v.1.1.1.2.3"
               inputGroupe="groupe1"
            />
         </TicketHolder>
      </S.TicketsLayoutDiv>
   );
}
