import React from "react";
import { TFixedTicketsLayoutProps } from "./fixed-tickets-layout.definition";
import * as S from "../ticket-layout-style";
import { TicketHolder } from "../../../../components/ticket-holder/ticket-holder.component";
import { Tickets } from "../../../../components/tickets/tickets.component";

export function FixedTicketsLayout({ className }: TFixedTicketsLayoutProps) {
   return (
      <S.TicketsLayoutDiv className={className}>
         <S.TicketHolder>
            <Tickets
               titleCell="39%"
               Project={true}
               projectName="Project"
               projectCell="35%"
               groupe={true}
               groupeCell="20%"
               status={true}
               statusCell="20%"
               progress={true}
               progressCell="20%"
               width="100%"
            />
         </S.TicketHolder>

         <TicketHolder width="100%" height="89%">
            <Tickets
               ticket="big-ticket"
               height="50px"
               projectCell="35%"
               titleCell="35%"
               Project={true}
               groupe={true}
               groupeCell="20%"
               status={true}
               statusCell="20%"
               progress={true}
               progressCell="20%"
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
