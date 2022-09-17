import React, { useState } from "react";
import { TMaineHeaderProps } from "./main-header .definition";
import { fetcher } from "../../lib/fetcher";

//main-header 

//icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

//data fetch
import useSWR from "swr";
import { LoaderPage } from "../loader-page/loader-page.style";

export function Component({ className }: TMaineHeaderProps) {
  const { data, error } = useSWR("/api/user", fetcher);

  if (!data) return null;

  if (error) return null;

  const image = data.image;
  const userName = data.user.name;

  //drop down menu
  function dropDownMenu(_: any) {
    const show = document.getElementById("show");
    const hide = document.getElementById("hide");
    const menu = document.getElementById("nav");

  if(show && hide && menu){
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
  }

  const changeBackground = () => {
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className={className}>
      <div className="navbar active" id="my-nav">
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
            <div className="user__container">
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
                    href="components/main-header /main-header .component?utm_source=play&utm_campaign=wwwredirect"
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
