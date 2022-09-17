  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { FriendsWidget } from "./friends-widget.component";
  import { ComponentMeta } from "@storybook/react";
  import BackgroundImg from "../../../public/background.jpeg";


  export default {
    title: "FriendsWidget",
    component: FriendsWidget,
  } as ComponentMeta<typeof FriendsWidget>;

  const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <FriendsWidget />
      </div>
   );
  };
  
  export const allFriendsWidget = Template.bind({});
