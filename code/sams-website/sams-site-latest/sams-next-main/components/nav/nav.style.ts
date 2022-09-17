import styled from "styled-components";

export const NavBoddy = styled("nav")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: transparent;
  position: sticky;
  padding: 0px;
  top: 0;
  background-color: black;
  z-index: 3000;
  @media (max-width: 1000px) {
    display: none;
  }

`;

export const NavLinksHolder = styled("ul")`

`;

export const NavLinks = styled("li")`
  font-family: "Oxygen", sans-serif;
  color: #238ed0;
  display: block;
  float: left;
  width: 100px;
  font-size: 17px;
  text-align: center;

  :hover {
    border-radius: 5px;
    cursor: pointer;
    color: white;
    transition: color ease-in-out 200ms;
  }
`;

export const Image = styled("img")`
width: 50px;

`;