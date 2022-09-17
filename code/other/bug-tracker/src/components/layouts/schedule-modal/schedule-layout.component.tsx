import React, { useState } from "react";
import { TScheduleLayoutProps } from "./schedule-layout.definition";
import * as S from "./schedule-layout.style";
import { GlassBackground } from "../../glass-background/glass-background.component";
import { Calendar } from "../../calendar/calendar.component";
import { Headers } from "../../headers/headers.component";
import moment from "moment";
import { Tickets } from "../../tickets/tickets.component";

export function ScheduleLayout({ className }: TScheduleLayoutProps) {
   const [value, onChange] = useState(new Date());
   const formattedDate = moment(value).format("MMM Do YY");

   return (
      <S.ScheduleLayoutDiv className={className}>
         <GlassBackground>
            <S.FlexBox>
               <S.CalenderHolder>
                  <Calendar value={value} onChange={onChange} />
               </S.CalenderHolder>

               <S.TicketHeaderHolder>
                  <Headers header="schedule" date={formattedDate} />

                  <S.LineBreak>
                     <div className="line" />
                  </S.LineBreak>

                  <Tickets
                     width="100%"
                     titleCell="50%"
                     timeCell="25%"
                     startTime={true}
                     endTime={true}
                     hideGlass={true}
                     marginLeft="10px"
                  />

                  {/* <TicketHolder width="100%" height="190px">
                     <Tickets
                        ticket="time-ticket"
                        height="40px"
                        width="98%"
                        titleCell="50%"
                        timeCell="25%"
                        startTime={true}
                        endTime={true}
                        // this is the text
                        titleInput="this is a time ticket wirty"
                        startTimeInput="11 am"
                        endTimeInput="1 pm"
                        marginLeft="10px"
                     />
                  </TicketHolder> */}
               </S.TicketHeaderHolder>
            </S.FlexBox>
         </GlassBackground>
      </S.ScheduleLayoutDiv>
   );
}
