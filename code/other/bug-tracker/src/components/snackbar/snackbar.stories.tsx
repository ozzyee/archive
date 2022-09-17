/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SnackbarComponent } from "./snackbar.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../public/background.jpeg";

export default {
  title: "Snackbar",
  component: SnackbarComponent,
} as ComponentMeta<typeof SnackbarComponent>;

const Template = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <img src={BackgroundImg} alt="" className="background-img" />

      <SnackbarComponent
        alert="error"
        msg="This is an error message!"
        closeFunction={() => {}}
        close={false}
        closable={false}
      />

      <SnackbarComponent
        alert="warning"
        msg="This is an error message!"
        closeFunction={() => {}}
        close={false}
        closable={false}
      />

      <SnackbarComponent
        alert="info"
        msg="This is an error message!"
        closeFunction={() => {}}
        close={false}
        closable={false}
      />

      <SnackbarComponent
        alert="successful"
        msg="This is an error message!"
        closeFunction={() => {}}
        close={false}
        closable={false}
      />
    </div>
  );
};

export const allSnackbar = Template.bind({});
