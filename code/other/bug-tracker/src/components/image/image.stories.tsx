/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Image } from "./image.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../public/background.jpeg";
import TestImg from "../../../public/blank-img.jpeg";

export default {
   title: "Image",
   component: Image,
} as ComponentMeta<typeof Image>;

const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         <Image
            alt="this image is broken"
            width="200px"
            height="200px"
            borderRadius="200px"
            overlay={true}
            // @ts-ignore
            imageUrl={TestImg}
         />
      </div>
   );
};

export const allImage = Template.bind({});
