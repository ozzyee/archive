import styled from "styled-components";

export const Div = styled("div")`
  width: 100%;
  


  .header__holder__contact{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .eventHolder{
    display: flex;
  }

  @media (min-width: 794px) {
    float: left;
    width: 50%;
    
  }
`;

export const Div2 = styled("div")`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  border-left: 2px solid #242423;
  @media (min-width: 794px) {
    float: left;
    width: 50%;
  }
`;

export const Sections = styled("section")`
  background-color: #1f1f23;
  width: 100%;
  position: relative;
  z-index: 300;
  padding: 20px;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  content: "";
  display: table;
  clear: both;
  margin-bottom: -9px;

  /* display: flex;
  align-items:center;
  justify-content: center; */

  .center__colum {
  }

  .hidden {
    width: 100%;
    overflow: hidden;
    transition: height 300ms;
  }

  #center {
    display: flex;
  }

  @media (min-width: 992px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
