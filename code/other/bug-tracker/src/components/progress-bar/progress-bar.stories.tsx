/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProgressBar } from "./progress-bar.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../public/background.jpeg";

export default {
   title: "ProgressBar",
   component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <ProgressBar width="100px" height="20px" percentageDone={10} />
      </div>
   );
};

export const allProgressBar = Template.bind({});
