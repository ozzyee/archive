/* eslint-disable @next/next/no-img-element */
import React from "react";
import { InboxLayout } from "./inbox-layout.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../../public/background.jpeg";

export default {
   title: "InboxLayout",
   component: InboxLayout,
} as ComponentMeta<typeof InboxLayout>;

const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <InboxLayout />
      </div>
   );
};

export const allInboxLayout = Template.bind({});
