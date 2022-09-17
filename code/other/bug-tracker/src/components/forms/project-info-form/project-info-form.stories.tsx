  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { ProjectInfoForm } from "./project-info-form.component";
  import { ComponentMeta } from "@storybook/react";
  import BackgroundImg from "../../../../public/background.jpeg";


  export default {
    title: "ProjectInfoForm",
    component: ProjectInfoForm,
  } as ComponentMeta<typeof ProjectInfoForm>;

  const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <ProjectInfoForm />
      </div>
   );
  };
  
  export const allProjectInfoForm = Template.bind({});
