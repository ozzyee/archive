/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProjectGraphModal } from "./project-graph-modal.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../../public/background.jpeg";

export default {
   title: "ProjectGraphModal",
   component: ProjectGraphModal,
} as ComponentMeta<typeof ProjectGraphModal>;

const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <ProjectGraphModal />
      </div>
   );
};

export const allProjectGraphModal = Template.bind({});
