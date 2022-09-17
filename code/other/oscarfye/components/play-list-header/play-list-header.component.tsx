import React, { useState } from "react";
import { fetcher } from "../../lib/fetcher";

//icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

//data fetch
import useSWR from "swr";
import { TUserProps } from "../user/user.definition";
import { PlayListName } from "../play-list-name/play-list-name.style";
export function Component({ className }: TUserProps) {
  const { data, error } = useSWR("/api/user", fetcher);

  if (!data) return null;

  if (error) return null;

  const image = data.image;
  const userName = data.user.name;
  

  //drop down menu
  function dropDownMenu(show: any, hide: any, menu: any) {
    show = document.getElementById("show");
    hide = document.getElementById("hide");
    menu = document.getElementById("nav");

    if (show.style.display === "block") {
      show.style.display = "none";
      hide.style.display = "block";
      menu.style.display = "block";
    } else {
      show.style.display = "block";
      hide.style.display = "none";
      menu.style.display = "none";
    }
  }
  window.addEventListener("scroll", function () {
    const offset = 0;
    const currScrollPos2 = window.pageYOffset;
    const elem = document?.getElementById("background_collor");

    if (currScrollPos2 > offset) {
      const opacity = +currScrollPos2 / 300 + 0;

      if (elem) {
        elem.style.opacity = opacity.toString();
      }
    }
  });

  return (
    <div className={className}>
      <div id="background_collor">
        <div>
          <PlayListName />
        </div>
      </div>

      <div className="navbar active" id="mynav">
        <header id="header">
          <div className="nav__Arrow__Container">
            <div className="nav__ArrowIcon__Left">
              <ChevronLeftIcon className="Font_size_large" />
            </div>
            <div className=" nav__ArrowIcon__Right">
              <ChevronRightIcon className="Font_size_large" />
            </div>
          </div>

          <div className="menu__container">
            <div className="user__contaniner">
              <button onClick={dropDownMenu} className="user__button">
                <img className="user__image" src={image} />

                <p className="user__name">{userName}</p>

                <div className="user__arrow__Icon__container">
                  <ArrowDropDownIcon
                    id="show"
                    className="user__arrow__Icon"
                    style={{ display: "block" }}
                  />
                  <ArrowDropUpIcon
                    id="hide"
                    className="arrow__Icon"
                    style={{ display: "none" }}
                  />
                </div>
              </button>

              <div className="side__nav" id="nav" style={{ display: "none" }}>
                <ul>
                  <a
                    href="components/play-list-header/play-list-header.component?utm_source=play&utm_campaign=wwwredirect"
                    target="blank"
                  >
                    <li>Account</li>
                  </a>
                  <a href="/account/account">
                    <li>Profile</li>
                  </a>
                  <hr />
                  <li>Log out</li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
