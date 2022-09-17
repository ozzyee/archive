/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Font } from "./font.component";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Font",
  component: Font,
} as ComponentMeta<typeof Font>;

const Template = () => {
  return (
    <div>
      {/* @ts-ignore */}
      {/* <img src={BackgroundImg} alt="" className="background-img" /> */}
      <Font font="header" children="this is a header " />
    </div>
  );
};

export const allFont = Template.bind({});
