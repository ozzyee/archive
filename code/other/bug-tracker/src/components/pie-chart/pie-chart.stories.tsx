/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PieChartComponent } from "./pie-chart.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../public/background.jpeg";

export default {
  title: "PieChart",
  component: PieChartComponent,
} as ComponentMeta<typeof PieChartComponent>;

const Template = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <img src={BackgroundImg} alt="" className="background-img" />
      <PieChartComponent
        todoPercent={25}
        processPercentage={25}
        inReviewPercentage={25}
        donePercentage={25}
        percent={false}
      />
    </div>
  );
};

export const allPieChart = Template.bind({});
