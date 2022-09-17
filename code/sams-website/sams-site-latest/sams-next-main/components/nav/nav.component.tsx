import * as React from "react";
import { TNavProps } from "./nav.definition";
import { NavBoddy, NavLinksHolder, NavLinks, Image } from "./nav.style";

function scroll(e: any) {
   const navId = e.target.dataset.id;

   const section = document.getElementById(navId);
   const height: any = section?.offsetTop;

   const total = height - 50;
   window.scrollTo(0, total);
}

export function Nav({ className }: TNavProps) {
   return (
      <NavBoddy>
         <NavLinksHolder>
            <NavLinks onClick={scroll} data-id="bio__section">
               <Image src="/logi.png" />
            </NavLinks>

            <NavLinks onClick={scroll} data-id="bio__section">
               Biography
            </NavLinks>

            <NavLinks onClick={scroll} data-id="galary__section">
               Gallery
            </NavLinks>

            <NavLinks onClick={scroll} data-id="shop__section">
               Shop
            </NavLinks>
            <NavLinks onClick={scroll} data-id="events__section">
               Events
            </NavLinks>
            <NavLinks onClick={scroll} data-id="events__section">
               Contact
            </NavLinks>
         </NavLinksHolder>
      </NavBoddy>
   );
}

//albums__section
