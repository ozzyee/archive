import styled from "styled-components";

const keys = {
  error: "#d84547",
  warning: "#F68A2C",
  info: "#2696D6",
  successful: "#4E9A52",
};

export const SnackbarWrapper = styled("div")`
  height: 70px;
  position: relative;

  border: 2px solid black;

  margin-top: 5px;
  margin-bottom: 5px;

  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  border-radius: 4px;
  display: flex;
  padding: 6px 16px;
  color: #fff;
  background-color: ${({ theme }) =>
    (theme.alert == "error" && keys.error) ||
    (theme.alert == "warning" && keys.warning) ||
    (theme.alert == "info" && keys.info) ||
    (theme.alert == "successful" && keys.successful)};

  .open-animation {
    opacity: 1;
  }

  .close-animation {
    opacity: 0;
  }
`;

export const IconHolder = styled("div")`
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    (theme.alert == "error" && keys.error) ||
    (theme.alert == "warning" && keys.warning) ||
    (theme.alert == "info" && keys.info) ||
    (theme.alert == "successful" && keys.successful)};
  transition: opacity 600ms;

  &.icon-left {
    margin-right: 12px;
    padding: 7px 0;
    display: flex;
    font-size: 22px;
  }

  &.icon-right {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 45px;
  }
`;

export const TextHolder = styled("div")`
  padding: 8px 0;
  width: 188px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 50px;
  z-index: 1;
  font-size: 13px;
  display: flex;
  align-items: center;
  opacity: 1;
  transition: opacity 600ms;
`;
export const Text = styled("div")`
  width: 100%;
  text-align: left;
  overflow: hidden;
`;

export const CloseBtn = styled("button")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;

  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  text-align: center;
  flex: 0 0 auto;
  font-size: 1.5rem;
  padding: 8px;
  border-radius: 50%;
  overflow: visible;
  color: rgba(0, 0, 0, 0.54);
  /* transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
  color: inherit;
  padding: 5px;
  font-size: 1.125rem;

  :active {
    transform: scale(0.95);
  }
`;
