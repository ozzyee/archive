import styled from "styled-components";

export const WhiteSection = styled("section")`
  background-color: #eef0f5;
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


  display: flex;
  align-items:center;
  justify-content: center;

  .center__colum{
    width: 1200px;
  }

  .padding__top {
  }

  @media (min-width: 992px) {
    padding: 50px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .shop__wrapper {
    border: 2px;
    margin-top: 27px;
    margin-top: 30px;

    @media (min-width: 992px) {
      margin-top: 0px;
      margin-top: 0px;
    }
  }

  #center {
    display: flex;
  }
`;

export const LightBlackSection = styled("section")`
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

  display: flex;
  align-items:center;
  justify-content: center;


  .center__colum{
    width: 1200px;
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
    padding: 50px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const BlackSection = styled("section")`
  background-color: black;
  width: 100%;
  position: fixed;
  /* margin-top: -340px; */

  @media (min-width: 200px) {
    /* margin-top: -330px; */
  }

  @media (min-width: 700px) {
    /* margin-top: -332px; */
  }

  @media (max-width: 1000px) {
    height: 500px;
  }

  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
  }
`;
