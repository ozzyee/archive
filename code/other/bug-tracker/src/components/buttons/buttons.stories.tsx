/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Buttons } from "./buttons.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../public/background.jpeg";

export default {
   title: "Buttons",
   component: Buttons,
} as ComponentMeta<typeof Buttons>;

const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <Buttons Btn="signOut" />
         <br />
         <Buttons Btn="settings" />
         <br />
         <Buttons Btn="add" />
         <br />
         <Buttons Btn="addImage" height="30px" width="30px" />
         <br />
         <Buttons Btn="home" />
      </div>
   );
};

export const allButtons = Template.bind({});
