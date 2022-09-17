import React from "react";
import { TMobileNavProps } from "./mobile-nav.definition";
import { MobileNavDiv } from "./mobile-nav.style";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import {} from "../nav/nav.style";
import { Image } from "../nav/nav.style";

export function MobileNav({ className }: TMobileNavProps) {
   function show() {
      const HideNav: any = document.getElementById("hide");
      const showNav: any = document.getElementById("show");
      const NavList: any = document.getElementById("nav__list");
      const OpacityList: any = document.getElementById("opacity");
      const ListItems: any = document.getElementById("hide__links");

      if ((showNav.style.display = "block")) {
         HideNav.style.display = "block";
         showNav.style.display = "none";
         OpacityList.style.opacity = "1";
         ListItems.style.display = "block";
      }
   }

   //
   function hideThis() {
      const HideNav: any = document.getElementById("hide");
      const showNav: any = document.getElementById("show");
      const NavList: any = document.getElementById("nav__list");
      const OpacityList: any = document.getElementById("opacity");
      const ListItems: any = document.getElementById("hide__links");

      if ((HideNav.style.display = "block")) {
         showNav.style.display = "block";
         HideNav.style.display = "none";
         ListItems.style.display = "none";
         OpacityList.style.opacity = "0";
      }
   }

   function HideNavEvent() {
      const HideNav: any = document.getElementById("hide");
      const OpacityList: any = document.getElementById("opacity");
      const showNav: any = document.getElementById("show");
      const ListItems: any = document.getElementById("hide__links");

      if ((HideNav.style.display = "hide")) {
         HideNav.style.display = "none";
         showNav.style.display = "block";
         ListItems.style.display = "none";

         OpacityList.style.opacity = "0";
      }
   }

   function scroll(e: any) {
      const navId = e.target.dataset.id;

      const section = document.getElementById(navId);
      const height: any = section?.offsetTop;

      const total = height - 800;
      window.scrollTo(0, total);
   }

   return (
      <MobileNavDiv>
         <div className="mobile__image">
            <Image src="/logi.png" />
         </div>
         <div id="show" style={{ display: "block" }}>
            <button onClick={show}>
               <MenuOpenIcon style={{ fontSize: 45 }} />
            </button>
         </div>

         <div id="hide" style={{ display: "none" }}>
            <button onClick={hideThis}>
               <CloseIcon style={{ fontSize: 45 }} />
            </button>
         </div>

         <div id="nav__list">
            <div id="opacity" style={{ opacity: "0" }}>
               <div style={{ display: "none" }} id="hide__links">
                  <div className="padding__this"></div>

                  <li onClick={HideNavEvent}>
                     <li onClick={scroll} data-id="bio__section">
                        Biography
                     </li>
                  </li>

                  <li onClick={HideNavEvent}>
                     <li onClick={scroll} data-id="albums__section">
                        Albums
                     </li>
                  </li>

                  <li onClick={HideNavEvent}>
                     <li onClick={scroll} data-id="galary__section">
                        Gallery
                     </li>
                  </li>

                  <li onClick={HideNavEvent}>
                     <li onClick={scroll} data-id="shop__section">
                        Shop
                     </li>
                  </li>

                  <li onClick={HideNavEvent}>
                     <li onClick={scroll} data-id="events__section">
                        Events
                     </li>
                  </li>

                  <li onClick={HideNavEvent}>
                     <li onClick={scroll} data-id="events__section">
                        Contact
                     </li>
                  </li>

                  <div className="padding__this__bottom"></div>
               </div>
            </div>
         </div>
      </MobileNavDiv>
   );
}
