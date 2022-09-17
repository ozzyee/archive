import React from "react";
import { ThemeProvider } from "styled-components";
import { TDropdownListProps } from "./dropdown-list.definition";
import * as S from "./dropdown-list.style";

export function DropdownList({
  className,
  listHeight,
  data,
  inputType,
  checkedItems,
  selectedItems,
  list,
  deselected,
  selectMany,
}: TDropdownListProps) {
  const theme = {
    width: "300px",
    height: listHeight + "px",
  };

  return (
    <ThemeProvider theme={theme}>
      <S.ListWrapper>
        <S.ListBackground>
          <S.DropDownList id="list">
            {/* TODO: fox these ajy Types  */}
            {data?.map((item: any, key: any) => {
              if (item.id == deselected) {
                const check = document.getElementsByClassName("new" + item.id);

                // @ts-ignore
                if (check[0].checked) {
                  // @ts-ignore
                  check[0].checked = false;
                  const hightID = "list" + item.id;

                  document
                    .getElementById(hightID)
                    ?.classList.remove("hide-checkbox");
                }
              }

              if (inputType) {
                return (
                  <S.ListItems id={"list" + item.id}>
                    <input
                      type="checkbox"
                      id={item.id}
                      className={"new" + item.id}
                      value={item.name}
                      onChange={checkedItems}
                    />
                    <label
                      onClick={checkedItems}
                      className="label"
                      htmlFor={item.id}
                    >
                      {item.name}
                    </label>
                  </S.ListItems>
                );
              } else {
                return (
                  <S.ListItems onClick={selectedItems} key={key}>
                    {item.name}
                  </S.ListItems>
                );
              }
            })}
          </S.DropDownList>
        </S.ListBackground>
      </S.ListWrapper>
    </ThemeProvider>
  );
}
