  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { ProjectCreateForm } from "./project-ticket-create-from.component";
  import { ComponentMeta } from "@storybook/react";
  import BackgroundImg from "../../../../public/background.jpeg";


  export default {
    title: "ProjectCreateForm",
    component: ProjectCreateForm,
  } as ComponentMeta<typeof ProjectCreateForm>;

  const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <ProjectCreateForm />
      </div>
   );
  };
  
  export const allProjectCreateForm = Template.bind({});
