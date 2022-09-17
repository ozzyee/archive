import * as React from "react";
import { TContactAndDatesProps } from "./contact-and-dates.definition";
import { Div, Div2, Sections } from "./contact-and-dates.style";
import { Headers } from "../section-header/section-header.style";

//components
import { ContactForm } from "../contact-form/contact-form.component";
import { Events } from "../events/events.component";

export function ContactAndDates({ className, events }: TContactAndDatesProps) {
   return (
      <section id="events__section">
         <Sections id="contact" color="white">
            <div className="line">
               <div className="wrapper"></div>
            </div>

            <Div>
               <div className="header__holder__contact">
                  <Headers>Events</Headers>
               </div>

               <div className="eventHolder">
                  <Events events={events} />
               </div>
            </Div>

            <Div2>
               <ContactForm />
            </Div2>
         </Sections>
      </section>
   );
}
