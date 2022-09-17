import styled from "styled-components";

export const ImageHolder = styled("div")`
  @media (max-width: 1000px) {
    .text {
      margin-top: 120px;

      h1 {
        padding-bottom: 10px;
        margin-bottom: 0;
      }
    }

    .crop {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 82px;
      /* position: absolute; */
      /* bottom: 0px; */

      img {
        width: 300px;
      }
    }
  }

  .text {
    h1 {
      padding-bottom: 10px;
      margin-bottom: 0;
    }
  }

  .center__content {
  }

  .icons {
    text-align: center;
  }

  .crop {
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: absolute; */
    /* bottom: 0px; */

    img {
      width: 300px;
    }
  }

  .size {
    font-size: 24px;
    padding: 5px;
    margin-top: 10px;
    color: white;

    :hover {
      color: #238ed0;
      transition: color 200ms;
    }
  }

  @media (min-width: 1024px) {
    width: 1024px;
    height: 350px;

    /* height: 50vh; */

    img {
      display: flex;
      width: 50%;
      object-fit: contain;

      float: right;
    }

    .text {
      width: 40%;
      height: 100%;
      float: left;

      text-align: center;

      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        padding-bottom: 10px;

        font-size: 40px;
      }
    }
    .icons {
      color: wheat;
    }

    .center__content {
    }

    .crop {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const Container = styled("div")`
  @media (min-width: 1024px) {
    overflow: hidden;
    width: 1024px;
  }
`;
