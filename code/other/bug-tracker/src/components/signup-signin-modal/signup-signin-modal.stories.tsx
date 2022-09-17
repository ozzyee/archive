/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SignupSigninModal } from "./signup-signin-modal.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../public/background.jpeg";

export default {
  title: "SignupSigninModal",
  component: SignupSigninModal,
} as ComponentMeta<typeof SignupSigninModal>;

const Template = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <img src={BackgroundImg} alt="" className="background-img" />
      <SignupSigninModal from={""} />
    </div>
  );
};

export const allSignupSigninModal = Template.bind({});
