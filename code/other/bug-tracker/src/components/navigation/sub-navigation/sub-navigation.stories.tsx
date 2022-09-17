/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SubNavigation } from "./sub-navigation.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../../public/background.jpeg";

export default {
   title: "SubNavigation",
   component: SubNavigation,
} as ComponentMeta<typeof SubNavigation>;

const data = [
   {
      id: "01",
      name: "All",
   },
   {
      id: "02",
      name: "My",
   },
   {
      id: "03",
      name: "fixed",
   },
   {
      id: "04",
      name: "Done",
   },
   {
      id: "05",
      name: "Unassigned",
   },
   {
      id: "06",
      name: "Failed",
   },
];

const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <SubNavigation data={data} />
      </div>
   );
};

export const allSubNavigation = Template.bind({});
