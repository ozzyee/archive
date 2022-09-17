  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { Time } from "./time-form.component";
  import { ComponentMeta } from "@storybook/react";
  import BackgroundImg from "../../../../public/background.jpeg";


  export default {
    title: "Time",
    component: Time,
  } as ComponentMeta<typeof Time>;

  const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <Time />
      </div>
   );
  };
  
  export const allTime = Template.bind({});
