import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { TDropdownProps, TOption } from "./dropdown.definition";
import * as S from "./dropdown.style";
import { DropdownHeader } from "./_partials/dropdown-header/dropdown-header.component";
import { DropdownList } from "./_partials/dropdown-list/dropdown-list.component";

// Functions
import { showHideDropdownList } from "./functions/show-hide-list";

export function Dropdown({
  className,
  data,
  selectMany,
  listID,
  width,
  title,
  onClick,
}: TDropdownProps) {
  const [listHeight, setListHeight] = useState(0);
  const [open, setOpen] = useState(false);
  const [arrow, setArrow] = useState("arrowDown");
  const [inputType, setInputType] = useState(false);
  const [list, setList] = useState([]);
  const [deselected, setDeselected] = useState("");
  const [dropdownTitle, setDropdownTitle] = useState(title);
  const [dropdownWidth, setDropdownWidth] = useState("230px");

  const showHideList = (e: any) => {
    const showHideProps = showHideDropdownList(e, open, listID);

    if (showHideProps) {
      setListHeight(showHideProps.dropdownHeight);
      setOpen(showHideProps.dropdownOpen);
      setArrow(showHideProps.arrowIcon);
    }
  };

  const selectedItems = (e: any) => {
    const selectedItem = e.target.innerHTML;
    onClick(e);
    setDropdownTitle(selectedItem);
    setOpen(false);
    setListHeight(0);
    setArrow("arrowDown");
  };

  const checkedItems = (e: any) => {
    const targetID = e.target.id;
    const value = e.target.value;
    const targetElement = e.target.x;

    const object: TOption = {
      id: targetID,
      value: value,
    };

    //* This if statement hides the selected item in the dropdown
    if (targetElement.classList != "hide-checkbox") {
      targetElement.classList.add("hide-checkbox");
    }

    //* This checks if the target checkbox is checked
    //* if so it puts it in to the list array
    //? NOTE: "object" has to values is has the id and value
    if (e.target.checked) {
      // @ts-ignore
      list.push(object);
      setList([...list]);
    } else {
      let check_list: any = [];
      const id = e.target.id;
      setDeselected(id.toString());

      list.map((check) => {
        const object = {
          // @ts-ignore
          id: check.id,
          // @ts-ignore
          value: check.value,
        };

        //* This sees if the checked item is not equal to the target
        //* if this is not true this block is fired
        // @ts-ignore
        if (check.id != targetID) {
          //* it will then add a class to hide this item form the dropdown
          //* then it will push it in to the array
          animationDiv?.classList.add("close-animation");
          check_list.push(object);
        }
      });

      const animationDiv = document.getElementById("list-item-div");
      animationDiv?.classList.remove("open-animation");

      setList(check_list);
    }
  };

  const closeBtn = (e: any) => {
    const id = e.target.parentElement.parentElement;

    id?.classList.add("close-animation");
    setTimeout(function () {
      checkedItems(e);
    }, 250);
  };

  useEffect(() => {
    if (width) setDropdownWidth(width);
  }, [width]);

  useEffect(() => {
    if (selectMany) setInputType(selectMany);
  }, [selectMany]);

  const theme = {
    width: dropdownWidth,
  };

  return (
    <ThemeProvider theme={theme}>
      <S.DropdownDiv id="close" className={`${className} `}>
        <DropdownHeader
          listID={listID}
          showList={showHideList}
          icon={arrow}
          list={list}
          closeIcon={closeBtn}
          title={dropdownTitle}
          selectMany={selectMany}
        />
        <S.Space />
        <DropdownList
          listHeight={listHeight}
          data={data}
          inputType={inputType}
          checkedItems={checkedItems}
          selectedItems={selectedItems}
          list={list}
          deselected={deselected}
          selectMany={selectMany}
        />
      </S.DropdownDiv>
    </ThemeProvider>
  );
}
