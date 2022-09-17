  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { MainNavigation } from "./main-navigation.component";
  import { ComponentMeta } from "@storybook/react";
  import BackgroundImg from "../../../../public/background.jpeg";


  export default {
    title: "MainNavigation",
    component: MainNavigation,
  } as ComponentMeta<typeof MainNavigation>;

  const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <MainNavigation />
      </div>
   );
  };
  
  export const allMainNavigation = Template.bind({});
