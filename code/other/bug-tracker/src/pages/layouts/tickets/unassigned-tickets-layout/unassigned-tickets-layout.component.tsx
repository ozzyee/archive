import React from "react";
import { TUnassignedTicketsLayoutProps } from "./unassigned-tickets-layout.definition";
import * as S from "../ticket-layout-style";
import { TicketHolder } from "../../../../components/ticket-holder/ticket-holder.component";
import { Tickets } from "../../../../components/tickets/tickets.component";

export function UnassignedTicketsLayout({
   className,
}: TUnassignedTicketsLayoutProps) {
   return (
      <S.TicketsLayoutDiv className={className}>
         <S.TicketHolder>
            <Tickets
               projectName="Project"
               width="100%"
               titleCell="50%"
               deadlineCell="25%"
               projectCell="25%"
               Project={true}
               deadline={true}
            />
         </S.TicketHolder>

         <TicketHolder width="100%" height="89%">
            <Tickets
               height="50px"
               
               ticket="big-ticket"
               
               Project={true}
               deadline={true}

               titleCell="50%"
               projectCell="25%"
               deadlineCell="25%"

               // this is the text
               titleInput="this is a big ticket with a overflow text q"
               projectName="Bug Tracker v.1.1.1.2.3"
               deadlineInput="22nd sept"
            />
         </TicketHolder>
      </S.TicketsLayoutDiv>
   );
}
