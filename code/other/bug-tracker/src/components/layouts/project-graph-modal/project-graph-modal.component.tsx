/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { TProjectGraphModalProps } from "./project-graph-modal.definition";
import * as S from "./project-graph-modal.style";
import { GlassBackground } from "../../glass-background/glass-background.component";
import { PieChartComponent } from "../../pie-chart/pie-chart.component";
import { Dropdown } from "../../dropdown/dropdown.component";

// Function
import { calculatePercentage, processFilter } from "./helper-functions";

// FAKE DATA
import { projectData } from "../../../fake-data/project-data";
export function ProjectGraphModal({ className }: TProjectGraphModalProps) {
  const [selectedProject, setSelectedProject] = useState("");
  const [showList, setShowList] = useState(false);
  const project = projectData.filter((item) => item.name == selectedProject);

  //* Graph values
  let oneHundredPercent = false;
  let todoPercentage = 0;
  let processPercentage = 0;
  let reviewPercentage = 0;
  let donePercentage = 0;
  const [HundredPercent, setOneHundredPercent] = useState(false);
  const [todoPercent, setTodoPercent] = useState(0);
  const [processPercent, setProcessPercent] = useState(0);
  const [reviewPercent, setReviewPercent] = useState(0);
  const [donePercent, setDonePercent] = useState(0);

  const projectSelected = (e: MouseEvent) => {
    const target = e.target as Element;
    if (target) setSelectedProject(target.innerHTML);
  };

  useEffect(() => {
    if (selectedProject.length > 0) setShowList(true);
  });

  project?.map((item) => {
    const ticket = item.tickets;
    const totalTicket = ticket.length;
    // filters
    const totalTodoTickets = processFilter(ticket, "todo");
    const totalProcessTickets = processFilter(ticket, "in-process");
    const totalReviewTickets = processFilter(ticket, "in-review");
    const totalDoneTickets = processFilter(ticket, "done");

    if (totalTicket == totalTodoTickets) oneHundredPercent = true;
    if (totalTicket == totalProcessTickets) oneHundredPercent = true;
    if (totalTicket == totalReviewTickets) oneHundredPercent = true;
    if (totalTicket == totalDoneTickets) oneHundredPercent = true;

    if (totalTodoTickets > 0)
      //* Calculations
      todoPercentage = calculatePercentage(totalTodoTickets / totalTicket);

    if (totalProcessTickets > 0)
      processPercentage = calculatePercentage(
        totalProcessTickets / totalTicket
      );

    if (totalReviewTickets)
      reviewPercentage = calculatePercentage(totalReviewTickets / totalTicket);

    if (totalDoneTickets > 0)
      donePercentage = calculatePercentage(totalDoneTickets / totalTicket);
  });

  useEffect(() => {
    setTodoPercent(todoPercentage);
    setProcessPercent(processPercentage);
    setReviewPercent(reviewPercentage);
    setDonePercent(donePercentage);
    setOneHundredPercent(oneHundredPercent);
  }, [selectedProject]);

  return (
    <S.Wrapper>
      <GlassBackground>
        <S.CenterContent>
          <S.ProjectGraphModalDiv className={className}>
            {/* this is the project dropdown */}
            <S.ProjectDropDownDiv>
              <Dropdown
                data={projectData}
                onClick={projectSelected}
                width="200px"
                listID="project-progress"
                title="Select A Project"
                options={[]}
              />
            </S.ProjectDropDownDiv>

            {/* this is the project graph */}
            <S.ProjectGraphDiv>
              {showList && (
                <PieChartComponent
                  todoPercent={todoPercent}
                  processPercentage={processPercent}
                  inReviewPercentage={reviewPercent}
                  donePercentage={donePercent}
                  percent={HundredPercent}
                />
              )}
              {!showList && <S.Text>Plies Select A Project</S.Text>}
            </S.ProjectGraphDiv>
          </S.ProjectGraphModalDiv>
        </S.CenterContent>
      </GlassBackground>
    </S.Wrapper>
  );
}
