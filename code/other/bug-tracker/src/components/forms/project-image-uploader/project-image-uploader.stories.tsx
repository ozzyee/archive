  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { ProjectImageUploader } from "./project-image-uploader.component";
  import { ComponentMeta } from "@storybook/react";
  import BackgroundImg from "../../../../public/background.jpeg";


  export default {
    title: "ProjectImageUploader",
    component: ProjectImageUploader,
  } as ComponentMeta<typeof ProjectImageUploader>;

  const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <ProjectImageUploader />
      </div>
   );
  };
  
  export const allProjectImageUploader = Template.bind({});
