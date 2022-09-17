  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { DateTimeSelect } from "./date-time-select.component";
  import { ComponentMeta } from "@storybook/react";
  import BackgroundImg from "../../../../public/background.jpeg";


  export default {
    title: "DateTimeSelect",
    component: DateTimeSelect,
  } as ComponentMeta<typeof DateTimeSelect>;

  const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <DateTimeSelect />
      </div>
   );
  };
  
  export const allDateTimeSelect = Template.bind({});
