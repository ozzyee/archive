  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { SkeletonLoader } from "./skeleton-loader.component";
  import { ComponentMeta } from "@storybook/react";
  import BackgroundImg from "../../../public/background.jpeg";


  export default {
    title: "SkeletonLoader",
    component: SkeletonLoader,
  } as ComponentMeta<typeof SkeletonLoader>;

  const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <SkeletonLoader />
      </div>
   );
  };
  
  export const allSkeletonLoader = Template.bind({});
