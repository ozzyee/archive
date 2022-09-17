import React, { useState, useEffect, ReactElement } from "react";
import { TProjectCreateFormProps } from "./project-ticket-create-from.definition";
import * as S from "./project-ticket-create-from.style";
import { GlassBackground } from "../../glass-background/glass-background.component";
import { projectData } from "../../../fake-data/project-data";
import { Buttons } from "../../buttons/buttons.component";
import { Icons } from "../../icons/icons.component";

export function ProjectCreateForm({ className }: TProjectCreateFormProps) {
  const tickets = projectData[0].tickets;
  const [addBtn, setAddBtn] = useState("no-tickets");

  useEffect(() => {
    if (tickets.length > 0) {
      setAddBtn("has-tickets");
    }
  }, [tickets]);

  return (
    <S.ProjectCreateFormDiv className={className}>
      <GlassBackground>
        <S.FormWrapper>
          <S.TitleHolder>
            <S.Title>Add Tickets</S.Title>

            {addBtn == "has-tickets" && (
              <S.AddButtonHolder>
                <Icons Icon="add" />
              </S.AddButtonHolder>
            )}
          </S.TitleHolder>
          <S.Line />

          <S.TicketWrapper>
            <Tickets first={addBtn} />
          </S.TicketWrapper>
        </S.FormWrapper>
      </GlassBackground>
    </S.ProjectCreateFormDiv>
  );
}

type TTicketTypes = {
  first: string;
};

function Tickets({ first }: TTicketTypes): ReactElement | null {
  switch (first) {
    case "has-tickets":
      return <S.TicketHolder></S.TicketHolder>;
    case "no-tickets":
      return (
        <S.CenterAddButton>
          <Buttons Btn="add" />
        </S.CenterAddButton>
      );
    default:
      return null;
  }
}
