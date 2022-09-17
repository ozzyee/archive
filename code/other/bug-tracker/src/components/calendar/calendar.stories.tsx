/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Calendar } from "./calendar.component";
import { ComponentMeta } from "@storybook/react";

export default {
   title: "Calendar",
   component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template = () => {
   const [value, onChange] = useState(new Date());
   return (
      <div>
         <Calendar value={value} onChange={onChange} />
      </div>
   );
};

export const allCalendar = Template.bind({});
