/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProjectThumbnail } from "./project-thumbnail.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../public/background.jpeg";

export default {
   title: "ProjectThumbnail",
   component: ProjectThumbnail,
} as ComponentMeta<typeof ProjectThumbnail>;

const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <ProjectThumbnail imageUrl="https://www.tazzadesign.com/wp-content/uploads/sites/65/2013/11/dummy-image-square.jpg" />
      </div>
   );
};

export const allProjectThumbnail = Template.bind({});
