  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { UserModalLayout } from "./user-modal-layout.component";
  import { ComponentMeta } from "@storybook/react";
  import BackgroundImg from "../../../../public/background.jpeg";


  export default {
    title: "UserModalLayout",
    component: UserModalLayout,
  } as ComponentMeta<typeof UserModalLayout>;

  const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <UserModalLayout />
      </div>
   );
  };
  
  export const allUserModalLayout = Template.bind({});
