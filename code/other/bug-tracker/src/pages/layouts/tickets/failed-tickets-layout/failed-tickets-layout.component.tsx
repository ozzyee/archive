import React from "react";
import { TFailedTicketsLayoutProps } from "./failed-tickets-layout.definition";
import { TicketHolder } from "../../../../components/ticket-holder/ticket-holder.component";
import * as S from "../ticket-layout-style";
import { Tickets } from "../../../../components/tickets/tickets.component";

export function FailedTicketsLayout({ className }: TFailedTicketsLayoutProps) {
   return (
      <S.TicketsLayoutDiv className={className}>
         <S.TicketHolder>
            <Tickets
               titleCell="35%"
               Project={true}
               projectName="Project"
               projectCell="20%"
               groupe={true}
               groupeCell="20%"
               deadline={true}
               deadlineCell="15%"
               status={true}
               statusCell="15%"
               progress={true}
               progressCell="15%"
               width="100%"
            />
         </S.TicketHolder>

         <TicketHolder width="100%" height="89%">
            <Tickets
               ticket="big-ticket"
               height="50px"
               projectCell="20%"
               titleCell="35%"
               Project={true}
               groupe={true}
               groupeCell="20%"
               deadline={true}
               deadlineCell="15%"
               status={true}
               statusCell="15%"
               progress={true}
               progressCell="15%"
               // this is the text
               titleInput="this is a big ticket with a overflow text q"
               projectName="Bug Tracker v.1.1.1.2.3"
               inputGroupe="groupe1"
               deadlineInput="22nd sept"
               statusInput="todo"
               progressInput={90}
            />
         </TicketHolder>
      </S.TicketsLayoutDiv>
   );
}
