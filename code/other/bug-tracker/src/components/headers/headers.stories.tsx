/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Headers } from "./headers.component";
import { ComponentMeta } from "@storybook/react";

export default {
   title: "Headers",
   component: Headers,
} as ComponentMeta<typeof Headers>;

const Template = () => {
   return (
      <div>
         <Headers header="schedule" date="11 dec 21" />
      </div>
   );
};

export const allHeaders = Template.bind({});
