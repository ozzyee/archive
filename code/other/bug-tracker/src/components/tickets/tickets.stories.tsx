/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Tickets } from "./tickets.component";
import { ComponentMeta } from "@storybook/react";
import BackgroundImg from "../../../public/background.jpeg";

export default {
   title: "Tickets",
   component: Tickets,
} as ComponentMeta<typeof Tickets>;

const Template = () => {
   return (
      <div>
         {/* @ts-ignore */}
         <img src={BackgroundImg} alt="" className="background-img" />
         {/* inbox ticket */}
         <Tickets
            width="200px"
            ticket="message"
            from="Ozzy Duck"
            message="please sort this logo out as it has no color"
         />
         <br />
         {/* This is the small ticket */}
         <Tickets
            deadline={true}
            status={true}
            width="390px"
            fontSize="14px"
            titleCell="40%"
            deadlineCell="40%"
            progressCell="20%"
         />

         <br />

         <Tickets
            ticket="small-ticket"
            height="40px"
            deadline={true}
            status={true}
            width="390px"
            fontSize="14px"
            titleCell="40%"
            deadlineCell="40%"
            progressCell="20%"
            // this is the text
            titleInput="this is a small ticket 1"
            deadlineInput="22nd sept"
            // progressInput="90%"
            statusInput="process"
         />
         <br />

         {/* This is the tike time  Ticket  */}
         <Tickets
            width="440px"
            titleCell="44%"
            timeCell="25%"
            startTime={true}
            endTime={true}
         />

         <br />

         <Tickets
            ticket="time-ticket"
            height="40px"
            width="440px"
            titleCell="44%"
            timeCell="25%"
            startTime={true}
            endTime={true}
            // this is the text
            titleInput="this is a time ticket wirty"
            startTimeInput="11 am"
            endTimeInput="1 pm"
         />
         <br />

         {/* this is the big ticket */}

         <Tickets
            titleCell="35%"
            groupe={true}
            groupeCell="20%"
            deadline={true}
            deadlineCell="15%"
            status={true}
            statusCell="15%"
            progress={true}
            progressCell="15%"
         />

         <br />
         <Tickets
            ticket="big-ticket"
            height="50px"
            titleCell="35%"
            groupe={true}
            groupeCell="20%"
            deadline={true}
            deadlineCell="15%"
            status={true}
            statusCell="15%"
            progress={true}
            progressCell="15%"
            // this is the text
            titleInput="this is a big ticket with a overflow text q"
            inputGroupe="groupe1"
            deadlineInput="22nd sept"
            statusInput="todo"
            progressInput={90}
         />
      </div>
   );
};

export const allTickets = Template.bind({});
