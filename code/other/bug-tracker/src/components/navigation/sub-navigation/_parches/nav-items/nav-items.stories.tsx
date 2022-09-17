/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { NavItems } from "./nav-items.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../../../../public/background.jpeg";

export default {
  title: "NavItems",
  component: NavItems,
} as ComponentMeta<typeof NavItems>;

const Template = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <img src={BackgroundImg} alt="" className="background-img" />
      <NavItems children={""} dataSet={""} />
    </div>
  );
};

export const allNavItems = Template.bind({});
