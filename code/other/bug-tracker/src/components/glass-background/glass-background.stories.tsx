/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../../styles/globals.css";
import { GlassBackground } from "./glass-background.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../public/background.jpeg";

export default {
   title: "GlassBackground",
   component: GlassBackground,
} as ComponentMeta<typeof GlassBackground>;

const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <div className="temp-glass">
            <GlassBackground />
         </div>
      </div>
   );
};

export const allGlassBackground = Template.bind({});
