import styled from "styled-components";

export const CenterDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const DisplayHolder = styled("div")`
  width: 90vw;
  height: 100vh;
  float: right;

  position: relative;
  margin-right: 0;
  margin-top: -100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  &.auth-form {
    margin-top: 0vh;
    width: 100vw;
  }
`;

export const SubNavHolder = styled("div")`
  display: flex;
  justify-content: center;
  width: 95%;
`;

export const ContentHolder = styled("div")`
  height: 90%;
  width: 85%;
  margin-top: 50px;
  position: fixed;
`;

export const UserDropDownHolder = styled("div")`
  position: absolute;
  top: 50px;
  right: 236px;
  width: 216px;
  height: ${(props) => props.theme.friendsSearchList};
  border-radius: 22px;
  overflow: hidden;

  transition: height 300ms;
`;
