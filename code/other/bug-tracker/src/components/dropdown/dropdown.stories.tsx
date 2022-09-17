/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Dropdown } from "./dropdown.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../public/background.jpeg";

export default {
  title: "Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const projectData = [
  {
    name: "project 01",
    tickets: [
      { id: "01", name: "do this and this", process: "todo" },
      { id: "22", name: "do this and this", process: "todo" },
      { id: "33", name: "do this and this", process: "todo" },

      { id: "02", name: "do this asap", process: "in-process" },
      { id: "022", name: "do this asap", process: "in-process" },

      { id: "031", name: "do the logo", process: "in-review" },
      { id: "031", name: "do the logo", process: "in-review" },
      { id: "031", name: "do the logo", process: "in-review" },
      { id: "031", name: "do the logo", process: "in-review" },
      { id: "031", name: "do the logo", process: "in-review" },

      { id: "041", name: "do icon file", process: "done" },
    ],
  },
  {
    name: "project 02",
    tickets: [
      // { id: "01", name: "do this and this 01", process: "todo" },
      // { id: "02", name: "do this asap 01", process: "in-process" },
      // { id: "03", name: "do the logo 01", process: "in-review" },
      // { id: "04", name: "do icon file 01", process: "done" },
    ],
  },
];

const Template = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <img src={BackgroundImg} alt="" className="background-img" />
      <Dropdown
        title="select"
        data={projectData}
        selectMany={true}
        listID="list01"
        onClick={(e) => {}}
        options={[]}
      />
      <br />
      <br />
      <br />
      <Dropdown
        title="select"
        data={projectData}
        listID="list02"
        onClick={(e) => {}}
        options={[]}
      />
    </div>
  );
};

export const allDropdown = Template.bind({});
