import styled from "styled-components";

export const Div = styled("div")`
  .image__holder {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    padding-top: 0px;
    margin-bottom: 3px;
    padding-bottom: 8px;
    padding-right: 0px;
    margin-top: 40px;

    border: 2px solid transparent;

    img {
      max-height: 230px;
      min-height: 150px;
      border-radius: 20px;
      object-fit: cover;

      border: 20px;
    }

    @media (min-width: 992px) {
      max-width: 23%;
      display: flex;
      align-items: center;
      justify-content: center;
      /* float: left; */
      padding-bottom: 0px;
      padding-top: 0;
      margin-top: 0;
      padding-left: 0;

      width: 700px;
      float: left;

      img {
        max-height: 260px;
        min-height: 150px;
        max-width: 260px;
        min-height: 150px;
      }
    }
  }

  .space {
    border: 2px solid transparent;
    height: 10px;
  }

  .text {
    padding: 10px;
    padding-left: 33px;
    padding-right: 33px;

    h1 {
      margin-top: 0px;
    }
    @media (min-width: 642px) {
      width: 100%;
    }

    @media (min-width: 992px) {
      padding-left: 18px;
      padding-right: 5px;
      padding-top: 0px;
      padding-left: 33px;
      padding-right: 0px;
    }
  }

  .text__about {
    padding: 33px;
    margin-top: 17px;
    padding-bottom: 0px;

    h1 {
      margin-top: 0px;
    }
    @media (min-width: 642px) {
      padding-top: 0px;
      padding-left: 33px;
      padding-right: 33px;
      margin-top: 0px;
    }

    @media (min-width: 768px) {
      padding-top: 52px;
      padding-left: 33px;
      padding-right: 33px;
      margin-top: 0px;
    }

    @media (min-width: 929px) {
      padding-top: 0px;
      padding-left: 0px;
      padding-right: 0px;
      margin-top: 0px;
    }
  }

  .show__more__wrapper {
    transition: height 300ms;
    height: 0;
    overflow: hidden;
  }

  .hidden {
    /* width: 100%; */
    /* overflow: hidden; */
    transition: height 300ms;
    width: 100%;
  }

  .text__div {
    width: 100%;

    margin-bottom: 20px;

    @media (min-width: 992px) {
      width: 77%;
      float: left;
      margin-top: 0px;
      border: 2px solid transparent;
      margin-bottom: 0;
    }
  }

  .text__div__about {
    width: 100%;
    margin-top: -22px;
    margin-bottom: -11px;

    @media (min-width: 992px) {
      width: 77%;
      margin-top: -6px;
      float: left;
      padding-top: 0px;
      margin-top: 0px;
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  .button__container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 27px;
    padding-top: 0px;
    @media (min-width: 929px) {
      padding-bottom: 0px;
      margin-bottom: 0px;
    }
  }

  .button__container__about {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 27px;

    @media (min-width: 642px) {
      padding-bottom: 0px;
    }
    @media (min-width: 929px) {
      margin-bottom: 20px;
    }
  }
`;

export const Image = styled("img")`
  max-height: 270px;
  min-width: 100px;
`;
