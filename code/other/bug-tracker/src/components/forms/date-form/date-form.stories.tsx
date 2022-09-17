/* eslint-disable @next/next/no-img-element */
import React from "react";
import { DatePicker } from "./date-form.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../../public/background.jpeg";

export default {
  title: "DateTimePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <img src={BackgroundImg} alt="" className="background-img" />
      <DatePicker onClick={() => {}} hideCalender={false} onChange={() => {}} />
    </div>
  );
};

export const allDateTimePicker = Template.bind({});
