import React, { ReactElement } from "react";
import { TSnackbarProps } from "./snackbar.definition";

import * as S from "./snackbar.style";
import { ErrorCircle } from "@styled-icons/boxicons-regular/ErrorCircle";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { Error } from "@styled-icons/boxicons-regular/Error";
import { InfoCircle } from "@styled-icons/boxicons-regular/InfoCircle";
import { CheckmarkCircleOutline } from "@styled-icons/evaicons-outline/CheckmarkCircleOutline";
import { ThemeProvider } from "styled-components";

export function SnackbarComponent({
  alert,
  msg,
  closeFunction,
  close,
  closable,
}: TSnackbarProps) {
  function Icons({ icon }: { icon: string }): ReactElement | null {
    switch (icon) {
      case "error":
        return <ErrorCircle height={24} />;
      case "warning":
        return <Error height={24} />;
      case "info":
        return <InfoCircle height={24} />;
      case "successful":
        return <CheckmarkCircleOutline height={24} />;
      default:
        return null;
    }
  }

  const theme = {
    alert: alert,
  };

  return (
    <ThemeProvider theme={theme}>
      <S.SnackbarWrapper>
        <S.IconHolder
          className={`${close ? "close-animation" : "open-animation"}`}
        >
          <Icons icon={alert} />
        </S.IconHolder>

        <S.TextHolder
          className={`${close ? "close-animation" : "open-animation"}`}
        >
          <S.Text>{msg}</S.Text>
        </S.TextHolder>

        <S.IconHolder className="icon-right">
          <S.CloseBtn
            className={`${close ? "close-animation" : "open-animation"}`}
          >
            {closable && <Close height={22} onClick={closeFunction} />}
          </S.CloseBtn>
        </S.IconHolder>
      </S.SnackbarWrapper>
    </ThemeProvider>
  );
}
