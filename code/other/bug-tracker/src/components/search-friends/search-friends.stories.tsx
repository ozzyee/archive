  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { SearchFriends } from "./search-friends.component";
  import { ComponentMeta } from "@storybook/react";
  import BackgroundImg from "../../../public/background.jpeg";


  export default {
    title: "SearchFriends",
    component: SearchFriends,
  } as ComponentMeta<typeof SearchFriends>;

  const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <SearchFriends />
      </div>
   );
  };
  
  export const allSearchFriends = Template.bind({});
