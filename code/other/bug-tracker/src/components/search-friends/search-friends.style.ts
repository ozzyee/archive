import styled from "styled-components";

export const SearchFriendsWrapper = styled("div")`
  position: absolute;
  right: 12.8rem;
  top: 2.5rem;

  margin-top: 0.5rem;
  width: 18.5rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const SearchFriendsDiv = styled("div")`
  width: 100%;
  height: ${(props) => props.theme.friendsSearchList};
  border-radius: 22px;
  overflow: scroll;
  transition: height 300ms;
  overflow: hidden;
`;

export const OverflowScrollDiv = styled("div")`
  height: 93%;
  overflow: scroll;
  margin-top: 10px;
`;
