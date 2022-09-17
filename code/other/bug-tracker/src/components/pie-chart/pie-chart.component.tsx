import React from "react";
import { TPieChartProps } from "./pie-chart.definition";
import * as S from "./pie-chart.style";
import Colors from "../../configs/colors.json";
import { PieChart } from "react-minimal-pie-chart";
import { useState } from "react";
import { useEffect } from "react";

export function PieChartComponent({
  className,
  todoPercent,
  processPercentage,
  inReviewPercentage,
  donePercentage,
  percent,
}: TPieChartProps) {
  const [title, setTitle] = useState("Select a segment");
  const [percentage, setPercentage] = useState("");

  useEffect(() => {
    if (
      !todoPercent &&
      !processPercentage &&
      !inReviewPercentage &&
      !donePercentage
    ) {
      setTitle("please create ticket's");
      setPercentage("to generate a pie chart");
    }

    if (
      todoPercent ||
      processPercentage ||
      inReviewPercentage ||
      donePercentage
    ) {
      setTitle("Select a segment");
      setPercentage("");
    }
  }, [todoPercent, processPercentage, inReviewPercentage, donePercentage]);

  const mouseOverSegment = (e: any) => {
    // ! fix this any type open this in storybook
    const targetCell = e.target.attributes.stroke.nodeValue;

    if (percent) {
      setTitle("Todo");
      setPercentage("100%");
    } else {
      if (targetCell == Colors.todo) {
        setTitle("Todo");
        setPercentage(todoPercent + "%");
      }
    }

    if (percent) {
      setTitle("In Process");
      setPercentage("100%");
    } else {
      if (targetCell == Colors.process) {
        setTitle("In Process");
        setPercentage(processPercentage + "%");
      }
    }

    if (percent) {
      setTitle("In Review");
      setPercentage("100%");
    } else {
      if (targetCell == Colors.review) {
        setTitle("In Review");
        setPercentage(inReviewPercentage + "%");
      }
    }
    if (percent) {
      setTitle("Done");
      setPercentage("100%");
    } else {
      if (targetCell == Colors.done) {
        setTitle("Done");
        setPercentage(donePercentage + "%");
      }
    }
  };

  const resetText = () => {
    setTitle("Select a segment");
    setPercentage("");
  };

  const data = [
    { value: todoPercent, color: Colors.todo },
    { value: processPercentage, color: Colors.process },
    { value: inReviewPercentage, color: Colors.review },
    { value: donePercentage, color: Colors.done },
  ];

  return (
    <S.PieChartDiv className={className}>
      <S.PieChartWrapper>
        <PieChart
          data={data}
          lineWidth={15}
          onMouseOver={mouseOverSegment}
          onMouseOut={resetText}
        />
      </S.PieChartWrapper>

      <S.SegmentContent>
        <S.TextHolder>
          <S.Text>{title}</S.Text>
          <S.Text>{percentage}</S.Text>
        </S.TextHolder>
      </S.SegmentContent>
    </S.PieChartDiv>
  );
}
