/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ScheduleForm } from "./schedule-form.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../../public/background.jpeg";

export default {
   title: "ScheduleForm",
   component: ScheduleForm,
} as ComponentMeta<typeof ScheduleForm>;

const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <ScheduleForm />
      </div>
   );
};

export const allScheduleForm = Template.bind({});
