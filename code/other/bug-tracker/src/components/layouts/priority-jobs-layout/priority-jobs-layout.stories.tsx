  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { PriorityJobsLayout } from "./priority-jobs-layout.component";
  import { ComponentMeta } from "@storybook/react";
  import BackgroundImg from "../../../../public/background.jpeg";


  export default {
    title: "PriorityJobsLayout",
    component: PriorityJobsLayout,
  } as ComponentMeta<typeof PriorityJobsLayout>;

  const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <PriorityJobsLayout />
      </div>
   );
  };
  
  export const allPriorityJobsLayout = Template.bind({});
