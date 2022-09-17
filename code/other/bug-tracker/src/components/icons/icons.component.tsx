import React from "react";
import { TIconsProps } from "./icons.definition";
import * as S from "./icons.style";
import { ThemeProvider } from "styled-components";

// icons
import { SignOut } from "@styled-icons/fluentui-system-regular/SignOut";
import { Settings } from "@styled-icons/fluentui-system-regular/Settings";
import { Home } from "@styled-icons/fluentui-system-regular/Home";
import { TicketDiagonal } from "@styled-icons/fluentui-system-regular/TicketDiagonal";
import { Library } from "@styled-icons/fluentui-system-regular/Library";
import { Add } from "@styled-icons/fluentui-system-regular/Add";
import { ImageAdd } from "@styled-icons/fluentui-system-regular/ImageAdd";

import { DownArrow } from "@styled-icons/boxicons-regular/DownArrow";
import { UpArrow } from "@styled-icons/boxicons-regular/UpArrow";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { PeopleTeam } from "@styled-icons/fluentui-system-regular/PeopleTeam";

export function Icons({
  Icon,
  status,
  id,
  onClick,
  dataSet,
  className,
}: TIconsProps) {
  const theme = {
    process: status,
  };

  if (Icon == "logOut") return <SignOut className={className} />;

  if (Icon == "settings") return <Settings className={className} />;

  if (Icon == "home") return <Home className={className} />;

  if (Icon == "ticket") return <TicketDiagonal className={className} />;

  if (Icon == "library") return <Library className={className} />;

  if (Icon == "add") return <Add data-name={dataSet} className={className} />;

  if (Icon == "addImage") return <ImageAdd className={className} />;

  if (Icon == "arrowDown") return <DownArrow className={className} />;

  if (Icon == "friends") return <PeopleTeam className={className} />;

  if (Icon == "close")
    return <CloseOutline id={id} onClick={onClick} className={className} />;

  if (Icon == "arrowUp") return <UpArrow className={className} />;

  if (Icon == "process") {
    return (
      <ThemeProvider theme={theme}>
        <S.ProcessIcon />
      </ThemeProvider>
    );
  }

  return null;
}
