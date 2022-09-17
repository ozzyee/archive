import React from "react";
import { TInboxLayoutProps } from "./inbox-layout.definition";
import * as S from "./inbox-layout.style";
import { GlassBackground } from "../../glass-background/glass-background.component";
import { Font } from "../../font/font.component";
import { TicketHolder } from "../../ticket-holder/ticket-holder.component";
import { Tickets } from "../../tickets/tickets.component";
import { Compose } from "@styled-icons/fluentui-system-filled/Compose";

export function InboxLayout({ className }: TInboxLayoutProps) {
  return (
    <S.InboxLayoutDiv className={className}>
      <GlassBackground>
        <S.TitleWrapper>
          <Font font="header">Inbox</Font>
          <S.ComposeBtnHolder>
            <Compose className="compose-icon" />
          </S.ComposeBtnHolder>
        </S.TitleWrapper>

        <S.MessageWrapper>
          <TicketHolder width="100%" height="100%">
            <Tickets
              width="100%"
              ticket="message"
              from="Ozzy Duck"
              message="please sort this logo out as it has no color"
            />
            <br />
            <Tickets
              width="100%"
              ticket="message"
              from="Ozzy Duck"
              message="please sort this logo out as it has no color"
            />
          </TicketHolder>
        </S.MessageWrapper>
      </GlassBackground>
    </S.InboxLayoutDiv>
  );
}
