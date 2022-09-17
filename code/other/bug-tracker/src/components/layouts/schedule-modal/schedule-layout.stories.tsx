  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { ScheduleLayout } from "./schedule-layout.component";
  import { ComponentMeta } from "@storybook/react";
  import BackgroundImg from "../../../../public/background.jpeg";


  export default {
    title: "ScheduleLayout",
    component: ScheduleLayout,
  } as ComponentMeta<typeof ScheduleLayout>;

  const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <ScheduleLayout />
      </div>
   );
  };
  
  export const allScheduleLayout = Template.bind({});
